import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { Store } from '../../app/store'
import CodeMirror from '@uiw/react-codemirror'
import './CodeEditor.css'

interface CodeEditorProps {
    store: Store
}

const CodeEditor = observer(({ store }: CodeEditorProps) => {
    const [inputValue, setInputValue] = useState('')

    const onChange = React.useCallback((val: any, _: any) => {
        setInputValue(val)
    }, [])

    return (
        <div className='form-container'>
            <div className='editor-form'>
                <CodeMirror
                    onChange={onChange}
                    value={inputValue}
                    className='input'
                    height='100%'
                />                
                <div className='output-container'>
                    <button type='submit' className='submit-button' onClick={() => store.handleSubmit(inputValue)}>Run</button>
                    <p className='output'>{store.getEval}</p>
                </div>
            </div>
        </div>
    )
})

export default CodeEditor
