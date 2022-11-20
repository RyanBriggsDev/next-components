import FooterSection from "./FooterSection"

function Footer() {
  return (
    <footer className="content">
      <div className="footer grid-6-col g-1">
        <FooterSection 
          title='Site Map'
        />
        <FooterSection
          title='Components' 
          footerArr={['All Components', 'Navbar', 'Card', 'Form', 'Page Layout']}
        />
      </div>
    </footer>
  )
}

export default Footer