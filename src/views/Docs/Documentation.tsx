import { observer } from 'mobx-react'
import { Store } from '../../app/store'
import Code from '../../components/Code/Code'
import "./Documentation.css"

interface DocumentationProps {
    store: Store
}

const Documentation = observer(({ store }: DocumentationProps) => {
    const text = 'let name = "Oskar";\nname;'

    return (
        <div>
            <Code 
                store={store} 
                text={text}
            />
        </div>
    )
})

export default Documentation
