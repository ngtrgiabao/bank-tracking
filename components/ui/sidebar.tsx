import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const sidebarLinks = [
  {
    imagUrl: "",
    route: "/",
    label: "Home"
  },
  {
    imagUrl: "",
    route: "/my-banks",
    label: "My banks"
  },
  {
    imagUrl: "",
    route: "/transaction-history",
    label: "Transaction history"
  },
]

const Sidebar = (props: SidebarProps) => {
  const { user } = props;

  return (
    <nav className='p-4 w-[15vw]'>
      <div className='flex flex-col gap-1'>
        <Link href="/" className='mb-4 cursor-pointer gap-2 flex items-center'>
          <Image
            src="https://i.pinimg.com/564x/90/af/12/90af12758c4f2881b57866bfeffc0d92.jpg"
            alt="logo"
            width={40}
            height={40}
            className='rounded-full size-[40px] max-xl:size-14'
          />

          <h1 className='text-xl font-semibold'>
            {user.firstName}
          </h1>
        </Link>

        {sidebarLinks.map(item => (
          <Link
            key={item.label}
            className="text-lg hover:bg-slate-100 p-2 rounded-md"
            href={item.route}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Sidebar