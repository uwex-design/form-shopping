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
import { Label } from "@/components/ui/label"
import { Calendar } from "lucide-react"

interface SecaoEventosProps {
  form: UseFormReturn<ShoppingFormData>
}

export function SecaoEventos({ form }: SecaoEventosProps) {
  const tipoEventos = form.watch("tipoEventos")

  return (
    <AccordionItem value="secao-eventos">
      <Card>
        <AccordionTrigger className="px-6 hover:no-underline">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-primary" />
            <div className="text-left">
              <h3 className="font-semibold">Eventos</h3>
              <p className="text-sm text-muted-foreground">Como o shopping trabalha com eventos</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <CardContent className="pt-6 space-y-6">
            <FormField
              control={form.control}
              name="tipoEventos"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel>Como o shopping lida com eventos?</FormLabel>
                  <FormControl>
                    <div className="space-y-3">
                      <div
                        className={`flex items-start space-x-3 rounded-lg border p-4 cursor-pointer transition-colors ${
                          field.value === "area-eventos"
                            ? "border-primary bg-primary/5"
                            : "border-input hover:border-primary/50"
                        }`}
                        onClick={() => field.onChange("area-eventos")}
                      >
                        <input
                          type="radio"
                          value="area-eventos"
                          checked={field.value === "area-eventos"}
                          onChange={() => field.onChange("area-eventos")}
                          className="mt-0.5 h-4 w-4 text-primary"
                        />
                        <div className="flex-1">
                          <Label className="cursor-pointer font-medium">
                            Área de Eventos no Site
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            O shopping possui uma área dedicada para eventos, com página específica listando eventos futuros e em andamento
                          </p>
                        </div>
                      </div>

                      <div
                        className={`flex items-start space-x-3 rounded-lg border p-4 cursor-pointer transition-colors ${
                          field.value === "novidades"
                            ? "border-primary bg-primary/5"
                            : "border-input hover:border-primary/50"
                        }`}
                        onClick={() => field.onChange("novidades")}
                      >
                        <input
                          type="radio"
                          value="novidades"
                          checked={field.value === "novidades"}
                          onChange={() => field.onChange("novidades")}
                          className="mt-0.5 h-4 w-4 text-primary"
                        />
                        <div className="flex-1">
                          <Label className="cursor-pointer font-medium">
                            Eventos em Novidades/Blog
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Eventos são informados através da área de novidades ou blog do shopping, junto com outras informações
                          </p>
                        </div>
                      </div>

                      <div
                        className={`flex items-start space-x-3 rounded-lg border p-4 cursor-pointer transition-colors ${
                          field.value === "nao-possui"
                            ? "border-primary bg-primary/5"
                            : "border-input hover:border-primary/50"
                        }`}
                        onClick={() => field.onChange("nao-possui")}
                      >
                        <input
                          type="radio"
                          value="nao-possui"
                          checked={field.value === "nao-possui"}
                          onChange={() => field.onChange("nao-possui")}
                          className="mt-0.5 h-4 w-4 text-primary"
                        />
                        <div className="flex-1">
                          <Label className="cursor-pointer font-medium">
                            Não possui eventos
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            O shopping não realiza eventos ou não deseja divulgá-los no site
                          </p>
                        </div>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {tipoEventos && tipoEventos !== "nao-possui" && (
              <FormField
                control={form.control}
                name="observacoesEventos"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Observações sobre Eventos</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descreva o tipo de eventos realizados, frequência, informações adicionais..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Informações adicionais sobre os eventos do shopping
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
