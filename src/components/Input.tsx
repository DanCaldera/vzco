import React from 'react'

interface InputProps {
  id: string
  type: string
  name: string
  required?: boolean
  value: string
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  placeholder?: string
  autoComplete?: string
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  required = false,
  value,
  setValue,
  onBlur,
  placeholder,
  autoComplete,
}) => (
  <input
    id={id}
    type={type}
    name={name}
    className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
    value={value}
    required={required}
    onChange={setValue}
    onBlur={onBlur}
    placeholder={placeholder}
    autoComplete={autoComplete}
  />
)

export default Input
