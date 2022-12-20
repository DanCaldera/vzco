import React from 'react'

interface LeftInlineAddOnInputProps {
  id: string
  type: string
  name: string
  required?: boolean
  value: string
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  placeholder?: string
  addon: string
}

const LeftInlineAddOnInput: React.FC<LeftInlineAddOnInputProps> = ({
  id,
  name,
  required = false,
  value,
  setValue,
  onBlur,
  placeholder,
  addon,
}) => (
  <div className="relative mt-1 rounded-md shadow-sm">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span className="text-gray-500">{addon}</span>
    </div>
    <input
      type="text"
      name={name}
      id={id}
      required={required}
      value={value}
      onChange={setValue}
      onBlur={onBlur}
      className="block w-full rounded-md border border-gray-300 py-3 pl-16 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      placeholder={placeholder}
    />
  </div>
)

export default LeftInlineAddOnInput
