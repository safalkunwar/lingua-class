import { logout } from "@/app/login/actions";

export async function POST() {
  await logout();
  return new Response(null, { status: 204 });
}
