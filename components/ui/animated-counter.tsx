"use client"

import React from 'react'
import CountUp from 'react-countup';

interface Props {
  amount: number;
}

const AnimatedCounter = (props: Props) => {
  const { amount } = props

  return (
    <section>
      <CountUp
        duration={1}
        decimals={2}
        decimal='.'
        end={amount}
        className='me-1'
      />
      VND
    </section>
  )
}

export default AnimatedCounter