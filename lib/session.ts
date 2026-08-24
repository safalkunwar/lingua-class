export type SessionPayload = {
  username: string;
  role: "admin" | "teacher" | "student";
};

const SECRET = process.env.AUTH_SECRET ?? "lingua-class-dev-secret-change-me";

function base64UrlEncode(input: string) {
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecode(input: string) {
  const padded = input.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded + "=".repeat((4 - (padded.length % 4)) % 4));
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

async function hmac(data: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(data));
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function createSessionToken(username: string, role: SessionPayload["role"]) {
  const payload = `${username}:${role}`;
  const signature = await hmac(payload);
  return base64UrlEncode(`${payload}:${signature}`);
}

export async function verifySessionToken(token: string | undefined | null): Promise<SessionPayload | null> {
  if (!token) return null;
  try {
    const decoded = base64UrlDecode(token);
    const parts = decoded.split(":");
    if (parts.length !== 3) return null;
    const [username, role, signature] = parts;
    if (role !== "admin" && role !== "teacher" && role !== "student") return null;
    const expected = await hmac(`${username}:${role}`);
    if (expected !== signature) return null;
    return { username, role };
  } catch {
    return null;
  }
}
