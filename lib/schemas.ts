import { z } from "zod"

/**
 * Schema de validação para o formulário de captação de informações de shopping centers
 */
export const shoppingFormSchema = z.object({
  // SEÇÃO 1: INFORMAÇÕES BÁSICAS
  nomeOficial: z.string().min(3, {
    message: "O nome do shopping deve ter pelo menos 3 caracteres",
  }),
  enderecoCompleto: z.string().min(10, {
    message: "Informe o endereço completo do shopping",
  }),

  // SEÇÃO 2: CANAIS DE CONTATO E REDES SOCIAIS
  telefonePrincipal: z.string().optional(),
  whatsapp: z.string().optional(),
  emailContato: z.string().email({
    message: "Informe um e-mail válido",
  }),
  // Redes sociais (agora na seção 2)
  instagram: z.string().optional(),
  facebook: z.string().url({
    message: "Informe uma URL válida",
  }).optional().or(z.literal("")),
  linkedin: z.string().url({
    message: "Informe uma URL válida",
  }).optional().or(z.literal("")),
  tiktok: z.string().optional(),
  youtube: z.string().url({
    message: "Informe uma URL válida",
  }).optional().or(z.literal("")),

  // SEÇÃO 3: CINEMA (condicional)
  possuiCinema: z.boolean().default(false),
  nomeCinema: z.string().optional(),
  plataformaIngressos: z.string().optional(),
  credenciaisApiCinema: z.string().optional(),

  // SEÇÃO 4: VAGAS DE EMPREGO
  possuiIntranetmall: z.boolean().default(false),
  dadosIntegracaoIntranetmall: z.string().optional(),

  // SEÇÃO 5: HORÁRIOS DE FUNCIONAMENTO
  horarioLojas: z.string().optional(),
  horarioPracaAlimentacao: z.string().optional(),
  horariosEspeciais: z.string().optional(),

  // SEÇÃO 6: ESTACIONAMENTO
  infoEstacionamento: z.string().optional(),
  valoresEstacionamento: z.string().optional(),
  formasPagamentoEstacionamento: z.string().optional(),

  // SEÇÃO 7: PÁGINA "QUERO SER LOJISTA"
  infoLocacao: z.string().optional(),
  emailComercial: z.string().email({
    message: "Informe um e-mail válido",
  }).optional().or(z.literal("")),

  // SEÇÃO 8: MERCHANDISING
  infoMerchandising: z.string().optional(),
  emailMarketing: z.string().email({
    message: "Informe um e-mail válido",
  }).optional().or(z.literal("")),

  // SEÇÃO EVENTOS
  tipoEventos: z.enum(["area-eventos", "novidades", "nao-possui"]).optional(),
  observacoesEventos: z.string().optional(),

  // SEÇÃO 9: CADASTRO DE ESTABELECIMENTOS
  linkPlanilhaEstabelecimentos: z.string().url({
    message: "Informe um link válido do Google Sheets",
  }).optional().or(z.literal("")),
  observacoesEstabelecimentos: z.string().optional(),

  // SEÇÃO 10: MATERIAIS COMPLEMENTARES
  // Observações finais
  informacoesAdicionais: z.string().optional(),
}).refine((data) => {
  // Se possuiCinema é true, nomeCinema deve estar preenchido
  if (data.possuiCinema && !data.nomeCinema) {
    return false
  }
  return true
}, {
  message: "Informe o nome do cinema",
  path: ["nomeCinema"],
})

export type ShoppingFormData = z.infer<typeof shoppingFormSchema>
