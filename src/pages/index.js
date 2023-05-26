import Sidebar from '@/components/sidebar'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
  <>
    <Head>
      <title>home | The Dandy Buzzkills</title>
    </Head>
    <div className='relative lg:top-32 top-8 m-auto lg:flex w-4/5 lg:w-max font-[kaisei]'>
      <Sidebar />
      <div className='relative top-0 left-0 flex flex-col  gap-y-2'>
        <h1 className='text-3xl mb-4'>The Dandy Buzzkills</h1>
        <Image
          src={'/dandybuzzkillsseeoutsideforfirsttime.jpg'}
          width={2500 / 4} 
          height={1663 / 4}
          className='mb-8 w-fit rounded-xl'
          />
          <p className='font-[ubuntu] italic max-w-2xl'>"I have a genuine and immovable 
          feeling that these guys were raised in isolated captivity, with the records of 
          The Birthday Party, Joy Division and The B-52's" - Kerosene
        </p>
        <p className='font-[ubuntu] max-w-2xl'>The Dandy Buzzkils deliver 
          music from a retro era with a modern sensibility and sumptuous performance 
          you will not forget. Always keeping the audience on their toes by teaching them
          the hard way to expect the unexpected, they are an act who stubbornly refuse 
          failure to deliver.
        </p>
      </div>
    </div>
  </>
  )
}
