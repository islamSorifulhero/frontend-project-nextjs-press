import { Button } from '@/components/ui/button'
import React from 'react'

export default async function HomePage() {
  return (
    <div>
      Hello, News.js!

      <Button size={"xs"} variant={"destructive"}>Click Me</Button>
    </div>
  )
}