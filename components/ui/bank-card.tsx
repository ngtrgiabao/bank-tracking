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
        <div className='bg-bankcard pr-4 h-44 shadow-md rounded-2xl pb-0 overflow-hidden flex text-white'>
          <div className='w-[14rem] max-w-[14rem]'>
            <Image
              src="/fake/card-avatar.png"
              alt="avatar"
              width={224}
              height={224}
              className='aspect-square w-full h-full object-cover'
            />
          </div>

          <section className='border-l border-white px-3 py-1 my-4 gap-1 flex flex-col justify-between w-full'>
            <div>
              <h2 className='font-bold text-2xl'>
                {account.name || username}
              </h2>

              <p>
                {
                  account.currentBalance ? formatAmount(account.currentBalance) : "0 VND"
                }
              </p>
            </div>

            <article className='flex flex-col gap-2'>
              <div className='flex justify-between items-center'>
                <h2 className='text-12 font-semibold text-white'>
                  {username}
                </h2>

                <span className='text-12 font-semibold text-white'>
                  ●● / ●●
                </span>
              </div>

              <span className='text-14 font-semibold tracking-[1.1px] text-white flex justify-between items-center'>
                ●●●● ●●●● ●●●● <span className='text-16'>1234</span>
              </span>
            </article>
          </section>
        </div>
      </Link>
    </div >
  )
}

export default BankCard