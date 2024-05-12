"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

import { cn } from '@/lib/utils';
import { sidebarLinks } from '@/constants';
import Footer from './footer';

interface Props {
  user: User | any;
}

const Sidebar = (props: Props) => {
  const { user } = props;
  const pathname = usePathname();

  return (
    <nav className='hidden lg:flex flex-col justify-between min-h-screen p-4 border-r border-slate-500 max-w-[25%] w-[25%]'>
      <div className='flex flex-col gap-1 truncate'>
        <Link href="/" className='mb-4 cursor-pointer gap-2 flex items-center'>
          <Image
            src="https://i.pinimg.com/564x/90/af/12/90af12758c4f2881b57866bfeffc0d92.jpg"
            alt="logo"
            width={30}
            height={30}
            className='rounded-full size-[40px] max-xl:size-14'
          />

          <h1 className="text-xl font-semibold">
            Bank Tracking
          </h1>
        </Link>

        {sidebarLinks.map(item => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

          return (
            <Link
              href={item.route}
              key={item.route}
              className={cn('cursor-pointer gap-2 flex items-center p-2 py-3 rounded-md', {
                'bg-slate-200': isActive
              })}
            >
              <div className="flex w-full max-w-[1.5625rem] items-center">
                <Image
                  src={item.imagUrl}
                  loading="lazy"
                  alt={item.label}
                  width={25}
                  height={25}
                  className="object-cover"
                />
              </div>

              <h1 className='text-lg font-semibold'>
                {item.label}
              </h1>
            </Link>
          )
        })}

        <span className='p-2'>
          USER
        </span>
      </div>

      <Footer user={user} />
    </nav>
  )
}

export default Sidebar