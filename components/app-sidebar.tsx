import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  AlarmPlusIcon,
  ChartNoAxesColumn,
  ChartNoAxesCombined,
  FileTextIcon,
  HomeIcon,
  InfoIcon,
  LogOut,
  ReceiptText,
  TreePalm,
  UserPlusIcon,
} from "lucide-react";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";

const items = [
  {
    title: "Página Inicial",
    url: "/bem-vindo",
    icon: HomeIcon,
  },
  {
    title: "Painel",
    url: "/painel",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Recesso",
    url: "/recesso",
    icon: TreePalm,
  },
  {
    title: "Recisão",
    url: "/recisao",
    icon: ReceiptText,
  },
  {
    title: "Ponto",
    url: "/ponto",
    icon: AlarmPlusIcon,
  },
  {
    title: "Relatórios",
    url: "/relatorios",
    icon: FileTextIcon,
  },
  {
    title: "Informações",
    url: "/informacoes",
    icon: InfoIcon,
  },
  {
    title: "Cadastro",
    url: "/cadastro",
    icon: UserPlusIcon,
  },
];

export function AppSidebar() {

  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="text-2xl font-bold text-center">Sistema de Ponto</h2>
      </SidebarHeader>
      <SidebarContent className="flex flex-col gap-4 p-3">
        <SidebarGroup />
        <SidebarGroupLabel className="text-lg font-semibold ">
          Páginas
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
              <SidebarMenuButton>
                <LogOut />
                  <p>Sair</p>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="flex flex-col items-center justify-center">
        <p>Feito por Arthur &copy; 2025</p>
        <a
          href="https://github.com/arthurdev06"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2">
            <DiGithubBadge className="w-10 h-10" />
            <FaLinkedinIn className="w-8 h-8" />
          </div>
        </a>
      </SidebarFooter>
    </Sidebar>
  );
}
