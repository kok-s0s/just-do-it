import { useEffect, useState } from 'react'

export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((val: T) => T)) => void] => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    // Get from local storage by key
    const item = window.localStorage.getItem(key)
    // Parse stored json or if none return initialValue
    return item !== null ? JSON.parse(item) : initialValue
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    // Allow value to be a function so we have same API as useState
    const valueToStore
        = value instanceof Function ? value(storedValue) : value
    // Save state
    setStoredValue(valueToStore)
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(valueToStore))
  }

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(initialValue))
  }, [])

  return [storedValue, setValue]
}
