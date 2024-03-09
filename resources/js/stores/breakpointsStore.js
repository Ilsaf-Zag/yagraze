import {defineStore} from 'pinia';
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core'

export const useBreakpointsStore = defineStore('breakpoints', () => {

    const breakpoints = useBreakpoints(breakpointsTailwind)

    return {breakpoints}
})
