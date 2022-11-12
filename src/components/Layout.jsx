import Nav from './Nav'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className='layout'>
        <Nav />
            <div className="content">{children}</div>
        <Footer />
    </div>
  )
}

export default Layout