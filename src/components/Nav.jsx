import { useRouter } from "next/router"
import { useState } from "react"

function Nav() {

  const router = useRouter()
  const [navToggle, setNavToggle] = useState(false)

  return (
    <nav>
      <div className="nav content">
        <div className="nav-left">
          <a href="https://www.ryanbriggs.dev/" target='_blank noreferrer'>Portfolio</a>
          <li onClick={() => router.push('/')}>Home</li>
        </div>
        <div className="nav-right">
        <div className={`hamburger ${navToggle === false ? '' : 'open'}`} onClick={(() => setNavToggle(!navToggle))}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
          <ul className="nav-links" id={navToggle ? 'show' : ''}>
            <li>Small</li>
            <li>Medium</li>
            <li>Large</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav