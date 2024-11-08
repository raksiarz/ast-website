import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { Button } from 'antd'
import CodeMirror from '@uiw/react-codemirror'
import { Store } from '../../app/store'
import './CodeEditor.css'

interface EditorProps {
    store: Store
}

const Editor = observer(({ store }: EditorProps) => {
    const [inputValue, setInputValue] = useState('')

    const onChange = React.useCallback((val: any, _: any) => {
        setInputValue(val)
    }, [])

    return (
        <>
            <CodeMirror
                onChange={onChange}
                value={inputValue}
                className='input'
                height='100%'
                basicSetup={{
                    lineNumbers: true
                }}
            />
            <Button className='button' onClick={() => store.handleSubmit(inputValue)} >Run</Button>
        </>
    )
})

export default Editor
