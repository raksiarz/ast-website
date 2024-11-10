import React, { useState } from 'react'
import { observer } from 'mobx-react'
import CodeMirror from '@uiw/react-codemirror'
import SideBar from './SideBar/SideBar'
import store from '../../app/store'
import './CodeEditor.css'

const CodeEditor = observer(() => {
    const [inputValue, setInputValue] = useState('')

    const onChange = React.useCallback((val: any, _: any) => {
        setInputValue(val)
        store.exampleInput = inputValue
    }, [])

    return (
        <div className='form-container'>
            <SideBar />
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
