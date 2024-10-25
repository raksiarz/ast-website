import { useState } from "react"
import SplitPane, { Pane, SashContent } from "split-pane-react"
import store from "./app/store"
import Editor from "./views/CodeEditor/CodeEditor"
import AstView from "./views/AST/AstView"
import Console from "./views/Console/Console"
import './App.css'

function App() {
  const [sizes, setSizes] = useState([100, 200])

  return (
    <div>
      <SplitPane
        sizes={sizes}
        onChange={setSizes}
        resizerSize={9}
        sashRender={() => (
          <SashContent className="sash" />
        )}
      >
        <Pane>
          <Editor store={store} />
          <Console store={store} />
        </Pane>
        <Pane>
          <AstView store={store} />
        </Pane>
      </SplitPane>
    </div>
  )
}

export default App
