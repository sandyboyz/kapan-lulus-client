import React from 'react'
import reactDOM from 'react-dom'
import LoginPage from './login-page'
class EntryPoint extends React.Component{
    render(){
        return (
            <div
                style = {{border:'solid black 1px'}}
                className='text-right'
            >
                <LoginPage/>
            </div>
        )
    }
}
reactDOM.render(<EntryPoint/>, document.getElementById('root'))
