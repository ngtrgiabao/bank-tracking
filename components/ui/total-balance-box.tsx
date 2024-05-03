import React from 'react'

import AnimatedCounter from './animated-counter';
import DoughnutChart from './doughnut-chart';

interface Props {
  accounts: Array<any>;
  totalBanks: number;
  totalCurrentBalance: number;
}

const TotalBalanceBox = (props: Props) => {
  const { accounts, totalBanks, totalCurrentBalance } = props

  return (
    <section className='border shadow-md min-h-10 mt-4 flex items-center font-bold p-6 gap-4'>
      <div>
          <DoughnutChart accounts={accounts} />
      </div>

      <div className='flex flex-col gap-6 justify-center items-center text-2xl'>
        <h2>
          Banks Account: {totalBanks}
        </h2>

        <div className='flex flex-col gap-2'>
          <p className="font-normal">
            Total current balance
          </p>

          <div className='flex justify-center items-center font-bold gap-2 text-2xl'>
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox