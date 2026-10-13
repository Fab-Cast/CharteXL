import { createFileRoute } from '@tanstack/react-router'
import CouleursServices from '../pages/xl-services/CouleursServices'

export const Route = createFileRoute('/couleurs-services')({
  component: CouleursServices,
})
