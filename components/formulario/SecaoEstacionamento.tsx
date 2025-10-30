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
import { Car } from "lucide-react"

interface SecaoEstacionamentoProps {
  form: UseFormReturn<ShoppingFormData>
}

export function SecaoEstacionamento({ form }: SecaoEstacionamentoProps) {
  return (
    <AccordionItem value="secao-6">
      <Card>
        <AccordionTrigger className="px-6 hover:no-underline">
          <div className="flex items-center gap-3">
            <Car className="h-5 w-5 text-primary" />
            <div className="text-left">
              <h3 className="font-semibold">6. Estacionamento</h3>
              <p className="text-sm text-muted-foreground">Valores, horários e formas de pagamento</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <CardContent className="pt-6 space-y-6">
            <FormField
              control={form.control}
              name="infoEstacionamento"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Informações do Estacionamento</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Número de vagas, vagas preferenciais, serviços..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Descreva a estrutura e serviços do estacionamento
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="valoresEstacionamento"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valores do Estacionamento</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Primeira hora: R$ 15,00&#10;Hora adicional: R$ 5,00..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="formasPagamentoEstacionamento"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Formas de Pagamento Aceitas</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Dinheiro, cartões, PIX, app"
                      {...field}
                    />
                  </FormControl>
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
