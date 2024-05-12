import SignUp from '@/components/business/auth/sign-up'
import { getLoggedInUser } from '@/lib/actions/user'
import React from 'react'

export default async function SignUpPage() {
  const user = await getLoggedInUser()
  console.log(user)

  return (
    <div className='py-4'>
      <SignUp />
    </div>
  )
}