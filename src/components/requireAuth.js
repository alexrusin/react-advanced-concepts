import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const requireAuth = (ChildComponent) => {
    const ComposedComponent = (props) => {
        const history = useHistory()
        const auth = useSelector((state) => state.auth)

        useEffect(() => {
            if(!auth) {
                history.push('/')
            }
        }, [auth, history])

        return (
            <ChildComponent {...props} />
        )
    }

    return ComposedComponent
}

export default requireAuth