import { useRouter } from "next/router"

function Nav() {

  const router = useRouter()

  return (
    <nav>
      <div className="nav content">
        <div className="nav-left">
          <a href="https://www.ryanbriggs.dev/" target='_blank noreferrer'>Portfolio</a>
          <li onClick={() => router.push('/')}>Home</li>
        </div>
        <div className="nav-right">
          <li>Small</li>
          <li>Medium</li>
          <li>Large</li>
        </div>
      </div>
    </nav>
  )
}

export default Nav