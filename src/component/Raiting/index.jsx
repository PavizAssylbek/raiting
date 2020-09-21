import React from 'react'
import {Progress} from '../index'

import goldStars from '../../assets/img/svg/goldStars.svg'


function Raiting({data}) {

  return(
    <div className="raiting">
      <div className="raiting-flex">
        <h1 className="raiting-title">
          {data.reviewCount}<label>/5</label>
        </h1>
        <div className="raiting-stars">
          {Array(data.reviewCount)
          .fill(0)
          .map((_, index) => <img className="raiting-stars__img" key={index} src={goldStars} alt="goldStars"/>)}
        </div>
        <div className="raiting-overallRating">
          <p>{data.overallRating} отзывов</p>
        </div>
        <div className="raiting-progress">
            <Progress data={data.rates.one} star={5} />
            <Progress data={data.rates.two} star={4} />
            <Progress data={data.rates.three} star={3} />
            <Progress data={data.rates.four} star={2} />
            <Progress data={data.rates.five} star={1} />
        </div>
      </div>
    </div>
  )
}

export default Raiting