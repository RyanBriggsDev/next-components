import React from 'react'
import { useRouter } from 'next/router'

function TextNav() {
    const router = useRouter()
  return (
    <nav>
        <div className="left">
            <li onClick={() => router.push('/')}>Home</li>
        </div>
        <div className="right">
          <div className="hamburger">
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
          <ul>
            <li>This</li>
            <li>Is</li>
            <li>A</li>
            <li>Thing</li>
          </ul>
        </div>
    </nav>
  )
}

export default TextNav