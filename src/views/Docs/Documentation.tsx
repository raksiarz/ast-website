import { observer } from 'mobx-react'
import store from '../../app/store'
import Code from '../../components/Code/Code'
import "./Documentation.css"

const Documentation = observer(() => {
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
