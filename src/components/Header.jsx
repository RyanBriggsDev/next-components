

function Header(props) {
  return (
    <header className="my-10">
        <h1>{props.title}</h1>
        <p>{props.subText}</p>
    </header>
  )
}

export default Header

Header.defaultProps = {
    title: 'Title',
    subText: 'subText'
}