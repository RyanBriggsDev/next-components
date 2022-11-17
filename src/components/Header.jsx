

function Header(props) {
  return (
    <header className="my-10">
        <h1>{props.title}</h1>
        <p>{props.subText}</p>
        {props.hide === false ? <a href={props.link} target='_blank noreferrer'><button className="btn btn-primary">{props.linkText}</button></a> : ''}
    </header>
  )
}

export default Header

Header.defaultProps = {
    title: 'Title',
    subText: 'subText'
}