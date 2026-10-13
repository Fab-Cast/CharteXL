import { createFileRoute } from '@tanstack/react-router'
import GridSystem from '../pages/design-system/GridSystem'

export const Route = createFileRoute('/grid-system')({
  component: GridSystem,
})
