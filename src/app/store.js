import { readable, derived, writable } from 'svelte/store'

export const prefix = writable('')

export const time = readable(new Date(), function start(set) {
    const interval = setInterval(() => {
        set(new Date())
    }, 1000)

    return function stop() {
        clearInterval(interval)
    }
})

const start = new Date()

export const elapsed = derived(
    time,
    $time => Math.round(($time - start) / 1000)
)
