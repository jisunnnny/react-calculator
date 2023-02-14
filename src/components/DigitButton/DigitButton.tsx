import React from 'react'

interface IProps {
  digit: number
  onClick: (digit: number) => void
}

const DigitButton = ({ digit, onClick }: IProps) => {
  const handleClick = () => {
    onClick(digit)
  }

  return (
    <button className='digit' onClick={handleClick}>
      {digit}
    </button>
  )
}

export default React.memo(DigitButton)
