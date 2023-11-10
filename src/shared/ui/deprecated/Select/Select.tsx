import { type ChangeEvent, useMemo } from 'react'

import { classNames } from '@/shared/lib'

import { typedMemo } from '../../../const/typedMemo'
import cls from './Select.module.scss'

export interface SelectOption<T extends string> {
    value: T
    label: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options: Array<SelectOption<T>>
    readonly?: boolean
    onChange?: (value: T) => void
    value?: string
}

/*
 * It is preferable to use the new redesigned component!
 * @deprecated
 * */
export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
    const { className, label, options, readonly, onChange, value } = props

    const optionsList = useMemo(
        () =>
            options.map(opt => (
                <option
                    value={opt.value}
                    key={opt.value}
                    className={cls.option}
                >
                    {opt.label}
                </option>
            )),
        [options],
    )

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value as T)
    }

    return (
        <div
            className={classNames([cls.wrapper, className], {
                [cls.readonly]: readonly,
            })}
        >
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
