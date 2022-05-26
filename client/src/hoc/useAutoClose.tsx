import React, { useEffect } from "react";


type TAutoClose = {
    isOpen: boolean | undefined
    setIsOpen: (isOpen: boolean) => void
    currentElement: HTMLDivElement | HTMLInputElement | null | HTMLElement
}

const useAutoClose = (
    isOpen: boolean | undefined, 
    setIsOpen: (isOpen: boolean) => void, 
    currentElement: HTMLDivElement | HTMLInputElement | null | HTMLElement): void => {

        //debugger

    const handleCloser = (event: Event) => {
        //debugger
        if (!isOpen) return

        if (event.target !== currentElement) {

            console.log('event.target: ', event.target)
            console.log('currentElement: ', currentElement)
            setIsOpen(false)
        }
    }

 

        window.addEventListener('click', handleCloser)

        


}

export default useAutoClose

/*

const useAutoClose = ({ setIsOpen, menu }: TAutoClose) => {
    const handleClosure = React.useCallback(
      event => !menu.current.contains(event.target) && setIsOpen(false),
      [setIsOpen, menu]
    )
  
    React.useEffect(() => {
      window.addEventListener('click', handleClosure)
      window.addEventListener('focusin', handleClosure)
  
      return () => {
        window.removeEventListener('click', handleClosure)
        window.removeEventListener('focusin', handleClosure)
      }
    }, [handleClosure, menu])
  }
*/