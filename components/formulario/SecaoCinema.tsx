"use client"

import { UseFormReturn } from "react-hook-form"
import { ShoppingFormData } from "@/lib/schemas"
import { PLATAFORMAS_INGRESSOS } from "@/lib/types"
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
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Film } from "lucide-react"

interface SecaoCinemaProps {
  form: UseFormReturn<ShoppingFormData>
}

export function SecaoCinema({ form }: SecaoCinemaProps) {
  const possuiCinema = form.watch("possuiCinema")

  return (
    <AccordionItem value="secao-3">
      <Card>
        <AccordionTrigger className="px-6 hover:no-underline">
          <div className="flex items-center gap-3">
            <Film className="h-5 w-5 text-primary" />
            <div className="text-left">
              <h3 className="font-semibold">3. Cinema</h3>
              <p className="text-sm text-muted-foreground">Informações sobre cinema e venda de ingressos</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <CardContent className="pt-6 space-y-6">
            <FormField
              control={form.control}
              name="possuiCinema"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">O shopping possui cinema?</FormLabel>
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

            {possuiCinema && (
              <>
                <FormField
                  control={form.control}
                  name="nomeCinema"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome do Cinema</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex: Cinemark, Cinépolis, UCI"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="plataformaIngressos"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Integração de Ingressos</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a plataforma" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {PLATAFORMAS_INGRESSOS.map((plataforma) => (
                            <SelectItem key={plataforma.value} value={plataforma.value}>
                              {plataforma.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Selecione a plataforma de venda de ingressos
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="credenciaisApiCinema"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Credenciais da API</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="API Key, Token, ID do cinema..."
                          className="min-h-[100px] font-mono text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        API Key, Token, ID do cinema (informação confidencial)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </CardContent>
        </AccordionContent>
      </Card>
    </AccordionItem>
  )
}
