interface ConvertFiltersObjToUrlString {
  [key: string]: string | number | boolean
}

export const convertFiltersObjToUrlString = (
  obj?: ConvertFiltersObjToUrlString
) => {
  const params = []

  if (obj === undefined) {
    return ''
  }

  //Convert array values into duplicate url params and create url string
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      const paramValue = (
        obj[key] as unknown as Array<string | number | boolean>
      )
        .map((value) => encodeURIComponent(value))
        .join(',')
      params.push(`${encodeURIComponent(key)}=${paramValue}`)
    } else {
      params.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    }
  }

  return `?${params.join('&')}`
}
