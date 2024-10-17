import Editor from "./view/CodeEditor"
import store from "./app/store"

function App() {

  return (
    <>
      <Editor store={store}/>
    </>
  )
}

export default App
