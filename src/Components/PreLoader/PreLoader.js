import React from 'react'
import './PreLoader.css'
const PreLoader = () => {
    return (
    <div className={window.onload ? 'preloader' : ''}>
        <div className={window.onload ? 'spinner' : ''}></div>
    </div>
    )
}

export default PreLoader
