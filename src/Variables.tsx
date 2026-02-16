import React from 'react'

let a, b, c;
[a, b]  = [10, 20];
c = b + a;


const Variables = () => {
  return (
    <div>
      <h1> Suma </h1>
      <p>{a} + {b} = {c}</p>
    </div>
  )
}

export default Variables
