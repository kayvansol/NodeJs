import React from 'react'

export default function Header(props) {
    return (
        <div>
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <p>سلام <b style={{color:'orangered'}}>{props.userName}</b> جان</p>
                <h2>React js App</h2>
                
            </header>
            
        </div>
    )
}
