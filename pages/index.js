import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import React, { Component } from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div>
        <h1>only sids</h1>
        <Image
          src="/sid-header.jpg"
          alt="Picture of the sid"
          width={1000}
          height={500}
        />
        <p>10 bucks a pop</p>
      </div>
    </>
  )
}
