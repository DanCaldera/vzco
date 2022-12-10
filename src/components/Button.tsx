import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  type?: 'submit' | 'button'
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  disabled,
}) => (
  <div>
    <button
      type={type}
      className="block w-full rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
      disabled={disabled}
    >
      {children}
    </button>
  </div>
)

export default Button
