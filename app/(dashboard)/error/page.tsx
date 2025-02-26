"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function ErrorPage() {
  <Alert>
    <Terminal className="h-4 w-4" />
    <AlertTitle>Eita!</AlertTitle>
    <AlertDescription>
      Parece que algo deu errado. Tente novamente.
      se o problema persistir, entre em contato com o suporte.
    </AlertDescription>
  </Alert>;

}
