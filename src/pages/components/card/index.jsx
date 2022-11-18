import Header from "../../../components/Header"
import useSetTitle from '../../../hooks/useSetTitle'

function CardPage() {

  useSetTitle('Card')

  return (
    <>
      <Header 
        title='Card Component in React/Next.js'
        subText={`Let's make a clickable card component using css, props and next router.`}
      />
    </>

  )
}

export default CardPage