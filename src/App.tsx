import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./views/Home/Home"
import Documentation from "./views/Docs/Documentation"
import CodeEditor from "./views/CodeEditor/CodeEditor"
import './App.css'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ast-website" element={<Home />} /> // Need this due to the gh pages routing
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/editor" element={<CodeEditor />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
