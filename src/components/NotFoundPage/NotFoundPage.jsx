import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button/Button'

const NotFoundPage = () => {
  return (
    <div>
        <h3>К сожалению, такой страницы нет.</h3>
        <Link to={'/'}>
        {/* <Link to={'/quiz/index.html'}> */}
            <Button text={'Вернуться назад'} />
        </Link>
    </div>
    
  )
}

export default NotFoundPage