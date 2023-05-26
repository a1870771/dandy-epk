import Sidebar from '@/components/sidebar'
import Head from 'next/head'
import Biobar from '@/components/biobar'

export default function Home() {
  return (
    <>
    <Head>
      <title>bios | The Dandy Buzzkills</title>
    </Head>
    <div className='relative top-8 lg:top-32 m-auto lg:flex w-4/5 lg:w-max font-[kaisei]'>
      <Sidebar />
      <div className='relative top-0 left-0 flex flex-col  gap-y-2'>
        <h1 className='hidden lg:flex text-3xl'>Biographies</h1>
        <Biobar />
        <p className='font-[ubuntu] italic max-w-2xl'>Biobiobiobiosvb bfshdu vfwbe vswebghjvbhyewuv fhsbjfhwsfvbryhewuv fsdjk hgvbhursov ksj hsnvcuipwnib g Biobiobiobiosvb bfshdu vfwbe vswebghjvbhyewuv fhsbjfhwsfvbryhewuv fsdjk hgvbhursov ksj hsnvcuipwnib g Biobiobiobiosvb bfshdu vfwbe vswebghjvbhyewuv fhsbjfhwsfvbryhewuv fsdjk hgvbhursov ksj hsnvcuipwnib g Biobiobiobiosvb bfshdu vfwbe vswebghjvbhyewuv fhsbjfhwsfvbryhewuv fsdjk hgvbhursov ksj hsnvcuipwnib g </p>
      </div>
    </div>
  </>
  )
}