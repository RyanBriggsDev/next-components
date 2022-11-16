import { useRouter } from 'next/router'
import { useState } from 'react'

function TextNav() {
    const router = useRouter()
    const [navToggle, setNavToggle] = useState(false)
  return (
    <nav>
        <div className="left">
            <li onClick={() => router.push('/')}>Home</li>
        </div>
        <div className="right">
          <div className={`hamburger ${navToggle === false ? '' : 'open'}`} onClick={() => setNavToggle(!navToggle)}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
          <ul id={navToggle ? 'show' : ''}>
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