import { PropType } from "vue"

export const numericProp = [Number, String]

export const makeNumericProp = <T>(defaultVal: T) => ({
    type: numericProp,
    default: defaultVal
})

export const makeNumberProp = <T>(defaultVal: T) => ({
    type: [Number],
    default: defaultVal
})

export const makeStringProp = <T>(defaultVal: T) => ({
    type: [String],
    default: defaultVal
})

export const makeBooleanProp = <T>(defaultVal: T) => ({
    type: [Boolean],
    default: defaultVal
})

export const makeObjectProp = <T = unknown>() => ({
    type: Object as PropType<T>,
    required: true as const
})