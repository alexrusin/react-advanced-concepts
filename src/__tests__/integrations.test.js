import { render, screen, fireEvent } from 'test-utils';
import moxios from 'moxios'
import App from 'components/App';

beforeEach(() => {
    moxios.install()
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            {
                name: 'Fetched #1'
            },
            {
                name: 'Fetched #2'
            }
        ]
    })
})

afterEach(() => {
    moxios.uninstall()
})

it ('can fetch list of comments and display them', async () => {
    render(<App/>)

    fireEvent.click(screen.getByText(/fetch/i))
    expect(await screen.findAllByRole('listitem')).toHaveLength(2)
})