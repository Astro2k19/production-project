import { classNames } from './classNames'

describe('classNames', function () {
  test('with strings in classes array', () => {
    expect(classNames(['class1', 'class2'])).toBe('class1 class2')
  })

  test('with undefined values in classes array', () => {
    expect(classNames(['class1', undefined, 'class3', 'class4'])).toBe('class1 class3 class4')
  })

  test('with true mods', () => {
    expect(classNames(['class1', 'newClass'], { hovered: true, scrollable: true })).toBe('class1 newClass hovered scrollable')
  })

  test('with false mods', () => {
    expect(classNames(['class1', 'newClass2', undefined], { hovered: false, scrollable: true })).toBe('class1 newClass2 scrollable')
  })
})
