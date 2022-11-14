import Link from "next/link"
import { useRouter } from "next/router"
import defaultImg from '../../assets/img/defaultImg.png'

function Card(props) {

    const router = useRouter()

  return (
    <div className="card" onClick={() => router.push(`${props.linkTo}`)}>
        <div 
            className="card-img" 
            style={{backgroundImage: `url(${props.image})`}}
        >
            <div className="dark-overlay p-1_5 br2 flex flex-start-end flex-dir-col">
                <h4>{props.title}</h4>
                <p>{props.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default Card

Card.defaultProps = {
    // works best with 16:9 images and must include .src
    title: 'Title',
    desc: 'Desc',    
    image: defaultImg.src,
    linkTo: 'eggs'
}