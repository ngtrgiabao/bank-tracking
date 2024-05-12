import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import BankCard from './bank-card';

interface Props {
  user: User;
  banks: Array<any>;
  transactions: Array<any>;
}

const RightSidebar = (props: Props) => {
  const { user, banks, transactions } = props

  return (
    <aside className='right-sidebar p-4 min-w-max min-h-screen'>
      <section className='flex flex-col pb-8'>
        <div className="profile-banner" />

        <div className='profile px-6'>
          <span className='profile-img'>
            {user.name?.[0] || "G"}
          </span>

          <div className='mt-12'>
            <h1 className='font-bold text-2xl'>
              {user.name || "Guest"}
            </h1>

            <p className='font-light'>
              {user.email || "guest@gmail.com"}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='flex justify-between items-center pl-6'>
          <h2 className='text-lg font-bold'>My banks</h2>

          <Link href="/" className='flex items-center gap-1 hover:bg-slate-200 rounded-md py-1 px-2'>
            <Image
              src="/svg/plus.svg"
              width={20}
              height={20}
              alt="logo"
              className="rounded-full"
            />

            <h2 className='text-slate-700 text-lg'>Add bank</h2>
          </Link>
        </div>

        {
          banks.length > 0 && (
            <div className='relative flex flex-1 flex-col items-center justify-center mt-4'>
              <div className='relative z-10 w-[90%] -right-10'>
                <BankCard
                  key={banks[0].$id}
                  account={banks[0]}
                  username={user?.name}
                  showBalance={false}
                />
              </div>

              {
                banks[1] && (
                  <div className='absolute left-6 top-8 z-0 w-[90%]'>
                    <BankCard
                      key={banks[0].$id}
                      account={banks[1]}
                      username={user?.name}
                      showBalance={false}
                    />
                  </div>
                )
              }
            </div>
          )
        }
      </section>
    </aside>
  )
}

export default RightSidebar