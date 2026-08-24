import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySessionToken } from "@/lib/session";
import { AdminPanel } from "./admin-panel";

export const metadata = {
  title: "Admin Panel — LinguaClass",
};

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = await verifySessionToken(cookieStore.get("session")?.value);

  if (!session || session.role !== "admin") {
    redirect("/");
  }

  return (
    <div className="mx-auto w-full max-w-6xl p-4 sm:p-6 lg:p-8">
      <AdminPanel currentUsername={session.username} />
    </div>
  );
}
