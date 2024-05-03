import React from 'react'

interface Props {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

const HeaderBox = (props: Props) => {
  const { title, subtext, user, type } = props;

  return (
    <div>
      <h1 className='text-4xl font-bold'>
        {title}
        {
          type === "greeting" && (
            <span className='text-blue-500'>
              &nbsp;{user}
            </span>
          )
        }
      </h1>
      <p className='text-xl'>{subtext}</p>
    </div>
  )
}

export default HeaderBox