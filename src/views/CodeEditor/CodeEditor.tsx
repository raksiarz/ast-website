import React from 'react'
import { observer } from 'mobx-react'
import { makeAutoObservable, observable, runInAction } from 'mobx'
import CodeMirror from '@uiw/react-codemirror'
import SideBar from './SideBar/SideBar'
import store from '../../app/store'
import './CodeEditor.css'

class Editor {
    inputValue: string = ''

    constructor() {
        makeAutoObservable(this, {
            inputValue: observable,
        })
    }
}

const editor = new Editor()

const CodeEditor = observer(() => {
    const onChange = React.useCallback((val: any, _: any) => {
        runInAction(() => {
            editor.inputValue = val
        })
    }, [])

    return (
        <div className='form-container'>
            <SideBar editor={editor} />
            <div className='editor-form'>
                <CodeMirror
                    onChange={onChange}
                    value={editor.inputValue}
                    className='input'
                    height='100%'
                />                
                <div className='output-container'>
                    <button type='submit' className='submit-button' onClick={() => store.handleSubmit(editor.inputValue)}>Run</button>
                    <p className='output'>{store.getEval}</p>
                </div>
            </div>
        </div>
    )
})

export default CodeEditor
