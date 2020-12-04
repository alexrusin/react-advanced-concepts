import { render, screen } from 'test-utils';
import App from 'components/App';

beforeEach(() => render(<App />))

it('shows a comment box', () => {
  expect(screen.getByTestId('commentBox')).toBeInTheDocument()
})

it('shows a comment list', () => {
  expect(screen.getByTestId('commentList')).toBeInTheDocument()
})
