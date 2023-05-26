import Sidebar from '@/components/sidebar'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
  <>
    <Head>
      <title>contact | The Dandy Buzzkills</title>
    </Head>
    <div className='relative top-32 m-auto flex w-max font-[kaisei]'>
      <Sidebar />
      <div className='relative top-0 left-0 flex flex-col  gap-y-2'>
        <h1 className='text-3xl'>Contact Us</h1>
        <br/>
        <p className='font-[ubuntu] max-w-2xl'>If you have any questions, answers, enquiries, inquiries or recipes for various baked goods which 
        you think we should be privvy to, please feel free to reach out via any of the following routes:</p>
        
        <div className='pt-10 flex flex-row gap-8'>
          <Image src='/yt.png'
              width={45}
              height={45}/>
          <Image src='/ig.png'
              width={45}
              height={45}/>
          <Image src='/email.png'
              width={45}
              height={45}/>
        </div>
      </div>
    </div>
  </>
  )
}
