import { observer } from 'mobx-react'
import './Console.css'

const Console = observer(({ store }: any) => {

    return (
        <p className='console'>{ store.getEvaluated }</p>
    )
})

export default Console
