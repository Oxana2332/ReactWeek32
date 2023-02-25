import React, { useEffect, useRef } from 'react'
import './output.css'

function Out({item}) {
    const ref = useRef();

    useEffect(() => {
        ref.current.focus();
    }, [])

    return(
        <>
        <div tabIndex="0" ref={ref} className="comment">{item}</div>
        </>
    )
}

export default Out