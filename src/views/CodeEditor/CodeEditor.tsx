import React, { useState } from 'react'
import { observer } from 'mobx-react'
import CodeMirror from '@uiw/react-codemirror'
import { Button } from 'antd'
import './CodeEditor.css'

const Editor = observer(({ store }: any) => {
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
                height='80%'
            />
            <Button onClick={() => store.handleSubmit(inputValue)} >Generate</Button>
        </>
    )
})

export default Editor
