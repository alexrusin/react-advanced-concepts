import { Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import { changeAuth } from 'actions'

const App = () => {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const renderButton = () => {
    if (auth) {
      return (
        <button 
          type="button" 
          onClick={() => dispatch(changeAuth(false))}
        >
          Sign Out
        </button>
      )
    } else {
      return (
        <button 
          type="button"
          onClick={() => dispatch(changeAuth(true))}
        >
          Sign In
        </button>
      )
    }
  }

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>
          { renderButton() }
        </li>
      </ul>
    )
  }

  return (
    <div>
      { renderHeader() }
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
      
    </div>
  )
}

export default App
