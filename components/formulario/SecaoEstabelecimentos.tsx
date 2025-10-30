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
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Download } from "lucide-react"

interface SecaoEstabelecimentosProps {
  form: UseFormReturn<ShoppingFormData>
}

export function SecaoEstabelecimentos({ form }: SecaoEstabelecimentosProps) {
  const handleDownloadModelo = () => {
    // Aqui você pode implementar o download de um modelo de planilha
    toast({
      title: "Download iniciado",
      description: "O modelo de planilha está sendo baixado.",
    })
  }

  return (
    <AccordionItem value="secao-9">
      <Card>
        <AccordionTrigger className="px-6 hover:no-underline">
          <div className="flex items-center gap-3">
            <Building className="h-5 w-5 text-primary" />
            <div className="text-left">
              <h3 className="font-semibold">9. Cadastro de Estabelecimentos</h3>
              <p className="text-sm text-muted-foreground">Planilha com lojas e serviços</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <CardContent className="pt-6 space-y-6">
            <div className="rounded-lg border border-dashed border-muted-foreground/25 p-6">
              <div className="flex flex-col items-center justify-center gap-4 text-center">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Planilha de Estabelecimentos</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Baixe o modelo, preencha com os dados das lojas e envie
                  </p>
                  <Button variant="outline" onClick={handleDownloadModelo}>
                    <Download className="mr-2 h-4 w-4" />
                    Baixar Modelo de Planilha
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Aceita: .xlsx, .csv, .xls
                </p>
                <p className="text-xs text-muted-foreground">
                  Funcionalidade de upload será implementada com integração ao backend
                </p>
              </div>
            </div>

            <FormField
              control={form.control}
              name="observacoesEstabelecimentos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Observações Adicionais</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Lojas âncoras, inaugurações previstas..."
                      className="min-h-[100px]"
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

// Importar toast para usar na função
import { toast } from "@/components/ui/use-toast"
