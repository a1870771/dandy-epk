import Sidebar from '@/components/sidebar'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
  <>
    <Head>
      <title>pictures | The Dandy Buzzkills</title>
    </Head>
    <div className='relative lg:top-32 top-8 m-auto lg:flex w-4/5 lg:w-max font-[kaisei]'>
      <Sidebar />
      <div className='relative top-0 left-0 flex flex-col  gap-y-2'>
        <h1 className='hidden lg:flex text-3xl mb-4'>Pictures</h1>
        <div className='mt-8 lg:mt-0 grid grid-cols-2 gap-4'>
          <Image src="/002.jpg"
            width={300}
            height={300}
          />
          <Image src="/003.jpg"
            width={300}
            height={300}
            className='row-span-3'
          />
          <Image src="/004.jpg"
            width={300}
            height={300}
          />
          <Image src="/005.jpg"
            width={300}
            height={300}
            className='row-span-2'
          />
          <Image src="/006.jpg"
            width={300}
            height={300}
            className='row-start-4'
          />
          <Image src="/007.jpg"
            width={300}
            height={300}
          />
          <Image src="/008.jpg"
            width={300}
            height={300}
          />
          <Image src="/009.jpg"
            width={300}
            height={300}
            className='relative -top-20'
          />
          <Image src="/010.jpg"
            width={300}
            height={300}
          />
          <Image src="/001.jpg"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  </>
  )
}
