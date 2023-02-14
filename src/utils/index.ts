import { OPERATORS } from './../constants/calculator'

export const calculations = {
  [OPERATORS.PLUS]: (prev: number, next: number) => prev + next,
  [OPERATORS.MINUS]: (prev: number, next: number) => prev - next,
  [OPERATORS.MULTIPLY]: (prev: number, next: number) => prev * next,
  [OPERATORS.DIVIDE]: (prev: number, next: number) => prev / next,
}
