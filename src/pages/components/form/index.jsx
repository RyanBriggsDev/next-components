import Header from "../../../components/Header"
import useSetTitle from '../../../hooks/useSetTitle'

function FormPage() {

  useSetTitle('Form')

  return (
    <>
      <Header 
        title='Form Component in React/Next.js'
        subText={`Let's make a form component to store data using react hooks.`}
      />
    </>

  )
}

export default FormPage