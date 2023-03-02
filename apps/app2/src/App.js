// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import axios from 'axios'
import TestcreatePortal from './components/TestcreatePortal';
function App() {
  useEffect(() => {
    axios('https://kunpeng.csdn.net/ad/json/integrate/list?positions=932').then(res => console.log(res)).catch(err => console.log(err))
  }, []);
  const [active, setActive] = useState(false);
  let [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   console.log('testuseEffect1', counter)

  //   return () => {
  //     console.log('testuseEffect1return', counter)
  //   }
  // }, [counter]);

  // useEffect(() => {
  //   console.log('testuseEffect2', counter)
  //   return () => {
  //     console.log('testuseEffect2return', counter)
  //   }
  // }, [counter]);

  // useEffect(() => {

  //   console.log(counter, 'counter111')

  //   const timer = setInterval(() => {
  //     setCounter((counter)=>counter + 1)
  //     // setCounter(counter + 1)

  //   }, 1000);
  //   return () => {
  //     console.log(counter, 'counter')
  //     clearInterval(timer)
  //   }
  // }, []);

  return (
    <div className="App">
      <div>
        <button onClick={() => setActive(!active)}>toogle --{active ? 1 : 0}</button>
      </div>
      <br></br>
      <div onClick={() => {
        // counter
        // counter = counter +1
        console.log('addss', counter)
        // setCounter(counter)

        setCounter((counter) => {
          console.log(counter, "same1")
          return counter + 1
        })
        setCounter((counter) => {
          console.log(counter, "same2")
          return counter + 1
        })
        // setCounter(counter+1)
        // setCounter(counter+1)

        // setCounter(counter++)

      }}>
        add
      </div>
      <h1>counter-{counter}</h1>


      {
        active && <TestcreatePortal active={active}>
          <h1>123sdfsTestcreatePortal-{counter}</h1>
        </TestcreatePortal>
      }
      {
        active&& <div>{counter}</div>
      }

    </div>
  );
}

export default App;
