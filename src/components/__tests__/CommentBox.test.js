import { render, screen, fireEvent } from 'test-utils';
import CommentBox from 'components/CommentBox';

beforeEach(() => render(
    <CommentBox />
))

it('has a text area and two buttons', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(2)
})

describe('the text area', () => {
    const comment = 'new comment'
    beforeEach(() => {

        expect(screen.queryByText(comment)).toBeNull()
    
        fireEvent.change(screen.getByRole('textbox'), {
        target: { value: comment },
        });
    })

    it('has a text area that users can type in', () => {

        expect(screen.getByText(comment)).toBeInTheDocument()
    })

    it('when form is submitted text area gets emptied', () => {

        expect(screen.getByText(comment)).toBeInTheDocument()

        fireEvent.click(screen.getByText(/submit/i))

        expect(screen.queryByText(comment)).toBeNull()
    })

})