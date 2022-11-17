import Header from "../../../components/Header"
import Steps from "../../../components/Steps"

function NavbarPage() {
  return (
    <>
        <Header 
            title='Responsive Navbar Component in React/Next.js'
            subText={`Let's make a responsive navbar in React using state.`}
        />
        <section className="my-4">
          <Steps 
            stepNo='1'
            title='Make a New Component'
            codeArr={[`import React from 'react'`, `function TestNav() {`, , `return (`, `<nav>TestNav</nav>`, `)`, `}`, '', `export default TestNav`]}
            desc={`First we need to make a new component. Typical file structure is src/components/nav.jsx. But you can do whatever suits your needs. We'll be using a React functional component.`}
            alt='Image of code. Making a React functional component.'
          />
          <Steps 
            stepNo='2'
            title='Get Your Divs In'
            codeArr={[`import React from 'react'`, `import { useRouter } from 'next/router'`, `function TestNav() {`, `// don't forget to declare router`, `const router = useRouter()`, `return (`, `<nav>`, `<div className='left'>`, `<li onClick={() => router.push('/')}>Home</li>`, `</div>`, `<div className='right'></div>`, `</nav>`, `)`, `}`, `export default TestNav`]}
            desc={`We need a typical structure for a nav. I normally have left and right divs within a nav tag. Within left I have a home link. We can import the useRouter hook from next for this and then make an onClick action.`}
            alt='Image of code. Typical navbar structure code.'
          />
          <Steps 
            stepNo='3'
            title="Nav Right"
            codeArr={[`<div className='right'>`, `<div className='hamburger'>`, `<div className='burger-line'></div>`, `<div className='burger-line'></div>`, `<div className='burger-line'></div>`, `</div>`, `<ul>`, `<li>This</li>`, `<li>Is</li>`, `<li>A</li>`, `<li>Link</li>`, `</ul>`, `</div>`]}
            desc={`This contains nav links and hamburger menu. Put your nav links in a ul. We also need a div directly inside div.right with a className of hamburger. Within this 3x div.burger-lines.`}
            alt='Image of code. Setting up nav links and hamburger menu.'
          />
          <Steps 
            stepNo='4'
            title="Make it pretty, please"
            codeArr={[`nav {`, `background-color: orangered;`, `display: flex;`, `justify-content: center;`, `align-items: center;`, `}`, `nav .right, .left {`, `width: 50%;`, `}`, `nav .right ul > *, .left > * {`, `display: inline-block;`, `}`, `nav .right ul > *, .left > * {`, `padding: 0.5rem 1rem;`, `cursor: pointer;`, `background-color: orange;`, `}`]}
            desc={` So far we have 5 words, that's it. Not very impressive. Let's make it pretty and make nav flex, and centre children using justify-content and align-items. Make left and right width 50%. Make the links inline-block and space everything out as you wish.`}
            alt='Image of code. Adding some style with CSS.'
            />
            <Steps 
              stepNo='5'
              title="Hamburger Styling"
              codeArr={[`.hamburger {`, `display: flex;`, `justify-content: center;`, `align-items: center;`, `margin-left: auto;`, `flex-direction: column;`, `}`, `.hamburger > * {`, `width: 2rem;`, `height: 2px;`, `background-color: white`, `margin: 0.25rem 0;`, `}`]}
              desc={`Next up we need to style and position the hamburger. We'll first target div.hamburger and make it centre everything with flex. Then can can style the lines by giving them a fixed width and height. They need some vertical margin to space them out and a background color to be made visable.`}
              alt='Image of code. Styling the hamburger menu.'
            />
            <Steps 
              stepNo='6'
              title={`Toggle State & Conditional Classes`}
              codeArr={[`const [navToggle, setNavToggle] = useState(false)`, `<div className={` + "'hamburger " + '${navToggle === false ? " " : "open"' + "}`} onClick={(() => setNavToggle(!navToggle))}>", `<ul className="nav-links" id={navToggle ? 'show' : ''}>`]}
              desc={`Now we've got all the JSX elements we need we need to add some state to track if the hamburger menu should be open. Let's call this navToggle. The default value should be false (closed). Then we need an onClick prop that'll update the state to the opposite of the state. Our div.hamburger should also have a conditional class 'open' that applied if our navToggle state is true. We should also have a conditional id 'show' for the nav links ul.`}
              alt='Image of code. Example toggle state and conditional class setup.'
            />
            <Steps
              stepNo='7'
              title='Media Queries'
              codeArr={[`@media screen and (max-width: 40rem) {`, `nav .right ul {`, `display: none;`, `}`, `nav .right #show {`, `background-color: black;`, `display: flex;`, `position: absolute;`, `left: 0px;`, `top: 3rem;`, `height: auto;`, `width: 100%;`, `flex-direction: column;`, `align-items: center;`, `}`, `}`]}
              desc={`Choose a max-width that's right for your navbar. I've chose 40rem for this tutorial but it'll depend of your navs content. Change the ul to display none within the media query. So that below your max-width they will not show by default. We can then target the #show id which will become active when we click our hamburger. We can set display flex, with a position of absolute, left 0 and top to be positioned underneath your nav. The width will be 100%, height auto and any other styling as you wish. We will need to set the hamburger div's display as default to none and within the media query as flex. You should now have a functional responsive navbar.`}
              alt='Image of code. Example of media queries.'
            />
            <Steps 
              stepNo='8'
              title='Hamburger Animation (style points)'
              codeArr={[`.hamburger.open .burger-line:nth-child(1) {`, `transform: rotate(-45deg) translate(-7.5px, 7.5px)`, `}`, `.hamburger.open .burger-line:nth-child(2) {`, `transform: translateX(-400px) rotateZ(90deg);`, `background: transparent;`, `box-shadow: none;`, `}`, `.hamburger.open .burger-line:nth-child(3) {`, `transform: rotate(45deg) translate(-5px, -5px);`, `}`]}
              desc={`This is easier than it looks, and it gives off a really cool effect. You don't have to do it the same as mine, but here is how I do it. Target each burger line individually with the nth-child pseudo element. We can then add a transform property that'll rotate/move the elements as we wish when the burger is clicked. Just remember to add a transition too! (I use ease-in-out).`}
              alt='Image of code. Making an animation for the hamburger menu opening/closing.'
            />
            <p>And that's it. You'll now have a fully responsive and functional navbar component. If this helped you at all, or you have any improvements (I know they'll be plenty), shout at me on Twitter <a className="inline-link" href="https://twitter.com/RyanBriggsDev" target='_blank noreferrer'>@ryanbriggsdev</a>.</p>
        </section>
    </>
  )
}

export default NavbarPage