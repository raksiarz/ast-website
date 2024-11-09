import { BrowserRouter, Route, Routes } from "react-router-dom"
import store from "./app/store"
import Navbar from "./components/Navbar/Navbar"
import Home from "./views/Home/Home"
import Documentation from "./views/Docs/Documentation"
import Editor from "./views/CodeEditor/CodeEditor"
import './App.css'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ast-website" element={<Home />} />
          <Route path="/documentation" element={<Documentation store={store} />} />
          <Route path="/editor" element={<Editor store={store} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
