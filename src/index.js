import React from 'react'
import reactDOM from 'react-dom'
class EntryPoint extends React.Component{
    render(){
        return (
            <div className='text-center'>FIRST TEST</div>
        )
    }
}
reactDOM.render(<EntryPoint/>, document.getElementById('root'))
