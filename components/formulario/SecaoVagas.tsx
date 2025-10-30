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
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

interface SecaoVagasProps {
  form: UseFormReturn<ShoppingFormData>
}

export function SecaoVagas({ form }: SecaoVagasProps) {
  const possuiIntranetmall = form.watch("possuiIntranetmall")

  return (
    <AccordionItem value="secao-4">
      <Card>
        <AccordionTrigger className="px-6 hover:no-underline">
          <div className="flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-primary" />
            <div className="text-left">
              <h3 className="font-semibold">4. Vagas de Emprego</h3>
              <p className="text-sm text-muted-foreground">Integração com plataformas de vagas</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <CardContent className="pt-6 space-y-6">
            <FormField
              control={form.control}
              name="possuiIntranetmall"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Utiliza Intranetmall para vagas?</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {possuiIntranetmall && (
              <FormField
                control={form.control}
                name="dadosIntegracaoIntranetmall"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dados de Integração Intranetmall</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="ID do shopping, credenciais de API, etc."
                        className="min-h-[120px] font-mono text-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      ID do shopping, credenciais de API, etc.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </CardContent>
        </AccordionContent>
      </Card>
    </AccordionItem>
  )
}
