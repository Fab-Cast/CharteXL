import { createFileRoute } from '@tanstack/react-router'
import SignatureMail from '../pages/xl-brand/SignatureMail'

export const Route = createFileRoute('/signature-mail')({
  component: SignatureMail,
})
