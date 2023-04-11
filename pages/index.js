import Head from "next/head";
import { useState } from "react";
import styles from "../styles/index.module.css";

export default function Home() {
  
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

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/teacher.png" />
      </Head>

      <main className={styles.main}>
        <img src="/teacher.png" className={styles.icon} />
        <h3>選擇你的學科</h3>
        {
            subject.map((item) => {
                return (
                    <div className='text-2xl my-1' key={item.id}>
                        <a href={`/subject/${item.id}`} >
                            <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md'>{item.name}</button>
                        </a>
                    </div>
                )
            })
        }

      </main>
    </div>
  );
}
