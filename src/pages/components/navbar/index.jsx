import Header from "../../../components/Header"
import Steps from "../../../components/Steps"

import TestNav from "../../../components/TestNav"

import one from '../../../assets/img/pages/navPage/One.png'
import two from '../../../assets/img/pages/navPage/Two.png'
import three from '../../../assets/img/pages/navPage/three.png'
import four from '../../../assets/img/pages/navPage/four.png'


function NavbarPage() {
  return (
    <>
        <Header 
            title='Responsive Navbar Component in React/Next.js'
            subText={`Let's make a responsive navbar in React using state.`}
        />
        <TestNav />
        <section className="my-4">
          <Steps 
            stepNo='One'
            title='Make a New Component'
            img={one}
            desc={`First we need to make a new component. Typical file structure is src/components/nav.jsx. But you can do whatever suits your needs. We'll be using a React functional component.`}
          />
          <Steps 
            stepNo='2'
            title='Get Your Divs In'
            img={two}
            desc={`We need a typical structure for a nav. I normally have left and right divs within a nav tag. Within left I have a home link. We can import the useRouter hook from next for this and then make an onClick action.`}
          />
          <Steps 
            stepNo='3'
            title="Nav Right"
            img={three}
            desc={`This contains nav links and hamburger menu. Put your nav links in a ul. We also need a div directly inside div.right with a className of hamburger. Within this 3x div.burger-lines.`}
          />
          <Steps 
            stepNo='4'
            title="Make it pretty, please"
            img={four}
            desc={` So far we have 5 words, that's it. Let's make it pretty and make nav flex, and centre children using justify-content and align-items. Make left and right width 50%. Make the links inline-block and space everything out as you wish.`}
            />
        </section>
    </>
  )
}

export default NavbarPage