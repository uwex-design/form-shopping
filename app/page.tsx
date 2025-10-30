import { FormularioShopping } from "@/components/formulario/FormularioShopping"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <FormularioShopping />
      <Toaster />
    </main>
  )
}
