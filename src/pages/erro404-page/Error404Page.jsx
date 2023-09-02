import React from 'react'

const Error404Page = () => {
  return (
    <div style={{
      display:'grid',
      placeItems: 'center',
      color: '#fff'
    }}>
      <div style={{display: 'flex', gap: '15px'}}>
        <h1>Ошибка</h1>
        <h1 style={{color:'#51CCDFFF'}}>404</h1>
      </div>
      <h3>Страница не найдена</h3>
    </div>
  )
}

export default Error404Page