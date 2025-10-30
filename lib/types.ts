/**
 * Tipos TypeScript para o formulário de shopping center
 */

export interface PlataformaIngressos {
  value: string
  label: string
}

export const PLATAFORMAS_INGRESSOS: PlataformaIngressos[] = [
  { value: "ingresso.com", label: "Ingresso.com" },
  { value: "arcoplex", label: "Arcoplex" },
  { value: "uci", label: "UCI Cinemas" },
  { value: "cinemark", label: "Cinemark" },
  { value: "kinoplex", label: "Kinoplex" },
  { value: "outra", label: "Outra" },
]

export interface FileUploadState {
  file: File | null
  preview?: string
  uploading: boolean
  error?: string
}

export interface FormSection {
  id: string
  title: string
  description?: string
  completed: boolean
}
