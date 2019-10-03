// @tracespace/view entry point
import React from 'react'
import './styles'

Promise.all([
  import('react-dom') as any,
  import('./App') as any,
  import('./state/StoreProvider') as any,
]).then(imports => {
  const [
    {default: ReactDom},
    {default: App},
    {default: StoreProvider},
  ] = imports

  ReactDom.hydrate(
    <StoreProvider>
      <App />
    </StoreProvider>,
    document.querySelector('[data-hook=root]')
  )
})
