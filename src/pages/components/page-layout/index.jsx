import Header from "../../../components/Header"
import useSetTitle from '../../../hooks/useSetTitle'

function LayoutPage() {

  useSetTitle('Page Layout')

  return (
    <>
        <Header 
          title='Page Layout Component in React/Next.js'
          subText={`Let's setup your App by adding a layout component to app.js.`}
        />
    </>
  )
}

export default LayoutPage