import Header from "../components/Header"
import Card from "../components/cards/Card"

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
            <Card />
            <Card />
            <Card />
          </div>
      </section>
    </div>
  )
}
