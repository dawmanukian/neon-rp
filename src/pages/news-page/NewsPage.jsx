import React from 'react'
import './news-page.css'

const NewsPage = ({news}) => {
  return (
    <div className='container news'>
        {news.map(el => {
            return (
                <div className="new" key={el.id}>
                    <img src={el.img} width={'100%'}/>
                    <div className='new-text'>
                        <h4 style={{color: '#51CCDFFF'}}>{el.title}</h4>
                        <p>{el.text}</p>
                        <p>{el.date}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default NewsPage