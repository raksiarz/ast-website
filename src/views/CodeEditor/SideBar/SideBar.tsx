import { observer } from 'mobx-react'
import examples from './examples.js'
import './SideBar.css'

const SideBar = observer(({ editor }: any) => {
    return (
        <div className='side-bar-container'>
            <h4>Examples</h4>
            <ul>
                {examples.map((el: any) => {
                    return (
                        <li className='list-item' onClick={() => editor.inputValue = el.value}>
                            <h5>{el.title}</h5>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
})

export default SideBar
