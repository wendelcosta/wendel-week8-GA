import { render, screen } from '@testing-library/react'

import App from './'

test('Render App', () => {
	render(<App />)
	const element = screen.getByText('Flicker Search')
	expect(element).toBeInTheDocument()
})
