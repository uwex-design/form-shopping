"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"
import { shoppingFormSchema, type ShoppingFormData } from "@/lib/schemas"
import { Accordion } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Importar as seções
import { SecaoInformacoesBasicas } from "./SecaoInformacoesBasicas"
import { SecaoContato } from "./SecaoContato"
import { SecaoCinema } from "./SecaoCinema"
import { SecaoVagas } from "./SecaoVagas"
import { SecaoHorarios } from "./SecaoHorarios"
import { SecaoEstacionamento } from "./SecaoEstacionamento"
import { SecaoComercial } from "./SecaoComercial"
import { SecaoMerchandising } from "./SecaoMerchandising"
import { SecaoEstabelecimentos } from "./SecaoEstabelecimentos"
import { SecaoMateriais } from "./SecaoMateriais"
import { Save, Send, FileText } from "lucide-react"

const STORAGE_KEY = "shopping-form-draft"

export function FormularioShopping() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [progress, setProgress] = useState(0)

  const form = useForm<ShoppingFormData>({
    resolver: zodResolver(shoppingFormSchema),
    defaultValues: {
      nomeOficial: "",
      enderecoCompleto: "",
      telefonePrincipal: "",
      whatsapp: "",
      emailContato: "",
      possuiCinema: false,
      nomeCinema: "",
      plataformaIngressos: "",
      credenciaisApiCinema: "",
      possuiIntranetmall: false,
      dadosIntegracaoIntranetmall: "",
      horarioLojas: "",
      horarioPracaAlimentacao: "",
      horariosEspeciais: "",
      infoEstacionamento: "",
      valoresEstacionamento: "",
      formasPagamentoEstacionamento: "",
      infoLocacao: "",
      emailComercial: "",
      infoMerchandising: "",
      emailMarketing: "",
      observacoesEstabelecimentos: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      tiktok: "",
      youtube: "",
      informacoesAdicionais: "",
    },
  })

  // Carregar rascunho do localStorage ao montar o componente
  useEffect(() => {
    const savedDraft = localStorage.getItem(STORAGE_KEY)
    if (savedDraft) {
      try {
        const parsedData = JSON.parse(savedDraft)
        form.reset(parsedData)
        toast({
          title: "Rascunho carregado",
          description: "Seus dados foram restaurados com sucesso.",
        })
      } catch (error) {
        console.error("Erro ao carregar rascunho:", error)
      }
    }
  }, [form, toast])

  // Calcular progresso baseado nos campos preenchidos
  useEffect(() => {
    const subscription = form.watch((values) => {
      const totalFields = Object.keys(values).length
      const filledFields = Object.values(values).filter(
        (value) => value !== "" && value !== false && value !== undefined
      ).length
      const calculatedProgress = Math.round((filledFields / totalFields) * 100)
      setProgress(calculatedProgress)
    })
    return () => subscription.unsubscribe()
  }, [form])

  // Salvar rascunho
  const handleSaveDraft = () => {
    const currentValues = form.getValues()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentValues))
    toast({
      title: "Rascunho salvo",
      description: "Suas informações foram salvas localmente.",
    })
  }

  // Submit do formulário
  const onSubmit = async (data: ShoppingFormData) => {
    setIsSubmitting(true)

    try {
      // Aqui você implementaria o envio real dos dados
      // Por exemplo, uma chamada à API
      console.log("Dados do formulário:", data)

      // Simular envio
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Limpar rascunho após envio bem-sucedido
      localStorage.removeItem(STORAGE_KEY)

      toast({
        title: "Formulário enviado com sucesso!",
        description: "Suas informações foram recebidas. Entraremos em contato em breve.",
      })

      // Resetar formulário
      form.reset()
    } catch (error) {
      toast({
        title: "Erro ao enviar formulário",
        description: "Ocorreu um erro ao enviar suas informações. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-3xl">Formulário de Captação - Shopping Center</CardTitle>
          <CardDescription>
            Preencha as informações abaixo para desenvolvimento do website do seu shopping center.
            Todos os campos marcados com * são obrigatórios.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progresso de preenchimento</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Accordion type="multiple" className="w-full space-y-4">
            <SecaoInformacoesBasicas form={form} />
            <SecaoContato form={form} />
            <SecaoCinema form={form} />
            <SecaoVagas form={form} />
            <SecaoHorarios form={form} />
            <SecaoEstacionamento form={form} />
            <SecaoComercial form={form} />
            <SecaoMerchandising form={form} />
            <SecaoEstabelecimentos form={form} />
            <SecaoMateriais form={form} />
          </Accordion>

          <Separator className="my-8" />

          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={handleSaveDraft}
              className="w-full sm:w-auto"
            >
              <Save className="mr-2 h-4 w-4" />
              Salvar Rascunho
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <FileText className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Formulário
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
