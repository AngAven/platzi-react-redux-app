// a higher-order function - takes one or more functions as arguments, or returns a function as its result
// In essence, logger is a middleware that logs every action that passes through it without modifying it.
const logger = (store) => (next) => (action) => {
    console.log('action', action)
    next(action)
}

const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{name: 'eddie'}, ...actionInfo.action.payload]
    const updatedAction = {...actionInfo, action: {...actionInfo.action, payload: featured}}

    next(updatedAction)
}

const prefix = store => next => action => {
    const prefixed = action.action.payload.map( pokemon => ({
        ...pokemon,
        name: 'Poke: ' + pokemon.name
    }) )

    const updatedAction = {
        ...action,
        action: {...action.action, payload: prefixed}
    }

    next(updatedAction);
}

export {logger, featuring, prefix}