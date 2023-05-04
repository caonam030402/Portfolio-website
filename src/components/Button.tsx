import React, { ReactNode } from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  withIcon?: boolean
  classNameOther?: string
}

export default function Button({ children, withIcon = true, classNameOther }: Props) {
  return (
    <button
      className={`text- flex items-center gap-1 rounded-full bg-primary px-7 py-2 transition-all hover:bg-primary/80 ${classNameOther}`}
    >
      <span className='text-sm text-white'>{children}</span>
      {withIcon && (
        <span>
          <svg width={18} height={18} viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M13 5.5L20 12.5L13 19.5'
              stroke='#E3E4E6'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path d='M4 12.5H18' stroke='#E3E4E6' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </span>
      )}
    </button>
  )
}
