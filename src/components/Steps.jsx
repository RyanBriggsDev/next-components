import defaultImg from '../assets/img/defaultImg.png'

import Image from 'next/image'

function Steps(props) {
  return (
    <div className="steps my-4">
        <h4>Step <span>{props.stepNo}</span></h4>
        <h3>{props.title}</h3>
        <Image src={props.image} height='300' width='600' alt={props.alt}/>
        <p>{props.desc}</p>
    </div>
  )
}

export default Steps

Steps.defaultProps = {
    stepNo: 'stepNo',
    title: 'title',
    image: defaultImg.src,
    desc: 'desc'
}