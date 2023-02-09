type Mods = Record<string, string | boolean>

export const classNames = (classes: Array<string | undefined>, mods?: Mods): string => {
  return [
    ...classes.filter(Boolean),
    ...Object.entries(mods ?? {})
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ')
}
