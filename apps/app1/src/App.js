// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
// import { clgFn } from "@demo/utiles"

export function Home() {
  const [SomeStatus, setSomeStatus] = useState('dsf');
  useEffect(() => {
    console.log(SomeStatus)
  }, []);
  return <div>sf12</div>
}

const fn = (a) => a * ((b) => (b * ((c) => C)))
function fnCall (a){
  return  a * ((b) => {
    return  b * ((c)=>{
      return c
    })
  })
  
  
}  
function App() {
  useEffect(() => {
    // clgFn("hello clgFn")
    // console.log(fn(1)(2)(3),'123a')
    console.log(fnCall(1)(2)(3))
    // console.log("hello", clgFn("dd"))
    console.log(1234);
    // axios('https://kunpeng.csdn.net/ad/json/integrate/list?positions=932').then(res => console.log(res)).catch(err => console.log(err))
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
