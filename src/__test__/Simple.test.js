import React from 'react'
import ReactDOM from 'react-dom'
import Simple from '../Simple'

it('Hello msg appears',
()=>{
    const div =document.createElement('div')
    ReactDOM.render(<Simple/>,div)

    expect(div.innerHTML).toContain('Hello!')

    ReactDOM.unmountComponentAtNode(div)
})