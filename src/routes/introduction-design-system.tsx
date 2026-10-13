import { createFileRoute } from '@tanstack/react-router'
import Introduction from '../pages/design-system/Introduction'

export const Route = createFileRoute('/introduction-design-system')({
  component: Introduction,
})
