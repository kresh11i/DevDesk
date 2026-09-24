import React from 'react'
import Button from './Button'

const ErrorState = ({message , onRetry ,label}) => {
  return (
    <div>
      <h1>{message}</h1>
      <Button onClick={onRetry} >{label}</Button>
    </div>
  )
}

export default ErrorState
