import { observer } from 'mobx-react'
import { Tree } from "antd"

const AstView = observer(({ store }: any) => {
    // console.log('ast view collection: ', store.getAST)
    // console.log('ast tree: ', store.tree)

    return (
        <>
            <Tree 
                showLine={true}
                treeData={ store.getAST }
            />
        </>
    )
})

export default AstView
