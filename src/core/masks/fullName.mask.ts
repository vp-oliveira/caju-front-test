export const fullNameMask = (fullName: string) => {
  if (typeof fullName !== 'string' || !fullName) return ''

  fullName = fullName.replace(/^[\d\s]+/, '')

  fullName = fullName.replace(/[^a-zA-Z\s]/g, '')

  fullName = fullName.replace(/\s{2,}/g, ' ')

  return fullName
}
