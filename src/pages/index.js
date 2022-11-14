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
      <section>
          <h3>Commonly Used Components</h3>
          <div className="grid-3-col g-2">
            <Card 
              title='Navbar'
              desc='A Standard Responsive Navbar'
              image={navbar.src}
              linkTo='navbar'
            />
            <Card 
              // title=''
              // desc=''
              // image={}
              // linkTo=''
            />
            <Card 
              // title=''
              // desc=''
              // image={}
              // linkTo=''
            />
          </div>
      </section>
    </div>
  )
}
