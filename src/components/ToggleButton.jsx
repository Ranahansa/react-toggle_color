import React, { useState } from 'react'
import './style.css'

const ToggleButton = () =>{
    const [backgroundColor, setBackgroundColor] = useState('white')
        const[textColor, setTextColor] = useState('#1b1b1b')
        const[buttonStyle, setButtonStyle] = useState('white')
        const[paragraphStyle, setParagraphStyle] = useState('white')
    
    const handleClick = () =>{
        setBackgroundColor(backgroundColor === 'white' ? '#1b1b1b' : 'white')
        setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b')
        setButtonStyle(backgroundColor === 'white' ? '#1b1b1b' : 'white')
        setParagraphStyle(backgroundColor === '#1b1b1b' ? "Light" : "Dark")
    }
    return (
        <div>
            <section style={{
                backgroundColor,
                color: textColor
            }}>
                <button onClick={handleClick} style={{
                    backgroundColor : buttonStyle,
                    color: textColor,
                    border: '2px solid ${textColor}',
                }}>{paragraphStyle} Theme</button>


            <section className='content'>
                <h1>
                    Welcome To The {paragraphStyle} Side !
                </h1>
            </section>

            </section>
        </div>
    )
}

export default ToggleButton