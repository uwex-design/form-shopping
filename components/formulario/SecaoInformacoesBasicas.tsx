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
import { Building2 } from "lucide-react"

interface SecaoInformacoesBasicasProps {
  form: UseFormReturn<ShoppingFormData>
}

export function SecaoInformacoesBasicas({ form }: SecaoInformacoesBasicasProps) {
  return (
    <AccordionItem value="secao-1">
      <Card>
        <AccordionTrigger className="px-6 hover:no-underline">
          <div className="flex items-center gap-3">
            <Building2 className="h-5 w-5 text-primary" />
            <div className="text-left">
              <h3 className="font-semibold">1. Informações Básicas do Shopping</h3>
              <p className="text-sm text-muted-foreground">Nome e endereço do empreendimento</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <CardContent className="pt-6 space-y-6">
            <FormField
              control={form.control}
              name="nomeOficial"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Oficial do Shopping *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex: Shopping Cidade Jardim"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Informe o nome completo e oficial do empreendimento
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="enderecoCompleto"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Endereço Completo *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Av. Principal, 1000 - Centro - São Paulo/SP - CEP: 01234-567"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Rua/Avenida, número, complemento, bairro, cidade, estado e CEP
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </AccordionContent>
      </Card>
    </AccordionItem>
  )
}
