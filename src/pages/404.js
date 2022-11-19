import Header from "../components/Header"

function Custom404() {
  return (
    <>
        <Header 
            hide={false}
            title={"404 - Oh no! It looks like your lost!"}
            subText={"That's not a good thing."}
            link={'/'}
            linkText={"Go home, you're drunk."}
        />
    </>
  )
}

export default Custom404