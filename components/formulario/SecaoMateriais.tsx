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
import { Separator } from "@/components/ui/separator"
import { ImageIcon } from "lucide-react"

interface SecaoMateriaisProps {
  form: UseFormReturn<ShoppingFormData>
}

export function SecaoMateriais({ form }: SecaoMateriaisProps) {
  return (
    <AccordionItem value="secao-10">
      <Card>
        <AccordionTrigger className="px-6 hover:no-underline">
          <div className="flex items-center gap-3">
            <ImageIcon className="h-5 w-5 text-primary" />
            <div className="text-left">
              <h3 className="font-semibold">10. Materiais Complementares</h3>
              <p className="text-sm text-muted-foreground">Logos e fotos profissionais</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <CardContent className="pt-6 space-y-6">
            {/* Área de Upload de Logos */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Logotipos</h4>
              <div className="rounded-lg border border-dashed border-muted-foreground/25 p-6">
                <div className="flex flex-col items-center justify-center gap-2 text-center">
                  <div className="rounded-full bg-muted p-3">
                    <ImageIcon className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h5 className="font-medium">Logos do Shopping</h5>
                  <p className="text-sm text-muted-foreground">
                    Logo principal e alternativo em alta resolução
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Aceita: PNG, SVG, AI, EPS
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Funcionalidade de upload será implementada com integração ao backend
                  </p>
                </div>
              </div>
            </div>

            {/* Área de Upload de Fotos */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Fotos Profissionais</h4>
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
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h5 className="font-medium">Fotos do Shopping</h5>
                  <p className="text-sm text-muted-foreground">
                    Fachada, áreas internas, praça de alimentação
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Funcionalidade de upload será implementada com integração ao backend
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Informações Adicionais */}
            <FormField
              control={form.control}
              name="informacoesAdicionais"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Informações Adicionais</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Qualquer outra informação relevante..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Campo livre para informações complementares
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
