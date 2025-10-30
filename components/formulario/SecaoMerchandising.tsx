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
import { Megaphone } from "lucide-react"

interface SecaoMerchandisingProps {
  form: UseFormReturn<ShoppingFormData>
}

export function SecaoMerchandising({ form }: SecaoMerchandisingProps) {
  return (
    <AccordionItem value="secao-8">
      <Card>
        <AccordionTrigger className="px-6 hover:no-underline">
          <div className="flex items-center gap-3">
            <Megaphone className="h-5 w-5 text-primary" />
            <div className="text-left">
              <h3 className="font-semibold">8. Página de Merchandising</h3>
              <p className="text-sm text-muted-foreground">Serviços de marketing e mídia indoor</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <CardContent className="pt-6 space-y-6">
            <FormField
              control={form.control}
              name="infoMerchandising"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Serviços de Merchandising</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Mídia indoor, quiosques, eventos, ações promocionais..."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Mídia indoor, quiosques, eventos, ações promocionais
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="emailMarketing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail para Merchandising</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="marketing@shopping.com.br"
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
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="font-medium">Mídia Kit</h4>
                <p className="text-sm text-muted-foreground">
                  Upload de mídia kit com tabela de preços e formatos (PDF)
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
