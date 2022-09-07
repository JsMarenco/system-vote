export const convertDate = (date: string) => {
  const dateObject = new Date(date)
  const now = new Date()

  const diff = now.getTime() - dateObject.getTime()

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(diff / 1000 / 60)
  const hours = Math.floor(diff / 1000 / 60 / 60)
  const days = Math.floor(diff / 1000 / 60 / 60 / 24)
  const months = Math.floor(diff / 1000 / 60 / 60 / 24 / 30)
  const years = Math.floor(diff / 1000 / 60 / 60 / 24 / 30 / 12)

  if (seconds < 60) {
    return `${seconds} seconds ago`
  } else if (minutes < 60) {
    return `${minutes} minutes ago`
  } else if (hours < 24) {
    return `${hours} hours ago`
  } else if (days < 30) {
    return `${days} days ago`
  } else if (months < 12) {
    return `${months} months ago`
  } else {
    return `${years} years ago`
  }
}

export const convertDateFuture = (date: string) => {
  const dateObject = new Date(date)
  const now = new Date()

  const diff = dateObject.getTime() - now.getTime()

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(diff / 1000 / 60)
  const hours = Math.floor(diff / 1000 / 60 / 60)
  const days = Math.floor(diff / 1000 / 60 / 60 / 24)
  const months = Math.floor(diff / 1000 / 60 / 60 / 24 / 30)
  const years = Math.floor(diff / 1000 / 60 / 60 / 24 / 30 / 12)

  if (seconds < 60) {
    return `${seconds} seconds`
  } else if (minutes < 60) {
    return `${minutes} minutes`
  } else if (hours < 24) {
    return `${hours} hours`
  } else if (days < 30) {
    return `${days} days`
  } else if (months < 12) {
    return `${months} months`
  } else {
    return `${years} years`
  }
}

export const copyToClipboard = (text: string) => {
  const el = document.createElement('textarea')
  el.value = text
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

export const saveLinkInTextFile = (text: string) => {
  const element = document.createElement('a')
  const file = new Blob([text], { type: 'text/plain' })
  element.href = URL.createObjectURL(file)
  element.download = 'link.txt'
  document.body.appendChild(element)
  element.click()
}

export const validateSimpleEmail = (email: string): boolean => {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(String(email).toLowerCase())
}