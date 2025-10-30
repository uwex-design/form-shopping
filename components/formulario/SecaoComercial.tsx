"use client"

import { UseFormReturn } from "react-hook-form"
import { ShoppingFormData } from "@/lib/schemas"
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Store } from "lucide-react"

interface SecaoComercialProps {
  form: UseFormReturn<ShoppingFormData>
}

export function SecaoComercial({ form }: SecaoComercialProps) {
  return (
    <AccordionItem value="secao-7">
      <Card>
        <AccordionTrigger className="px-6 hover:no-underline">
          <div className="flex items-center gap-3">
            <Store className="h-5 w-5 text-primary" />
            <div className="text-left">
              <h3 className="font-semibold">7. Quero Ser Lojista</h3>
              <p className="text-sm text-muted-foreground">Informações comerciais e de locação</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <CardContent className="pt-6 space-y-6">
            <FormField
              control={form.control}
              name="infoLocacao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Conteúdo da Página Comercial</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Texto sobre benefícios e diferenciais do shopping para lojistas..."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Texto sobre benefícios e diferenciais do shopping
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="emailComercial"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail para Propostas Comerciais</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="comercial@shopping.com.br"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="rounded-lg border border-dashed border-muted-foreground/25 p-6">
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <div className="rounded-full bg-muted p-3">
                  <svg
                    className="h-6 w-6 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
                <h4 className="font-medium">Documentos Complementares</h4>
                <p className="text-sm text-muted-foreground">
                  Upload de Mídia Kit, plantas, folders (PDF, imagens)
                </p>
                <p className="text-xs text-muted-foreground">
                  Funcionalidade de upload será implementada com integração ao backend
                </p>
              </div>
            </div>
          </CardContent>
        </AccordionContent>
      </Card>
    </AccordionItem>
  )
}
