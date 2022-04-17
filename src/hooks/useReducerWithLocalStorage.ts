import { useReducer } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useReducerWithLocalStorage = (
    key: string,
    defaultValue: any,
    reducer: Function
) => {
    const [localStorageState, setLocalStorageState] = useLocalStorage(
        key,
        defaultValue
    )

    return useReducer(
        (state: any, action: any) => {
            const newState = reducer(state, action)
            setLocalStorageState(newState)
            return newState
        },
        { ...localStorageState }
    )
}
