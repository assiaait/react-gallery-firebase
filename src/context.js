import React, { useState, useEffect, createContext } from 'react'
import { db, storage, timestamp } from './firebase/config'

const GalleryProvider = ({ children }) => {
  const value = {}
  return <GalleryContext.Provider value={values} children={children} />
}

export { GalleryContext, GalleryProvider }
