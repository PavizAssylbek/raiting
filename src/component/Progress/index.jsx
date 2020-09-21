import React from 'react'
import whiteStars from '../../assets/img/svg/whiteStars.svg'


function Progress({data, star}) {
console.log("Progress -> star", star)

  console.log(data)
  return (
    <div className="raiting-block">
      <div className="raiting-block__flex">
        <div className="">
        {
          Array(star)
          .fill(0)
          .map((_, index) => <img key={index} src={whiteStars} alt="whiteStars"/>)
        }
        </div>
        <div className="">
        {
          <span>{data}</span>
        }
        </div>
      </div>
      <progress value={data} max="100"></progress>
    </div>
  )
}

export default Progress