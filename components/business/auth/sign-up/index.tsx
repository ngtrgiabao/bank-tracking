import AuthForm from '@/components/ui/auth-form'
import React from 'react'

const SignUp = () => {
  return (
    <section className='container'>
      <AuthForm
        type='sign-up'
      />
    </section>
  )
}

export default SignUp