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
import { Separator } from "@/components/ui/separator"
import { Phone, Share2 } from "lucide-react"

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
              <h3 className="font-semibold">2. Canais de Contato e Redes Sociais</h3>
              <p className="text-sm text-muted-foreground">Telefone, e-mail e redes sociais</p>
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

            <Separator />

            {/* Redes Sociais */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Share2 className="h-4 w-4 text-primary" />
                <h4 className="text-sm font-medium">Redes Sociais</h4>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="instagram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instagram</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="@shoppingcenter"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="facebook"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Facebook</FormLabel>
                      <FormControl>
                        <Input
                          type="url"
                          placeholder="https://facebook.com/shopping"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn</FormLabel>
                      <FormControl>
                        <Input
                          type="url"
                          placeholder="https://linkedin.com/company/shopping"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tiktok"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>TikTok</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="@shoppingcenter"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="youtube"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>YouTube</FormLabel>
                      <FormControl>
                        <Input
                          type="url"
                          placeholder="https://youtube.com/@shopping"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
        </AccordionContent>
      </Card>
    </AccordionItem>
  )
}
