
'use client';
import React from 'react'

interface Props {
    error: Error
}

const ErrorPage = ({ error }: Props) => {
  return (
    <div>An unexpected error has occured</div>
  )
}

export default ErrorPage