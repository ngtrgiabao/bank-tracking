import React from 'react'
import { Control, FieldPath } from "react-hook-form";
import { z } from 'zod';
import isEqual from 'react-fast-compare';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../components/ui/form";
import { Input } from '../../../components/ui/input';
import { authFormSchema } from '@/lib/utils';

const formSchema = authFormSchema("sign-up");

interface Props {
  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>,
  label: string,
  placeholder: string,
}

const CustomInput = (props: Props) => {
  const { control, name, label, placeholder } = props

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <div className='flex flex-col w-full'>
            <FormControl>
              <Input placeholder={placeholder} type={name === "password" ? "password" : "string"} className='input-class border border-slate-400' {...field} />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default React.memo(CustomInput, isEqual)