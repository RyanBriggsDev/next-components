import Link from "next/link"

function FooterSection(props) {

  return (
    <div className="footer-section">
        <div className="footer-section-container">
            <div className="footer-section-content">
                <h3>{props.title}</h3>
                {props.footerArr.map((link, index) => (
                    <Link className="block footer-link" href={`/${link.toLowerCase()}`} key={index}>{link}</Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FooterSection

FooterSection.defaultProps = {
    title: 'title',
    footerArr: ['Home', 'Contact', 'About', 'Components/Navbar'],
}