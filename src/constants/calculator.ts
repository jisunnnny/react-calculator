export const DIGITS = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
export const MAX_DIGIT_LENGTH = 3

export const MODIFIER = 'AC'

export const OPERATORS = {
  DIVIDE: '/',
  MULTIPLY: 'X',
  MINUS: '-',
  PLUS: '+',
  EQUAL: '=',
} as const

export const ERROR_MESSAGE = {
  THREE_DIGIT_NUMBER: '숫자는 세 자리까지만 입력 가능합니다!',
  ENTER_DIGIT_FIRST: '숫자를 먼저 입력한 후 연산자를 입력해주세요!',
  INFINITY: '오류',
} as const
