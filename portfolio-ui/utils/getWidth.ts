import { Responsive } from 'semantic-ui-react'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Number(Responsive.onlyTablet.minWidth) : Number(window.innerWidth)
}

export default getWidth