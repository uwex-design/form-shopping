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
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"

interface SecaoHorariosProps {
  form: UseFormReturn<ShoppingFormData>
}

export function SecaoHorarios({ form }: SecaoHorariosProps) {
  return (
    <AccordionItem value="secao-5">
      <Card>
        <AccordionTrigger className="px-6 hover:no-underline">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            <div className="text-left">
              <h3 className="font-semibold">5. Horários de Funcionamento</h3>
              <p className="text-sm text-muted-foreground">Horários das lojas, praça de alimentação e especiais</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <CardContent className="pt-6 space-y-6">
            <FormField
              control={form.control}
              name="horarioLojas"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Horário de Funcionamento das Lojas</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Segunda a sábado: 10h às 22h&#10;Domingo: 12h às 20h"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Informe os horários de funcionamento
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="horarioPracaAlimentacao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Horário da Praça de Alimentação</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Segunda a domingo: 10h às 22h"
                      className="min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Se diferente das lojas
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="horariosEspeciais"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Horários Especiais</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Feriados, datas comemorativas..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Horários em feriados ou datas especiais
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
