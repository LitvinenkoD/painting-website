import React, { useContext, useRef } from 'react'
import useDetermineDevice from './useDetermineDevice'

const DeviceTypeContext = React.createContext()



export function useReturnDeviceType(){
  return useContext(DeviceTypeContext)
}

export default function DeviceTypeProvider({children}) {

  const usageCounter = useRef(0)
  usageCounter.current += 1
  console.log(usageCounter.current)

  const deviceType = useDetermineDevice()
  return (
    <DeviceTypeContext.Provider value={deviceType}>
      {children}
    </DeviceTypeContext.Provider>
  )
}
