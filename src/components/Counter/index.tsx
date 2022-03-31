import { useReducerWithLocalStorage } from '../../hooks/useReducerWithLocalStorage'

interface Prop {
    count: number
}

interface Action {
    type: string
}

function reducer(state: Prop, action: Action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            throw new Error()
    }
}

export function Counter() {
    const [state, dispatch] = useReducerWithLocalStorage(
        'count',
        { count: 0 },
        reducer
    )
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
    )
}
