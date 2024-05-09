import { formatAmount } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
  account: Account;
  username: string;
  showBalance?: boolean;
}

const BankCard = (props: Props) => {
  const { account, username, showBalance } = props

  return (
    <div className='flex flex-col max-w-[24rem]'>
      <Link href="/">
        <div className='bg-[#1ba4f8] pr-4 h-44 shadow-md rounded-2xl pb-0 overflow-hidden flex text-white'>
          <Image
            src="/fake/card-avatar.jpg"
            alt="avatar"
            width={120}
            height={300}
            className='size-[120/300] h-full object-cover'
          />

          <section className='border-l border-white px-3 py-1 my-4 gap-1 flex flex-col justify-between w-full'>
            <div>
              <h1 className='font-bold text-2xl'>
                {account.name || username}
              </h1>

              <p>
                {
                  account.currentBalance ? formatAmount(account.currentBalance) : "0 VND"
                }
              </p>
            </div>

            <article className='flex flex-col gap-2'>
              <div className='flex justify-between items-center'>
                <h1 className='text-12 font-semibold text-white'>
                  {username}
                </h1>

                <h2 className='text-12 font-semibold text-white'>
                  ●● / ●●
                </h2>
              </div>

              <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                ●●●● ●●●● ●●●● <span className='text-16'>1234</span>
              </p>
            </article>
          </section>
        </div>
      </Link>
    </div >
  )
}

export default BankCard