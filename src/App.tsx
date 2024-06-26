import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/form/BaseForm'
import './components/form/InputForm'
import BookList from './components/props/BookList'
import { books } from './components/props/books';
import Counter from './components/counter/Counter'
import LazyBasic from './components/suspence/LazyBasic'
import SuspenseSimple from './components/suspence/SuspsenseSimple'
import PortalBasic from './components/portal/PortalBasic'
import PracticalFetchData from './components/basic/PricticalFetchData'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="dialog"></div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Counter init={0}/>
      <PracticalFetchData/>
      <BookList books={books}>Hello this is book I bought yesterday!</BookList>
      <LazyBasic />
      <SuspenseSimple />
      <PortalBasic/>
      
    </>
  )
}

export default App
