import { Theme } from '@/shared/const/theme'

export const getThemeSettings = (isRedesigned: boolean = false) => {
    const rootClass = isRedesigned ? 'redesigned_class' : 'app'
    const mappedColors = {
        app: {
            [Theme.LIGHT]: '#eff5f6',
            [Theme.DARK]: '#0c1214',
            [Theme.DUSK]: '#f0c048',
        },
        redesigned_class: {
            [Theme.LIGHT]: '#e8e8ea',
            [Theme.DARK]: '#090949',
            [Theme.DUSK]: '#4b4e71',
        },
    }

    return {
        default: 'Light',
        list: [
            {
                name: 'Light',
                class: [rootClass, Theme.LIGHT],
                color: mappedColors[rootClass][Theme.LIGHT],
            },
            {
                name: 'Dark',
                class: [rootClass, Theme.DARK],
                color: mappedColors[rootClass][Theme.DARK],
            },
            {
                name: 'Dusk',
                class: [rootClass, Theme.DUSK],
                color: mappedColors[rootClass][Theme.DUSK],
            },
        ],
    }
}
