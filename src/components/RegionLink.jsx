import React from 'react'
import { Link } from 'react-router-dom'

const RegionLink = (props) => {
  return (
        <Link id={props.id} to={props.href} title={props.title}>
            {props.children}
        </Link>
  )
}

export default RegionLink