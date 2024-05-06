import AuthForm from '@/components/ui/auth-form'
import React from 'react'

const SignIn = () => {
  return (
    <section className='container'>
      <AuthForm
        type="sign-in"
      />
    </section>
  )
}

export default SignIn