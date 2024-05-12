import Image from 'next/image';
import React from 'react'
import { useRouter } from 'next/navigation';

import { signOut } from '@/lib/actions/user';
import { cn } from '@/lib/utils';

interface Props {
  user: User | any;
  type?: 'mobile' | 'desktop'
  className?: string;
}


const Footer = (props: Props) => {
  const { user, type, className } = props
  const navigate = useRouter();

  const handleSignOut = async () => {
    const loggedOut = await signOut();

    if (loggedOut) {
      navigate.push("/sign-in")
    }
  }

  return (
    <footer className={cn('footer flex items-center justify-between lg:gap-4 truncate', className)}>
      <div className='flex items-center gap-2'>
        <div className='footer_name w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-xl font-bold text-gray-700'>
          {user?.name[0] ?? "G"}
        </div>

        <div>
          <h1 className='text-lg font-normal'>
            {user?.name ?? "Guest"}
          </h1>

          <p className='text-sm font-normal opacity-40'>
            {user?.email ?? "guest@gmail.com"}
          </p>
        </div>
      </div>

      {
        user && <div className='w-10 h-10 hover:bg-slate-200 cursor-pointer flex items-center justify-center rounded-md' onClick={handleSignOut}>
          <Image
            width={24}
            height={24}
            alt='sign-out'
            src="/svg/logout.svg"
          />
        </div>
      }

    </footer>
  )
}

export default Footer