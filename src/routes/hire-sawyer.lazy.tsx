import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/hire-sawyer')({
  component: () => <div>Hello /hire-sawyer!</div>,
})
