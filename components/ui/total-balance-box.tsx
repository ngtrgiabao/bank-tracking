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
    <section className='border shadow-md min-h-10 mt-4 flex items-center justify-between font-bold p-4 w-max gap-4 flex-row'>
      <div>
          <DoughnutChart accounts={accounts} />
      </div>

      <div className='flex flex-col gap-3 items-center text-lg'>
        <h2>
          Banks Account: {totalBanks}
        </h2>

        <div className='flex flex-col gap-1'>
          <p className="font-normal">
            Total current balance
          </p>

          <div className='flex justify-center items-center font-bold gap-2 text-xl'>
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox