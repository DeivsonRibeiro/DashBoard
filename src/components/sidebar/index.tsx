"use client"

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import Link from "next/link"
import { Home, HomeIcon, LineChart, LogOut, Package, PanelBottom, Settings2, ShoppingBag, User } from "lucide-react"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent} from "../ui/tooltip"

export default function Sidebar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">
       <aside className="fixed inset-y-0 left-0 z-10 hidden w14 border-r bg-background sm:flex flex-col">
        <nav className="flex flex-col item-center gap-4 px-2 py-5">
        <TooltipProvider>
            <Link 
            href="#"
            className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary
            text-primary-foreground rounded-full"
            >
            <Package className="h-4 w-4 />" />
            <span className="sr-only">Dashboard Avatar</span>
            </Link>
            
            <Tooltip>
                <TooltipTrigger asChild>
                 <Link 
            href="#"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg 
            text-muted-foreground transition-colors hover:text-foreground"
            >
            <HomeIcon className="h-5 w-5" />
            <span className="sr-only">Inicio</span>
            </Link>

                </TooltipTrigger>
                <TooltipContent side="right">Inicio</TooltipContent>
            </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                 <Link 
            href="#"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg 
            text-muted-foreground transition-colors hover:text-foreground"
            >
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Pdidos</span>
            </Link>

                </TooltipTrigger>
                <TooltipContent side="right">Pedidos</TooltipContent>
            </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                 <Link 
            href="#"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg 
            text-muted-foreground transition-colors hover:text-foreground"
            >
            <Package className="h-5 w-5" />
            <span className="sr-only">Produtos</span>
            </Link>

                </TooltipTrigger>
                <TooltipContent side="right">Produtos</TooltipContent>
            </Tooltip>

               <Tooltip>
                <TooltipTrigger asChild>
                 <Link 
            href="#"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg 
            text-muted-foreground transition-colors hover:text-foreground"
            >
            <User className="h-5 w-5" />
            <span className="sr-only">Clientes</span>
            </Link>

                </TooltipTrigger>
                <TooltipContent side="right">Clientes</TooltipContent>
            </Tooltip>

               <Tooltip>
                <TooltipTrigger asChild>
                 <Link 
            href="#"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg 
            text-muted-foreground transition-colors hover:text-foreground"
            >
            <Settings2 className="h-5 w-5" />
            <span className="sr-only">Configurações</span>
            </Link>

                </TooltipTrigger>
                <TooltipContent side="right">Configurações</TooltipContent>
            </Tooltip>

            
        
        </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
 <Tooltip>
                <TooltipTrigger asChild>
                 <Link 
            href="#"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg 
            text-muted-foreground transition-colors hover:text-foreground"
            >
            <LogOut className="h-5 w-5 text-red-500" />
            <span className="sr-only">Sair</span>
            </Link>

                </TooltipTrigger>
                <TooltipContent side="right">Sair</TooltipContent>
            </Tooltip>

            </TooltipProvider>
        </nav>
       </aside>

        <div className="flex flex-col sm:gap-4 sm:p-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <PanelBottom className="h-5 w-5" />
                <span className="sr-only">Abrir / Fechar Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center gap-2 rounded-full bg-primary text-lg text-primary-foreground md:text-base"
                  prefetch={false}
                >
                  <Package className="h-5 w-5 transition-all" />
                  <span className="sr-only">Logo do Projeto</span>
                </Link>

                  <Link
                  href="#"
                  className=" flex items-center gap-4 px-2.5 text-muted-foreground 
                  hover:text-foreground"
                  prefetch={false}>
                  <Home className="h-5 w-5 transition-all" />
                  Inicio
                </Link>

                    <Link
                  href="#"
                  className=" flex items-center gap-4 px-2.5 text-muted-foreground 
                  hover:text-foreground"
                  prefetch={false}>
                  <ShoppingBag className="h-5 w-5 transition-all" />
                  Pedidos
                </Link>

                    <Link
                  href="#"
                  className=" flex items-center gap-4 px-2.5 text-muted-foreground 
                  hover:text-foreground"
                  prefetch={false}>
                  <Package className="h-5 w-5 transition-all" />
                  Produtos
                </Link>

                     <Link
                  href="#"
                  className=" flex items-center gap-4 px-2.5 text-muted-foreground 
                  hover:text-foreground"
                  prefetch={false}>
                  <User className="h-5 w-5 transition-all" />
                  Clientes
                </Link>

                     <Link
                  href="#"
                  className=" flex items-center gap-4 px-2.5 text-muted-foreground 
                  hover:text-foreground"
                  prefetch={false}>
                  <Settings2 className="h-5 w-5 transition-all" />
                  Configurações
                </Link>
                
              </nav>
            </SheetContent>
          </Sheet>
          <h2>Menu</h2>
        </header>
      </div>
    </div>
  )
}