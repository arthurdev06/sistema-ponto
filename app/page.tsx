"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { createSupabaseClient } from "@/utils/supabase/server";
import { toast, Toaster } from "sonner";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "O nome de usuário deve ter no mínimo 2 caracteres." })
    .max(50, {
      message: "O nome de usuário deve ter no máximo 50 caracteres.",
    }),
  password: z
    .string()
    .min(8, { message: "A senha deve ter no mínimo 8 caracteres." })
    .max(50, { message: "A senha deve ter no máximo 50 caracteres." }),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const supabase = createSupabaseClient();

      const { data: existingUser, error: checkError } = await supabase
        .from("users")
        .select("id")
        .eq("username", values.username)
        .single();

      if (!existingUser) {
        toast.error("Usuário não cadastrado");
        return;
      }

      const { data: user, error } = await supabase
        .from("users")
        .select("id, username")
        .eq("username", values.username)
        .eq("password", values.password)
        .single();

      if (error || !user) {
        toast.error("Senha incorreta");
        return;
      }

      sessionStorage.setItem("userId", user.id.toString());
      window.location.href = "/ponto";
    } catch (error) {
      console.error("Erro geral:", error);
      toast.error("Ocorreu um erro ao tentar fazer login");
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter)]">
      <Toaster richColors position="top-center" />
      <header className="row-start-1 flex gap-6 flex-wrap items-center justify-center">
        <h1 className="text-4xl font-bold">Sistema de Ponto</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-[300px]"
          >
            <div className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome de usuário</FormLabel>
                    <FormControl>
                      <Input
                        className="max-w-[300px]"
                        placeholder="Digite seu nome de usuário"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        className="max-w-[300px]"
                        type="password"
                        placeholder="Digite sua senha"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full max-w-[300px]">
              Entrar
            </Button>
            <Link
              href="/recovery"
              className="text-sm text-muted-foreground block text-center"
            >
              Esqueceu sua senha?
            </Link>
          </form>
        </Form>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
