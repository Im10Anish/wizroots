import { useCallback } from 'react'
import debounce from 'lodash/debounce'

export function useDebouncedCallback(callback, delay = 0, options = {}) {
    return useCallback(debounce(callback, delay, options), [
        callback,
        delay,
        options,
    ])
}
