const MOBILE = 0
const TABLET = 640
const DESKTOP = 960
const LARGE_SCREEN = 1650

interface IValues {
  mobile: number,
  tablet: number,
  desktop: number,
  largeScreen: number,
}
const keys = ['mobile', 'tablet', 'desktop', 'largeScreen']
const values: IValues = {
  mobile: MOBILE,
  tablet: TABLET,
  desktop: DESKTOP,
  largeScreen: LARGE_SCREEN,
}

const unit = 'px'

type ValueKey = keyof IValues;
type ValueKeyORNumber = keyof IValues | number;

function up(key: ValueKeyORNumber) {
  const value = typeof values[key as ValueKey] === 'number' ? values[key as ValueKey] : key
  return `@media (min-width:${value}${unit})`
}

function down(key: ValueKeyORNumber) {
  const value = typeof values[key as ValueKey] === 'number' ? values[key as ValueKey] : key
  return `@media (max-width:${value}${unit})`
}

function between(start: ValueKeyORNumber, end: ValueKeyORNumber) {

  return (
    `@media (min-width:${typeof values[start as ValueKey] === 'number' ? values[start as ValueKey] : start
    }${unit}) and ` +
    `(max-width:${typeof values[end as ValueKey] === 'number' ? values[end as ValueKey] : end
    }${unit})`
  )
}

function only(key: ValueKey) {
  if (keys.indexOf(key) + 1 < keys.length) {
    return between(key, keys[keys.indexOf(key) + 1] as ValueKey)
  }

  return up(key)
}

export const breakpoints = {
  keys,
  values,
  unit,
  up,
  down,
  between,
  only,
} 