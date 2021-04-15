import React from 'react'
import cn from 'classnames'

export const Button = (props) => {
  return (
    <button className={cn('button', {'is-loading': false, 'is-danger': false })} {...props} />
  )
}
