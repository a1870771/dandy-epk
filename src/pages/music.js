import Sidebar from '@/components/sidebar'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
  <>
    <Head>
      <title>music | The Dandy Buzzkills</title>
    </Head>
    <div className='relative lg:top-32 top-8 m-auto lg:flex w-4/5 lg:w-max font-[kaisei]'>
      <Sidebar />
      <div className='relative top-0 left-0 flex flex-col  gap-y-2'>
        <h1 className='hidden lg:flex text-3xl'>Music</h1>
        <div>
          <div className='max-w-2xl flex flex-col w-max md:flex-row gap-x-8 font-[ubuntu] pr-28 py-8'>
            <Image
            src={'/iwanna.jpg'}
            width={250}
            height={250}
            />
            <ul className='flex flex-col gap-y-2'>
            <li className='font-[kaisei] text-2xl'>i wanna...</li>
              <li>Released: 2022 (Independant)</li>
              <li>Written by Maxwell Adair</li>
              <li>Produced by Maxwell and Hudson Adair</li>
              <li className='flex gap-x-4'>Available on:
                <Image src={'/spotify.png'} width={30} height={30} />
                <Image src={'/yt.png'} width={30} height={30} />
                <Image src={'/drive.png'} width={30} height={30} />
              </li>
            </ul>
          </div>
          <div className='max-w-2xl flex flex-col w-max md:flex-row gap-x-8 font-[ubuntu] pr-28 py-8'>
            <Image
            src={'/themoth.jpg'}
            width={250}
            height={250}
            />
            <ul className='flex flex-col gap-y-2'>
            <li className='font-[kaisei] text-2xl'>The Moth</li>
              <li>Released: 2023 (Independant)</li>
              <li>Written by Maxwell Adair</li>
              <li>Produced by Hudson Adair</li>
              <li className='flex gap-x-4'>Available on:
                <Image src={'/spotify.png'} width={30} height={30} />
                <Image src={'/yt.png'} width={30} height={30} />
                <Image src={'/drive.png'} width={30} height={30} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
