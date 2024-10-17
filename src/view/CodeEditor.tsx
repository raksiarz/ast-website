import { observer } from 'mobx-react'
import { useState } from 'react'

const Editor = observer(({ store }: any) => {
    const [inputValue, setInputValue] = useState('')

    const onChange = (event: any) => {
        setInputValue(event.target.value)
    }

    return (
        <>
        <form onSubmit={ store.handleSubmit }>
            <input type='text' value={inputValue} onChange={ onChange } />
            <input type='submit' value='Generate' />
        </form>
        <p>{store.getEval}</p>
        </>
    )
})

export default Editor
