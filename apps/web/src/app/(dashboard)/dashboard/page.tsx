import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <Badge variant="secondary">Placeholder</Badge>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>No cases yet</CardTitle>
          <CardDescription>
            Cases, uploads and AI-assisted analyses will appear here once the
            backend is connected.
          </CardDescription>
        </CardHeader>
        <CardContent />
      </Card>
    </div>
  );
}
