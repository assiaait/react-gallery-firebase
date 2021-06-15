import React from 'react'
import Form from './components/Form'
import { GalleryProvider } from './context'

export const App = () => {
  return (
    <main className='container'>
      <GalleryProvider>
        <Form />
      </GalleryProvider>
    </main>
  )
}
