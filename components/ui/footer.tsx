import React from 'react'

interface Props {
  user: User | any;
  type?: 'mobile' | 'desktop'
}


const Footer = (props: Props) => {
  const { user, type } = props

  return (
    <footer className='footer flex items-center gap-2 max-w-full'>
      <div className='footer_name w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-xl font-bold text-gray-700'>
        {user?.name[0] ?? "G"}
      </div>

      <h1 className='text-lg truncate font-normal'>
        {user?.name ?? "Guest"}
      </h1>
    </footer>
  )
}

export default Footer