type Mods = Record<string, string | boolean>;

export const classNames = (classes: string[], mods?: Mods ) => {
    return [
        ...classes.filter(Boolean),
        ...Object.entries(mods || {})
            .filter(([className, value ]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ');
}