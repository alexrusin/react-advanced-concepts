import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveComment, fetchComments } from 'actions'
import requireAuth from 'components/requireAuth'

const CommentBox = () => {
    const [comment, setComment] = useState('')
    const dispatch = useDispatch()
    

    const handleSubmit = event => {
        event.preventDefault()
        dispatch(saveComment(comment))
        setComment('')
    }

    return (
        <div>
            <form data-testid="commentBox" onSubmit={handleSubmit}>
                <h4>Add a comment</h4>
                <textarea 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <div>
                    <button type="submit" disabled={!comment}>Submit Comment</button>
                </div>
            </form>
            <button type="button" onClick={() => dispatch(fetchComments())}>Fetch Comments</button>
        </div>
    )
}

export default requireAuth(CommentBox)