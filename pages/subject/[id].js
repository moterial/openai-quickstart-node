import { useRouter } from 'next/router';
import Head from "next/head";
import { useState, useEffect, useRef } from 'react';
import styles from "../../styles/index.module.css";

export default function Subject() {
  const router = useRouter();
  const { id } = router.query; 

  const subject = [
    {id: 1, name: '英文'},
    {id: 2, name: '數學'},
    {id: 3, name: 'Physics'},
    {id: 4, name: 'Chemistry'},
    {id: 5, name: 'Biology'},
    {id: 6, name: 'Economics'},
    {id: 7, name: 'Geography'},
    {id: 8, name: '綜合活動'},
    {id: 9, name: 'ICT'}
    ];
  const [subjectTitle , setSubjectTitle] = useState('');

  useEffect(() => {
    if (id) {
      console.log(subject[id-1].name);
      setSubjectTitle(subject[id-1].name);
    }
  }, [id]);

  return (
    <div>
      <Head>
        <title>{subjectTitle}</title>
        <link rel="icon" href="/teacher.png" />
      </Head>

      <main className={styles.main}>
        
        <h3>{subjectTitle}</h3>

          <div class="bg-yellow-300 rounded-lg p-11" style={
            {width: '90%', height: '90vh', paddingBottom: '15vh'}
          }>

            <div class="flex items-center mb-2">
              <img class="w-8 h-8 rounded-full mr-2" src="https://via.placeholder.com/40" alt="Avatar"/>
              <p class="text-gray-900 text-lg font-bold">{subjectTitle}老師</p>
            </div>
            
            <div className='overflow-y-auto h-full'>
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index}>
                  <div className="bg-yellow-200 rounded-lg p-3 py-4">
                    <p className="text-gray-900">Welcome to the website. If you're here, you're likely looking to find random words. Random Word Generator is the perfect tool to help you do this. While this tool isn't a word creator, it is a word generator that will generate random words for a variety of activities or uses. Even better, it allows you to adjust the parameters of the random words to best fit your needs.</p>
                  </div>

                  <div className="mt-2 flex justify-end py-4">
                    <div className="bg-blue-400 rounded-lg p-3 max-w-xs ">
                      <p className="text-white">Sure, I'd be happy to help. What's your question?</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>


            <div class="flex items-center mt-5">
              <input type="text" class="rounded-full py-2 px-4 bg-white text-gray-900 w-full focus:outline-none" placeholder="Type your message..."/>
              <button class="bg-green-500 hover:bg-green-600 ml-4 rounded-full py-2 px-4 text-white">Send</button>
            </div>

          </div>
        
        

      </main>
    </div>
  );
}
    