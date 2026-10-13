import { createFileRoute } from '@tanstack/react-router'
import Couleurs from '../pages/design-system/Couleurs'

export const Route = createFileRoute('/couleurs-design-system')({
  component: Couleurs,
})
