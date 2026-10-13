import { createFileRoute } from '@tanstack/react-router'
import Typographies from '../pages/design-system/Typographies'

export const Route = createFileRoute('/typographies-services')({
  component: Typographies,
})
