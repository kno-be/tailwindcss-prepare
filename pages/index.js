import Head from 'next/head'
import Image from 'next/image'
import styles from '../public/home.module.css'
import Nav from '../components/navbar/navbar';
import Productcard from '../components/product-card/productcard'

export default function Home() {
  return (
 <div className={styles.bg}>
    <div className={styles.page}>
          <Head>
            <title>Tailwind Projects</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>


          <div className={styles.body} >
            
            
            <div className={styles.list}>
              <ul className="text-2xl space-y-11 p-4 my-4">
                <h1 className="font-bold">Tailwind projects:</h1>
                <li className="text-base pt-1">Project: <a href="collapse" className="font-semibold text-blue-800">Cart Collapse</a></li>
                <li className="text-base">Project: <a href="#" className="font-semibold text-red-600">FAQ+ Accordion</a></li>
                <li className="text-base">Project: <a href="#" className="font-semibold text-red-600">Pierce Grid Art</a></li>
                <li className="text-base">Project: <a href="#" className="font-semibold text-red-600">Alerts</a></li>
                <li className="text-base">Project: <a href="blog" className="font-semibold text-blue-800">Random Blog</a></li>
                <li className="text-base">Project: <a href="#" className="font-semibold text-red-600">Github API</a></li>
                

              </ul>
            </div>

            
          </div>
    </div>
    </div>

  )
}
