"use server";

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  LogOut,
} from "lucide-react";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup, 
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { signOutAction } from "@/app/actions";
import { createClient } from "@/utils/supabase/server"

import { Button } from "@/components/ui/button"

export async function NavUser() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <SidebarMenu>
      <SidebarMenuItem className="text-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center justify-between flex-1 text-left text-sm leading-tight">
              <div className="grid">
                <span className="truncate font-semibold">
                  {user?.email?.split("@")[0]}
                </span>
                <span className="truncate text-xs">{user?.email}</span>
              </div>
              <ChevronsUpDown className="size-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="end"
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {user?.email?.split("@")[0]}
                  </span>
                  <span className="truncate text-xs">{user?.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck className="mr-2 h-4 w-4" />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <form action={signOutAction}>
              <Button type="submit" variant={"outline"} className="w-full">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </Button>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
