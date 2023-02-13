import Animation from '/components/home/animation';
import Link from 'next/link';

export default function Hero(){
    return(   
      <>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Animation/>
          </div>      
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font text-3xl mb-4 font-bold text-gray-900">안녕하세요! <br/>노력하는 개발자 백미정 입니다😊</h1>
            <p className="mb-8 leading-relaxed w-5/6">프로그래밍에 관심을 갖게 되어 국비지원으로 6개월 직업훈련과정을 수료하였습니다.<br/>
            처음 접하는 분야라서 많은 어려움이 있었지만 문제가 해결되면 답답했던 마음이 뿌듯해졌습니다.<br/> 
            배운 내용을 활용하여 끊임없이 도전하고 부족한 부분은 채워나가며 꾸준히 성장하도록 노력하겠습니다.</p>
            <div className="flex justify-center">
            <Link Link href="/projects" legacyBehavior>
              <a className="inline-flex text-white dark:text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">프로젝트 보러가기</a>
            </Link>
            <Link Link href="https://somber-shoe-d28.notion.site/09b9e0fd44a348b7bd422a14d3e9a0bc" legacyBehavior>
              <a target='_blank' className="ml-4 inline-flex text-white dark:text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">공부기록 보러가기</a>
              </Link>
            </div>
          </div>      
      </>
    );
}