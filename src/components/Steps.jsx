import defaultImg from '../assets/img/defaultImg.png'

import Image from 'next/image'

function Steps(props) {

  return (
    <div className="steps my-4">
        <h4>Step <span>{props.stepNo}</span></h4>
        <h3>{props.title}</h3>
        <div className="code-container">
          <div className="code-background">
            {props.codeArr.map((code, index) => (
              <div key={index}>
                <p>{code}</p>
              </div>
            ))}
          </div>
        </div>
        <p>{props.desc}</p>
    </div>
  )
}

export default Steps

Steps.defaultProps = {
    stepNo: 'stepNo',
    title: 'title',
    image: defaultImg.src,
    desc: 'desc',
    codeArr: ['one', 'two', 'three', 'four'],
    link: 'https://github.com/RyanBriggsDev/next-components'
}