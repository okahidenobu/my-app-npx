import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from '../page'

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('To get started, edit the page.tsx file.')
  })

  it('renders the Next.js logo', () => {
    render(<Home />)
    const logo = screen.getByAltText('Next.js logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders the deploy button', () => {
    render(<Home />)
    const deployLink = screen.getByRole('link', { name: /deploy now/i })
    expect(deployLink).toBeInTheDocument()
    expect(deployLink).toHaveAttribute('href', expect.stringContaining('vercel.com'))
  })

  it('renders the documentation link', () => {
    render(<Home />)
    const docLink = screen.getByRole('link', { name: /documentation/i })
    expect(docLink).toBeInTheDocument()
    expect(docLink).toHaveAttribute('href', expect.stringContaining('nextjs.org/docs'))
  })

  it('renders the templates link', () => {
    render(<Home />)
    const templatesLink = screen.getByRole('link', { name: /templates/i })
    expect(templatesLink).toBeInTheDocument()
  })

  it('renders the learning center link', () => {
    render(<Home />)
    const learningLink = screen.getByRole('link', { name: /learning/i })
    expect(learningLink).toBeInTheDocument()
  })
})
