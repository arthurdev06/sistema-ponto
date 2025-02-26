"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { login, signup } from "./actions";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z
    .string()
    .email()
    .min(8, { message: "O email deve ter no mínimo 8 caracteres." })
    .max(50, { message: "O email deve ter no máximo 50 caracteres." }),
  password: z
    .string()
    .min(8, { message: "A senha deve ter no mínimo 8 caracteres." })
    .max(50, { message: "A senha deve ter no máximo 50 caracteres." }),
});

export default function Login() {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      const result = await login(formData);
      
      if (result.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error,
        });
        return;
      }

      if (result.success) {
        router.push("/");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Algo deu errado. Por favor, tente novamente.",
      });
    }
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter)]">
      <header className="row-start-1 flex gap-6 flex-wrap items-center justify-center">
        <h1 className="text-4xl font-bold">Sistema de Ponto</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Form {...form}>
          <form
            className="space-y-8 w-[300px]"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email de usuário</FormLabel>
                    <FormControl>
                      <Input
                        className="max-w-[300px]"
                        placeholder="Digite seu email"
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
