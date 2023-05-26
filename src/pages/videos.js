import Sidebar from '@/components/sidebar'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Home() {
  return (
  <>
    <Head>
      <title>videos | The Dandy Buzzkills</title>
    </Head>
    <div className='relative lg:top-32 top-8 m-auto lg:flex w-4/5 lg:w-max font-[kaisei]'>
      <Sidebar />
      <div className='relative top-0 left-0 flex flex-col  gap-y-2'>
        <h1 className='hidden lg:flex text-3xl'>Videos</h1>
        <div>
          <div className='max-w-2xl flex flex-col lg:flex-row gap-x-8 font-[ubuntu] py-8'>
          <ReactPlayer url='https://www.youtube.com/watch?v=_N1oRGqPHZ4' width={440} height={248} controls='true'/>
          <ul className='flex flex-col mt-4 lg:mt-0 gap-y-2'>
            <li className='font-[kaisei] text-2xl'>live at Arthur's Art Bar</li>
              <li>Recorded Jan 21st, 2023</li>
              <li>Shot by Spoz Spozington</li>
              <li>Songs: The Moth, Killing Moon, i wanna...</li>
              <li className='flex gap-x-4'>Mp4 file available upon request</li>
            </ul>
          </div>
          <div className='max-w-2xl flex flex-col lg:flex-row gap-x-8 font-[ubuntu] py-8'>
          <ReactPlayer url='https://www.youtube.com/watch?v=yhmhQLDUZnM' width={440} height={248} controls='true'/>
          <ul className='flex flex-col mt-4 lg:mt-0 gap-y-2'>
            <li className='font-[kaisei] text-2xl'>The Moth, live at Unibar</li>
              <li>Recorded Feb 10th, 2023</li>
              <li>Shot by Spoz Spozington</li>
              <li className='flex gap-x-4'>Mp4 file available upon request</li>
            </ul>
          </div> 
        </div>
      </div>
    </div>
  </>
  )
}
