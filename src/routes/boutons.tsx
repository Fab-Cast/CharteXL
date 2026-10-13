import { createFileRoute } from '@tanstack/react-router'
import Boutons from '../pages/design-system/Boutons'

export const Route = createFileRoute('/boutons')({
  component: Boutons,
})
