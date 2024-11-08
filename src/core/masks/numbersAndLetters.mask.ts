export const numbersAndLettersMask = (value: string) => {
  if (typeof value !== 'string' || !value) return ''
  return value.replace(/[^a-zA-Z0-9]/g, '')
}
