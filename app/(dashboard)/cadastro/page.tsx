"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { login, signup } from "@/app/(auth)/login/actions";
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
import { Switch } from "@/components/ui/switch";

const userFormSchema = z.object({
  email: z
    .string()
    .email()
    .min(3, { message: "O email deve ter no mínimo 3 caracteres" })
    .max(50, { message: "O email deve ter no máximo 50 caracteres" }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
  full_name: z.string().min(3, { message: "O nome completo é obrigatório" }),
  weekly_hours: z.number().min(1).max(44).default(44),
  work_schedule: z.string().default("08:00-17:00"),
  lunch_break: z.string().default("12:00-13:00"),
  department: z.string().optional(),
  position: z.string().optional(),
  admission_date: z
    .string()
    .default(() => new Date().toISOString().split("T")[0]),
  status: z.enum(["active", "inactive"]).default("active"),
  supervisor_id: z.number().optional(),
  overtime_allowed: z.boolean().default(false),
  flexible_hours: z.boolean().default(false),
  remote_work: z.boolean().default(false),
});

export default function Cadastro() {
  const router = useRouter();
  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      email: "",
      password: "",
      full_name: "",
      weekly_hours: 44,
      work_schedule: "08:00-17:00",
      lunch_break: "12:00-13:00",
      status: "active",
      overtime_allowed: false,
      flexible_hours: false,
      remote_work: false,
    },
  });

  async function onSubmit(values: z.infer<typeof userFormSchema>) {
    try {
      // First create the auth user
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      
      const result = await signup(formData);
      
      if (result.error) {
        throw new Error(result.error);
      }

      // If successful, redirect to dashboard
      router.push("/painel");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Add toast notification here if you want to show error messages
    }
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Cadastro de Funcionário</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email do funcionário</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome completo</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Departamento</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cargo</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="work_schedule"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Horário de trabalho</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="08:00-17:00" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lunch_break"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Horário de almoço</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="12:00-13:00" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="overtime_allowed"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center space-y-4 py-4">
                  <FormLabel>Horas extras permitidas</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="flexible_hours"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center space-y-4 py-4">
                  <FormLabel>Horário flexível</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="remote_work"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center space-y-4 py-4">
                  <FormLabel>Trabalho remoto</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Registrar</Button>
        </form>
      </Form>
    </div>
  );
}
