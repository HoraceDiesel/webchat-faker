import React from 'react'

const Spacer = (props) => {

  const { size } = props

  return (
    <div className={`spacer-${ size }`}>
    </div>
  )
}

export default Spacer
