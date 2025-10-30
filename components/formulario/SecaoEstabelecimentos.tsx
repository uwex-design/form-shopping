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
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building, ExternalLink } from "lucide-react"

interface SecaoEstabelecimentosProps {
  form: UseFormReturn<ShoppingFormData>
}

const MODELO_PLANILHA_URL = "https://docs.google.com/spreadsheets/d/MODELO_ID/edit"

export function SecaoEstabelecimentos({ form }: SecaoEstabelecimentosProps) {
  const handleAbrirModelo = () => {
    window.open(MODELO_PLANILHA_URL, '_blank')
  }

  return (
    <AccordionItem value="secao-9">
      <Card>
        <AccordionTrigger className="px-6 hover:no-underline">
          <div className="flex items-center gap-3">
            <Building className="h-5 w-5 text-primary" />
            <div className="text-left">
              <h3 className="font-semibold">9. Cadastro de Estabelecimentos</h3>
              <p className="text-sm text-muted-foreground">Planilha Google Sheets com lojas e serviços</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <CardContent className="pt-6 space-y-6">
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <svg
                      className="h-5 w-5 text-primary"
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
                  <div className="flex-1">
                    <h4 className="font-medium mb-2">Instruções para Planilha de Estabelecimentos</h4>
                    <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                      <li>Clique no botão abaixo para abrir o modelo de planilha do Google Sheets</li>
                      <li>Faça uma cópia da planilha (Arquivo → Fazer uma cópia)</li>
                      <li className="font-medium text-primary">
                        📋 Crie dentro da planilha 3 páginas (abas) com os nomes:
                        <ul className="ml-6 mt-1 space-y-1 list-disc">
                          <li><strong>LOJAS</strong></li>
                          <li><strong>GASTRONOMIA</strong></li>
                          <li><strong>SERVIÇOS</strong></li>
                        </ul>
                      </li>
                      <li>Preencha os dados dos estabelecimentos na página correspondente</li>
                      <li className="font-medium text-destructive">⚠️ NÃO altere os nomes das colunas da tabela</li>
                      <li>Após preencher, compartilhe a planilha com permissão de visualização</li>
                      <li>Cole o link compartilhado no campo abaixo</li>
                    </ol>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  onClick={handleAbrirModelo}
                  className="w-full sm:w-auto"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Abrir Modelo de Planilha
                </Button>
              </div>
            </div>

            <FormField
              control={form.control}
              name="linkPlanilhaEstabelecimentos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link da Planilha Google Sheets *</FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="https://docs.google.com/spreadsheets/d/..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Cole aqui o link da sua cópia da planilha com permissão de visualização
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

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
