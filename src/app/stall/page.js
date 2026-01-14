'use client'
import GoogleFormBanner from '@/Components/GoogleFormBanner'
import GrandExhibition from '@/Components/GrandExhibition'
import Head from '@/Components/Head'
const fairStall = "/images/gallary/1.webp"
import React from 'react'

const page = () => {
  return (
    <div>
      <Head title={"Stall Details"} desc={"Discover Every Stall"} bg={fairStall} />
      <GoogleFormBanner />
      <GrandExhibition />
    </div>
  )
}

export default page
