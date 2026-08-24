"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  GraduationCap,
  Shield,
  UserPlus,
  Trash2,
  RefreshCw,
  MonitorPlay,
  BookOpen,
  MessageCircle,
  Briefcase,
  Search,
  AlertTriangle,
} from "lucide-react";

type PublicUser = {
  id: string;
  username: string;
  displayName: string;
  role: "admin" | "teacher" | "student";
  createdAt: string;
  lastLoginAt: string | null;
};

const ROLE_STYLES: Record<PublicUser["role"], string> = {
  admin: "bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-500/15 dark:text-rose-300 dark:border-rose-500/30",
  teacher:
    "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:border-indigo-500/30",
  student:
    "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/30",
};

const QUICK_LINKS = [
  { href: "/classroom", label: "Classroom Mode", desc: "Present lessons to the class", icon: MonitorPlay },
  { href: "/teacher", label: "Teacher Dashboard", desc: "Lesson plans and materials", icon: GraduationCap },
  { href: "/vocabulary", label: "Vocabulary", desc: "All levels and quizzes", icon: BookOpen },
  { href: "/conversations", label: "Conversations", desc: "Dialogue library", icon: MessageCircle },
  { href: "/business-english", label: "Business English", desc: "Business modules", icon: Briefcase },
];

function formatDate(iso: string | null) {
  if (!iso) return "Never";
  return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export function AdminPanel({ currentUsername }: { currentUsername: string }) {
  const [users, setUsers] = useState<PublicUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/users", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to load users");
      const data = await res.json();
      setUsers(data.users ?? []);
    } catch {
      setError("Could not load users. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const stats = useMemo(
    () => ({
      total: users.length,
      students: users.filter((u) => u.role === "student").length,
      teachers: users.filter((u) => u.role === "teacher").length,
      admins: users.filter((u) => u.role === "admin").length,
      newThisWeek: users.filter(
        (u) => Date.now() - new Date(u.createdAt).getTime() < 7 * 24 * 60 * 60 * 1000
      ).length,
    }),
    [users]
  );

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    if (!s) return users;
    return users.filter(
      (u) =>
        u.username.toLowerCase().includes(s) ||
        u.displayName.toLowerCase().includes(s) ||
        u.role.includes(s)
    );
  }, [users, search]);

  async function changeRole(user: PublicUser, role: PublicUser["role"]) {
    setBusyId(user.id);
    try {
      const res = await fetch("/api/admin/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: user.id, role }),
      });
      const data = await res.json();
      if (!res.ok) {
        window.alert(data.error || "Failed to update role.");
        return;
      }
      setUsers((prev) => prev.map((u) => (u.id === user.id ? { ...u, role } : u)));
    } catch {
      window.alert("Network error. Please try again.");
    } finally {
      setBusyId(null);
    }
  }

  async function removeUser(user: PublicUser) {
    if (!window.confirm(`Delete account "${user.username}"? This cannot be undone.`)) return;
    setBusyId(user.id);
    try {
      const res = await fetch(`/api/admin/users?id=${encodeURIComponent(user.id)}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) {
        window.alert(data.error || "Failed to delete user.");
        return;
      }
      setUsers((prev) => prev.filter((u) => u.id !== user.id));
    } catch {
      window.alert("Network error. Please try again.");
    } finally {
      setBusyId(null);
    }
  }

  const statCards = [
    { label: "Total Users", value: stats.total, icon: Users, color: "text-indigo-500" },
    { label: "Students", value: stats.students, icon: UserPlus, color: "text-emerald-500" },
    { label: "Teachers", value: stats.teachers, icon: GraduationCap, color: "text-blue-500" },
    { label: "Admins", value: stats.admins, icon: Shield, color: "text-rose-500" },
  ];

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="flex items-center gap-2 text-2xl font-extrabold sm:text-3xl">
          <Shield className="h-7 w-7 text-rose-500" />
          Admin Panel
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage registered users and jump to key features. Signed in as{" "}
          <span className="font-medium text-foreground">{currentUsername}</span>
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="flex items-center gap-3 p-4 sm:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted">
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div className="min-w-0">
                  <div className="text-xl font-extrabold sm:text-2xl">{loading ? "—" : stat.value}</div>
                  <div className="truncate text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <section>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-bold">Users ({users.length})</h2>
          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button variant="outline" size="icon" onClick={loadUsers} disabled={loading} title="Refresh" aria-label="Refresh users">
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            </Button>
          </div>
        </div>

        {error && (
          <div className="flex items-center justify-between gap-3 rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            <span className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 shrink-0" />
              {error}
            </span>
            <Button variant="outline" size="sm" onClick={loadUsers}>
              Retry
            </Button>
          </div>
        )}

        {loading ? (
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-14 animate-pulse rounded-xl bg-muted/50" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed py-12 text-center text-muted-foreground">
            <Users className="mx-auto mb-2 h-8 w-8 opacity-40" />
            <p>{users.length === 0 ? "No users registered yet." : `No users match "${search}".`}</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">User</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Joined</th>
                  <th className="px-4 py-3">Last login</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((user) => {
                  const isSelf = user.username === currentUsername;
                  return (
                    <tr key={user.id} className="border-t transition-colors hover:bg-muted/30">
                      <td className="px-4 py-3">
                        <div className="font-medium">{user.displayName}</div>
                        <div className="text-xs text-muted-foreground">@{user.username}</div>
                      </td>
                      <td className="px-4 py-3">
                        {isSelf ? (
                          <Badge variant="outline" className={ROLE_STYLES[user.role]}>
                            {user.role}
                          </Badge>
                        ) : (
                          <Select
                            value={user.role}
                            onValueChange={(value) => changeRole(user, value as PublicUser["role"])}
                            disabled={busyId === user.id}
                          >
                            <SelectTrigger className="h-8 w-[120px] text-xs capitalize">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="student">Student</SelectItem>
                              <SelectItem value="teacher">Teacher</SelectItem>
                              <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">{formatDate(user.createdAt)}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">{formatDate(user.lastLoginAt)}</td>
                      <td className="px-4 py-3 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-1.5 text-destructive hover:bg-destructive/10 hover:text-destructive"
                          disabled={isSelf || busyId === user.id}
                          onClick={() => removeUser(user)}
                          title={isSelf ? "You cannot delete your own account" : "Delete user"}
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-4 text-lg font-bold">Quick Links</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.href} href={link.href}>
                <Card className="group h-full p-4 transition-all hover:border-primary/50 hover:shadow-md sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold group-hover:text-primary">{link.label}</div>
                      <div className="truncate text-xs text-muted-foreground">{link.desc}</div>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
