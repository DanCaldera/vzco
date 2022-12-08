import React from 'react'

interface InputProps {
  id: string
  type: string
  value: string
  setValue: (value: string) => void
  placeholder: string
}

const Input: React.FC<InputProps> = ({ id, type, value, setValue, placeholder }) => {
  return (
    <input
      id={id}
      type={type}
      className='block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder={placeholder}
    />
  )
}

export default Input
