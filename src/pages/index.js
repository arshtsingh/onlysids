import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1>only sids</h1>
      <div>
        <Image
          src="/sid-header.jpg"
          alt="Picture of the sid"
          width={1000}
          height={500}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-6/12 sm:w-4/12 px-4">
          <img src="./public/sid-face.JPG" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
        </div>
      </div>
    </>
  )
}
