import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = { title: "Sign in" };

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign in to MedVision AI</CardTitle>
        <CardDescription>
          Access is limited to authorized clinical and research staff.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          The sign-in form will be added in the authentication phase.
        </p>
      </CardContent>
    </Card>
  );
}
