import React, { useState, useRef, useLayoutEffect ,useEffect} from "react"
import ReactDOM from "react-dom"
export default function TestcreatePortal(props) {
  // const [targetElement] = useState(() => document.createElement("div"))
  const [targetElement] = useState(() => document.body)

  const containerRef = useRef()
  const childRef = useRef()
  useLayoutEffect(() => {
    if (props.active) {
      containerRef.current.appendChild(childRef.current)
    } else {
      try {
        containerRef.current.removeChild(childRef.current)
      } catch (e) {}
    }
  }, [props.active, targetElement])

  // useEffect(() => {
  //   return () => {
  //     console.log('first')
  //     ReactDOM.unmountComponentAtNode(containerRef.current);
  //   }
  // }, []);
  useEffect(() => {
    console.log(props.active,'props.active')
  
    // return cleanUp = () => {
      
    // }
  }, [props.active]);
  return (
    <>
      {ReactDOM.createPortal(
        <div ref={containerRef} className="helloRef">
          <div ref={childRef}>
          { props.children}
          </div>
        </div>,
        targetElement
      )}
    </>
  )
}
