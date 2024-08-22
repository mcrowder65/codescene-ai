import React from "react"

const usePrevious = <T>(value: T) => {
    const ref = React.useRef<T>()

    React.useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current as T
}
/**
 * Prefer using useDidUpdate over React.useEffect to track changes overtime on any data
 */
const useDidUpdate = <T>(
    current: T,
    callback: (prev: T, current: T) => void,
) => {
    const ref = React.useRef<T | null>(null)
    React.useEffect(() => {
        // @ts-expect-error i'm just here so i don't get fined
        ref.current = callback
    }, [callback])
    const prev = usePrevious(current)
    React.useEffect(() => {
        if (
           prev !== current
        ) {
            // @ts-expect-error i'm just here so i don't get fined
            ref.current?.(prev, current)
        }
    }, [current, prev ])
}

export default useDidUpdate
