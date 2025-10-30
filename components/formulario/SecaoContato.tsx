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
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"

interface SecaoContatoProps {
  form: UseFormReturn<ShoppingFormData>
}

export function SecaoContato({ form }: SecaoContatoProps) {
  return (
    <AccordionItem value="secao-2">
      <Card>
        <AccordionTrigger className="px-6 hover:no-underline">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <div className="text-left">
              <h3 className="font-semibold">2. Canais de Contato</h3>
              <p className="text-sm text-muted-foreground">Telefone, WhatsApp e e-mail</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <CardContent className="pt-6 space-y-6">
            <FormField
              control={form.control}
              name="telefonePrincipal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone Principal</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="(11) 1234-5678"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>WhatsApp</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="+55 11 98765-4321"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="emailContato"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail de Contato Geral *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="contato@shopping.com.br"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    E-mail que receberá mensagens do formulário de contato
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
