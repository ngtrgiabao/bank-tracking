"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import { authFormSchema } from '@/lib/utils';
import CustomInput from '../features/custom-input';
import SignUp from '../business/auth/sign-up';

interface Props {
  type: string;
}

const AuthForm = (props: Props) => {
  const { type } = props
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useRouter()

  const formSchema = authFormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      username: ""
    },
  })

  const handleSignIn = (data: z.infer<typeof formSchema>) => {
    // const response = await SignIn({
    //   email: data.email,
    //   password: data.password
    // })

    // if(response) {
    //   navigate.push("/")
    // }
  }

  const handleSignUp = async (data: z.infer<typeof formSchema>) => {
    // const newUser = await signUp(data);

    // setUser(newUser);
  }

  // 2. Define a submit handler.
  async function onSubmit(data: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);

    try {

    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="flex justify-center flex-col">
      <header className='flex flex-col gap-2 mb-4 w-max'>
        <Link href="/" className='cursor-pointer flex items-center gap-2 uppercase'>
          <Image
            src="https://i.pinimg.com/564x/90/af/12/90af12758c4f2881b57866bfeffc0d92.jpg"
            alt="logo"
            width={32}
            height={32}
            className='rounded-full size-[32px] max-xl:size-8 object-cover'

          />
          <h1 className="text-lg font-bold text-black">
            Bank tracking
          </h1>
        </Link>

        <div className='flex flex-col gap-1 md:gap-3'>
          <h1 className='font-bold text-lg'>
            {user
              ? 'Link Account'
              : type === 'sign-in'
                ? 'Sign in'
                : 'Sign up'
            }

            <p className='text-sm font-normal text-gray-600'>
              {
                user ? "Link your account to get started"
                  : "Please enter your details"
              }
            </p>
          </h1>
        </div>
      </header>

      {
        user ?
          <div className='flex flex-col gap-4'>

          </div>
          :
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {
                type === "sign-up"
                && (
                  <>
                    <section className='grid md:grid-cols-2 gap-4'>
                      <CustomInput
                        control={form.control}
                        name="firstName"
                        label="First Name"
                        placeholder="Enter your first name"
                      />

                      <CustomInput
                        control={form.control}
                        name="lastName"
                        label="Last Name"
                        placeholder="Enter your last name"
                      />
                    </section>

                    <section className='grid md:grid-cols-2 gap-4'>
                      <CustomInput
                        control={form.control}
                        name="address1"
                        label="Address"
                        placeholder="Enter your address"
                      />

                      <CustomInput
                        control={form.control}
                        name="city"
                        label="City"
                        placeholder="Enter your city"
                      />
                    </section>

                    <CustomInput
                      control={form.control}
                      name="state"
                      label="State"
                      placeholder="Example: NY"
                    />

                    <section className='grid md:grid-cols-2 gap-4'>
                      <CustomInput
                        control={form.control}
                        name="state"
                        label="State"
                        placeholder="Example: NY"
                      />

                      <CustomInput
                        control={form.control}
                        name="postalCode"
                        label="Postal Code"
                        placeholder="Example: 11101"
                      />
                    </section>

                    <section className='grid md:grid-cols-2 gap-4'>
                      <CustomInput
                        control={form.control}
                        name="dataOfBirth"
                        label="Date of Birth"
                        placeholder="YYYY-MM-DD"
                      />

                      <CustomInput
                        control={form.control}
                        name="ssn"
                        label="SSN"
                        placeholder="Example: 1234"
                      />
                    </section>

                    <CustomInput
                      control={form.control}
                      name="email"
                      label="Email"
                      placeholder="Enter your email"
                    />
                  </>
                )
              }

              {
                type === "sign-in" && (
                  <CustomInput
                    control={form.control}
                    name="username"
                    label="Username"
                    placeholder="Enter your username"
                  />
                )
              }

              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />

              <Button type="submit" disabled={isLoading} className='w-full text-md py-6'>
                {
                  isLoading ?
                    <>
                      <Loader2
                        className='animate-spin'

                      />
                      &nbsp;
                      Loading...
                    </>
                    :
                    type === "sign-in"
                      ? "Sign in" : "Sign up"
                }
              </Button>
            </form>

            <footer className='flex justify-center items-center gap-1 mt-4'>
              <p>
                {
                  type === "sign-in"
                    ? "Don't have an account ?"
                    : "Already have an account ?"
                }
              </p>
              <Link className='hover:underline font-bold text-lg f' href={type === "sign-in" ? "/sign-up" : "/sign-in"}>
                {type === "sign-in" ? "Sign up" : "Sign in"}
              </Link>
            </footer>
          </Form>
      }
    </section>
  )
}

export default AuthForm