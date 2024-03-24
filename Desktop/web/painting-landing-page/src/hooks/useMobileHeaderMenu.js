import { useEffect, useState } from 'react'
import useDetermineDevice from "./useDetermineDevice"

export default function () {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [menuAnimation, setMenuAnimation] = useState('')
  const deviceType = useDetermineDevice()

  useEffect(() => {
    if (deviceType == 'desktop'){
      setMenuIsOpen(false)
      setMenuAnimation('')
    }
  }, [deviceType])

  function controlMenuOperation(){
    if(!menuIsOpen){
      setMenuIsOpen(true)
      setMenuAnimation('header-menu-open-animation')
    }

    else{
      setMenuAnimation('header-menu-close-animation')
    }
  }

  useEffect(() => {
    let menuCloseTimeout
    if(menuAnimation == 'header-menu-close-animation'){
      menuCloseTimeout = setTimeout(() => {
        setMenuIsOpen(false)
      }, 490)
    }
  }, [menuAnimation])


  function closeMenuImmediately(){
    setMenuIsOpen(false)
    setMenuAnimation('')
  }

  return [closeMenuImmediately, controlMenuOperation, menuIsOpen, menuAnimation]
}
