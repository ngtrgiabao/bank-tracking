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
    <section className='border shadow-md min-h-10 my-6 flex items-center font-bold p-4 w-full gap-4 flex-row'>
      <div>
          <DoughnutChart accounts={accounts} />
      </div>

      <div className='flex flex-col gap-3 items-start text-lg'>
        <h2>
          Banks Account: {totalBanks}
        </h2>

        <div className='flex flex-col gap-1 items-start'>
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