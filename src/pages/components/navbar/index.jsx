import Header from "../../../components/Header"
import Steps from "../../../components/Steps"

import TestNav from "../../../components/TestNav"

import one from '../../../assets/img/pages/navPage/One.png'
import two from '../../../assets/img/pages/navPage/Two.png'
import three from '../../../assets/img/pages/navPage/three.png'
import four from '../../../assets/img/pages/navPage/four.png'
import five from '../../../assets/img/pages/navPage/five.png'
import six from '../../../assets/img/pages/navPage/six.png'
import seven from '../../../assets/img/pages/navPage/seven.png'
import eight from '../../../assets/img/pages/navPage/eight.png'

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
            stepNo='1'
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
            <Steps 
              stepNo='5'
              title="Hamburger Styling"
              img={five}
              desc={`Next up we need to style and position the hamburger. We'll first target div.hamburger and make it centre everything with flex. Then can can style the lines by giving them a fixed width and height. They need some vertical margin to space them out and a background color to be made visable.`}
            />
            <Steps 
              stepNo='6'
              title={`Toggle State & Conditional Classes`}
              img={six}
              desc={`Now we've got all the JSX elements we need we need to add some state to track if the hamburger menu should be open. Let's call this navToggle. The default value should be false (closed). Then we need an onClick prop that'll update the state to the opposite of the state. Our div.hamburger should also have a conditional class 'open' that applied if our navToggle state is true. We should also have a conditional id 'show' for the nav links ul.`}
            />
            <Steps 
              stepNo='7'
              title='Media Queries'
              img={seven}
              desc={`Choose a max-width that's right for your navbar. I've chose 40rem for this tutorial but it'll depend of your navs content. Change the ul to display none within the media query. So that below your max-width they will not show by default. We can then target the #show id which will become active when we click our hamburger. We can set display flex, with a position of absolute, left 0 and top to be positioned underneath your nav. The width will be 100%, height auto and any other styling as you wish. We will need to set the hamburger div's display as default to none and within the media query as flex. You should now have a functional responsive navbar.`}
            />
            <Steps 
              stepNo='8'
              title='Hamburger Animation (style points)'
              img={eight}
              desc={`This is easier than it looks, and it gives off a really cool effect. You don't have to do it the same as mine, but here is how I do it. Target each burger line individually with the nth-child pseudo element. We can then add a transform property that'll rotate/move the elements as we wish when the burger is clicked. Just remember to add a transition too! (I use ease-in-out)`}
            />
            <p>And that's it. You'll now have a fully responsive and functional navbar component. If this helped you at all, or you have any improvements (I know they'll be plenty), shout at me on Twitter <a className="inline-link" href="https://twitter.com/RyanBriggsDev" target='_blank noreferrer'>@ryanbriggsdev</a>.</p>
        </section>
    </>
  )
}

export default NavbarPage