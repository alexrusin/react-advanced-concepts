import { render } from '@testing-library/react'
import Root from 'Root'

const AllTheProviders = ({ children }) => {
  return (
    <Root>
        {children}
    </Root>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }