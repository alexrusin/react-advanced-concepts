const async = ({ dispatch }) => next => action => {
    if (!action.payload || !action.payload.then) {
        return next(action)
    }

    action.payload.then((response) => {
        const newAction = { ...action, payload: response }
        dispatch(newAction)
    })
    .catch((error) => {
        const newAction = { ...action, payload: [] }
        dispatch(newAction)
    })
}

export default async