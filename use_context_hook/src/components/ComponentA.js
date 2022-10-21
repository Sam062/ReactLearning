import React from 'react'
import { ComponentB } from './ComponentB'

export const ComponentA = () => {
  return (
    <div>
      Component A
      <ComponentB />
    </div>
  )
}
