import Link from "next/link"

function FooterSection() {

  return (
    <div className="footer-section">
        <div className="footer-section-container">
            <div className="footer-section-content">
                <h3>Site Map</h3>
                <Link className='block' href={'/'}>Home</Link>
                <Link className='block' href={'/contact'}>Contact</Link>
                <Link className='block' href={'/about'}>About</Link>
            </div>
        </div>
    </div>
  )
}

export default FooterSection

const formArr = [{
    
}]