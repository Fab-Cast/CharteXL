import { createFileRoute } from '@tanstack/react-router'
import Couleurs from '../pages/xl-brand/Couleurs'

export const Route = createFileRoute('/couleurs')({
  component: Couleurs,
})
