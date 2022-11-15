import Header from "../components/Header"
import Card from "../components/cards/Card"

import navbar from '../assets/img/navbar.png'

export default function Home() {
  return (
    <div>
      <Header 
        title='React/Next Component Library'
        subText='My Cheatsheet to components + documentation.'
      />
      <section className="my-4">
          <h3>Commonly Used Components</h3>
          <div className="grid-2-col g-2 my-2">
            <Card
              title='Navbar'
              desc='A standard responsive navbar'
              image={navbar.src}
              linkTo='/components/navbar'
            />
            <Card 
              title='Card'
              desc={`Literally the one you're looking at`}
              linkTo='/components/card'
            />
            <Card
              title='Form'
              desc='Form component that captures user inputted data'
              linkTo='components/form'
            />
            <Card
              title='Page Layout'
              desc='Easy page layout using CSS flexbox'
              linkTo='components/page-layout'
            />
          </div>
      </section>
      <section className="my-4">

      </section>
    </div>
  )
}