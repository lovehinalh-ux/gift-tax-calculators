import { InputHTMLAttributes, forwardRef, useState } from 'react'
import { cn } from '@/lib/utils/cn'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string
  error?: string
  helperText?: string
  isValid?: boolean
  fullWidth?: boolean
  onChange: (val: string) => void
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      isValid,
      fullWidth = true,
      id,
      onChange,
      value,
      placeholder,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
    // If value is present (even if 0), or if focused, the label should float.
    const isFloating = isFocused || (value !== '' && value !== undefined && value !== null)

    return (
      <div className={cn('flex flex-col gap-1', fullWidth && 'w-full', className)}>
        <div className="relative pt-2">
          {/* Floating Label */}
          {label && (
            <label
              htmlFor={inputId}
              className={cn(
                'absolute left-4 transition-all duration-200 pointer-events-none z-10',
                isFloating
                  ? '-top-0.5 text-xs text-primary font-bold bg-white px-1' // Float up
                  : 'top-3.5 text-base text-secondary/50 font-medium' // Normal placeholder position
              )}
            >
              {label}
            </label>
          )}

          <input
            ref={ref}
            id={inputId}
            type="number"
            value={value}
            className={cn(
              'shadow-sm appearance-none border border-border bg-white rounded-xl w-full py-3 px-4 text-secondary leading-tight',
              'focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all',
              'placeholder-transparent', // Hide standard placeholder to let label act as one if needed
              error && 'border-red-500 focus:ring-red-500/20 focus:border-red-500',
              isValid && !error && 'border-green-500 focus:ring-green-500/20 focus:border-green-500',
            )}
            onChange={(e) => onChange(e.target.value)}
            onFocus={(e) => {
              setIsFocused(true)
              onFocus?.(e)
            }}
            onBlur={(e) => {
              setIsFocused(false)
              onBlur?.(e)
            }}
            placeholder={label} // Required for some accessibility, but hidden visually via CSS
            {...props}
          />

          {/* Suffix Icon / Text - NT$ */}
          <span className="absolute right-4 top-3.5 text-secondary/40 font-bold text-sm pointer-events-none">
            NT$
          </span>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-xs text-red-500 mt-1 font-medium ml-1">
            * {error}
          </p>
        )}

        {/* Helper Text */}
        {!error && helperText && (
          <p className="text-xs text-muted mt-1 ml-1">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
