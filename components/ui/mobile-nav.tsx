"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/libs/utils"
import { sidebarLinks } from "@/constants"

interface Props {
  user: User
}

const MobileNav = (props: Props) => {
  const pathname = usePathname();

  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Image
            src="/svg/hamburger.svg"
            alt="logo"
            width={32}
            height={32}
            className='rounded-full size-[32px] max-xl:size-8'
          />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle className="mb-2">Bank Tracking</SheetTitle>
          <SheetDescription>
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
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav