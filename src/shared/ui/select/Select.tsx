import { type ChangeEvent, memo, useMemo } from 'react'
import cls from './Select.module.scss'
import { classNames } from 'shared/lib'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  className?: string
  label?: string
  options: SelectOption[]
  readonly?: boolean
  onChange?: (value: string) => void
  value?: string
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    readonly,
    onChange,
    value
  } = props

  const optionsList = useMemo(() => options.map(opt => (
      <option
          value={opt.value}
          key={opt.value}
          className={cls.option}
      >
          {opt.label}
      </option>
  )), [options])

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value)
  }

  return (
      <div className={classNames([cls.wrapper, className], { [cls.readonly]: readonly })}>
          {label && <div className={cls.label}>{`${label}>`}</div>}
          <select
              className={cls.select}
              disabled={readonly}
              value={value}
              onChange={onChangeSelect}
          >
              {optionsList}
          </select>
      </div>
  )
})
