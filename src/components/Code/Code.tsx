import { CodeBlock, atomOneDark } from 'react-code-blocks'
import { observer } from 'mobx-react'
import { Store } from '../../app/store'
import './Code.css'

interface CodeProps {
    store: Store
    text: string
}

const Code = observer(({store, text}: CodeProps) => {
    atomOneDark['backgroundColor'] = '#31363F'
    
    return (
        <div className='code-container'>
            <CodeBlock
                text={text}
                language='js'
                theme={atomOneDark}
            />
            <div className='bottom-container'>
                <div className='button'>Run</div>
                <p className='output'>{ store.getEval }</p>
            </div>
        </div>
    )
})

export default Code
