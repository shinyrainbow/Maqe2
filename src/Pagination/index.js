import React from 'react'
import './index.scss'

const Pagination = () => {
  return (
    <div className='pagination'>
      <span className='prev'>Previous</span>
      {
        [1, 2, 3, 4, 5, 6, 7, 8].map((number, index) => {
          const isActive = index === 0 && 'active'
          return (
            <div key={index} className={`number ${isActive}`}>{number}</div>
          )
        })
      }
      <span className='next'>Next</span>
    </div>
  )
}

export default Pagination