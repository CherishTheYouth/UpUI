import { presetUno, presetAttributify, presetIcons } from 'unocss'
import Unocss from 'unocss/vite'

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink"
]

const icons = [
  'search',
  'edit',
  'check',
  'message',
  'star-off',
  'delete',
  'add',
  'share',
  'icon'
]

const safelist = [
  ...colors.map(color => `bg-${color}-500`),
  ...colors.map(color => `hover:bg-${color}-700`),
  ...icons.map(icon => `i-ic-baseline-${icon}`)
]

export default () => Unocss({
  safelist,
  presets: [presetUno(), presetAttributify(), presetIcons()]
})
