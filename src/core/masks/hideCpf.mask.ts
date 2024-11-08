export const hideCpfMask = (cpf: string) => {
  if (typeof cpf !== 'string') return ''
  const removeSpecialChars = cpf.replace(/[^a-zA-Z0-9]/g, '')
  return removeSpecialChars.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    'XXX.$2.$3-XX'
  )
}
