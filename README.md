# Formulário de Captação - Shopping Center

Formulário completo e profissional para captação de informações para desenvolvimento de websites de shopping centers.

## Tecnologias Utilizadas

- **Next.js 14+** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior segurança
- **Shadcn/ui** - Componentes UI modernos e acessíveis
- **Tailwind CSS** - Estilização utility-first
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Lucide React** - Ícones modernos

## Características

- ✅ **10 Seções Organizadas** - Formulário dividido em seções lógicas e fáceis de navegar
- ✅ **Validação Completa** - Validação em tempo real com mensagens de erro amigáveis
- ✅ **Campos Condicionais** - Campos que aparecem/desaparecem baseados em respostas
- ✅ **Salvar Rascunho** - Salvamento automático no localStorage
- ✅ **Indicador de Progresso** - Barra de progresso mostrando % de preenchimento
- ✅ **Responsivo** - Interface otimizada para mobile, tablet e desktop
- ✅ **Accordion UI** - Seções colapsáveis para melhor organização
- ✅ **Cor Primária Customizada** - `#9c5bf0` aplicada em todo o design
- ✅ **Acessibilidade** - Componentes acessíveis do Radix UI

## Estrutura do Projeto

```
/form-shopping
├── app/
│   ├── globals.css          # Estilos globais e variáveis CSS
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página inicial com formulário
├── components/
│   ├── formulario/
│   │   ├── FormularioShopping.tsx           # Componente principal
│   │   ├── SecaoInformacoesBasicas.tsx     # Seção 1
│   │   ├── SecaoContato.tsx                # Seção 2
│   │   ├── SecaoCinema.tsx                 # Seção 3
│   │   ├── SecaoVagas.tsx                  # Seção 4
│   │   ├── SecaoHorarios.tsx               # Seção 5
│   │   ├── SecaoEstacionamento.tsx         # Seção 6
│   │   ├── SecaoComercial.tsx              # Seção 7
│   │   ├── SecaoMerchandising.tsx          # Seção 8
│   │   ├── SecaoEstabelecimentos.tsx       # Seção 9
│   │   └── SecaoMateriais.tsx              # Seção 10
│   └── ui/                   # Componentes Shadcn/ui
├── lib/
│   ├── schemas.ts            # Schemas de validação Zod
│   ├── types.ts              # Tipos TypeScript
│   └── utils.ts              # Utilitários
└── public/                   # Arquivos estáticos
```

## Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm, yarn, ou pnpm

### Passos

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd form-shopping
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Build para Produção

```bash
npm run build
npm start
```

## Deploy na Vercel

Este projeto está otimizado para deploy na Vercel:

1. Faça push do código para um repositório Git (GitHub, GitLab, Bitbucket)
2. Importe o projeto na [Vercel](https://vercel.com)
3. A Vercel detectará automaticamente Next.js e fará o build
4. Seu site estará no ar em segundos!

### Deploy via CLI

```bash
npm i -g vercel
vercel
```

## Seções do Formulário

### 1. Informações Básicas do Shopping
- Nome oficial do shopping (obrigatório)
- Endereço completo (obrigatório)

### 2. Canais de Contato
- Telefone principal
- WhatsApp
- E-mail de contato geral (obrigatório)

### 3. Cinema (Condicional)
- Possui cinema? (switch)
- Nome do cinema
- Plataforma de ingressos (select)
- Credenciais da API

### 4. Vagas de Emprego
- Utiliza Intranetmall? (switch)
- Dados de integração

### 5. Horários de Funcionamento
- Horário das lojas
- Horário da praça de alimentação
- Horários especiais

### 6. Estacionamento
- Informações do estacionamento
- Valores
- Formas de pagamento

### 7. Quero Ser Lojista
- Conteúdo da página comercial
- E-mail comercial
- Upload de mídia kit (placeholder)

### 8. Merchandising
- Serviços de merchandising
- E-mail de marketing
- Upload de mídia kit (placeholder)

### 9. Cadastro de Estabelecimentos
- Upload de planilha (placeholder)
- Observações sobre estabelecimentos

### 10. Materiais Complementares
- Upload de logos (placeholder)
- Upload de fotos (placeholder)
- Redes sociais (Instagram, Facebook, LinkedIn, TikTok, YouTube)
- Informações adicionais

## Funcionalidades Implementadas

### Salvar Rascunho
Os dados são salvos automaticamente no `localStorage` do navegador. Ao retornar à página, o usuário pode continuar de onde parou.

### Indicador de Progresso
Calcula automaticamente a porcentagem de campos preenchidos e exibe uma barra de progresso.

### Validação em Tempo Real
- Campos obrigatórios claramente marcados com `*`
- Validação de e-mail
- Validação de URLs
- Mensagens de erro contextuais

### Campos Condicionais
Campos aparecem dinamicamente baseados em respostas:
- Cinema: campos aparecem apenas se "Possui cinema?" estiver ativado
- Intranetmall: campos aparecem apenas se "Utiliza Intranetmall?" estiver ativado

## Próximos Passos / Melhorias

### Backend Integration
- [ ] Implementar API endpoint para receber dados do formulário
- [ ] Configurar envio de e-mail com dados preenchidos
- [ ] Implementar upload real de arquivos (AWS S3, Cloudinary, etc.)

### Funcionalidades Adicionais
- [ ] Máscaras de entrada para telefone (usando react-input-mask)
- [ ] Preview do formulário antes de enviar
- [ ] Exportar dados para PDF
- [ ] Autenticação para salvar múltiplos rascunhos
- [ ] Dashboard administrativo para visualizar submissões

### Melhorias de UX
- [ ] Animações de transição entre seções
- [ ] Tour guiado para primeiro acesso
- [ ] Modo escuro (dark mode)
- [ ] Internacionalização (i18n)

## Customização

### Alterar Cor Primária

Edite o arquivo `app/globals.css`:

```css
:root {
  --primary: 267 82% 65%; /* HSL do #9c5bf0 */
}
```

### Adicionar Novos Campos

1. Adicione o campo no schema em `lib/schemas.ts`
2. Adicione o campo no componente da seção correspondente
3. A validação e TypeScript serão aplicados automaticamente

## Suporte

Para dúvidas ou problemas, abra uma issue no repositório.

## Licença

Este projeto é de código aberto. Sinta-se livre para usar e modificar.
