import Layout from '@/components/layout';
import Head from 'next/head'
import {FaBirthdayCake,FaUserAlt,FaMapMarkedAlt,FaPhoneAlt,FaRegEnvelope} from 'react-icons/fa'
export default function Call(){
    return(
        <Layout>
            <Head>
            <title>포트폴리오</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/heart .ico" />
            </Head>
                  
            <h1 className="text-center text-green-700 text-4xl font-burtons font-bold ">
               ABOUT ME
            </h1>

            <section className="text-gray-600 body-font flex justify-center items-center ">

                <div className='flex-1 max-w-6xl mx-auto p-16'>

                  <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 p-4 md:gap-8'>

                    <div className='project-card p-6 pr-6 bg-green-200 dark:bg-green-300 border-1-8 border-transparent rounded-md shadow-md space-y-2'>
                      <div className='flex '>
                        <FaUserAlt className='w-7 h-7'/>
                        <h2 className='text-xl ml-5 font-bold leading-6 dark:text-gray-600'>이름</h2>
                      </div>
                      <p className='ml-12 text-base font-medium text-gray-800 dark:text-gray-600 '>백미정</p>
                    </div>

                    <div className='project-card p-6 pr-6 bg-green-200 dark:bg-green-300 border-1-8 border-transparent rounded-md shadow-md space-y-2'>
                      <div className='flex'>
                        <FaBirthdayCake className='w-7 h-7'/>
                        <h2 className='text-xl ml-5 font-bold leading-6 dark:text-gray-600'>생년월일</h2>
                      </div>
                      <p className='ml-12 text-base font-medium text-gray-800 dark:text-gray-600'>95.03.03</p>
                    </div>

                    <div className='project-card p-6 pr-6 bg-green-200 dark:bg-green-300 border-1-8 border-transparent rounded-md shadow-md space-y-2'>
                      <div className='flex'>
                        <FaMapMarkedAlt className='w-7 h-7'/>
                        <h2 className='text-xl ml-5 font-bold leading-6 dark:text-gray-600'>주소</h2>
                      </div>
                      <p className='ml-12 text-base font-medium text-gray-800 dark:text-gray-600'>대구광역시 동구</p>
                    </div>

                    <div className='project-card p-6 pr-6 bg-green-200 dark:bg-green-300 border-1-8 border-transparent rounded-md shadow-md space-y-2 dark:text-gray-600'>
                      <div className='flex'>
                        <FaPhoneAlt className='w-7 h-7'/>
                        <h2 className='text-xl ml-5 font-bold leading-6 dark:text-gray-600'>연락처</h2>
                      </div>
                      <p className='ml-12 text-base font-medium text-gray-800 dark:text-gray-600'>010-6245-9185</p>
                    </div>

                    <div className='project-card p-6 pr-6 bg-green-200 dark:bg-green-300 border-1-8 border-transparent rounded-md shadow-md space-y-2'>
                      <div className='flex'>
                        <FaRegEnvelope className='w-7 h-7'/>
                        <h2 className='text-xl ml-5 font-bold leading-6 dark:text-gray-600'>이메일</h2>
                      </div>
                      <p className='ml-12 text-base font-medium text-gray-800 dark:text-gray-600'>moneylove99@naver.com</p>
                    </div>
                    
                  </div>

                </div>

            </section>
        </Layout>
    );
}