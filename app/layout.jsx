import Head from 'next/head'

import { DataProvider, ModalsProvider } from '@/components'

import '@/css/main.css'

export const metadata = {
   title: 'RiK Tasks',
   description: 'Um webapp de to-dos focado em produtividade e organização',
   icons: {
      icon: ['/favicon.ico'],
   },
}

const RootLayout = ({ children }) => {
   return (
      <DataProvider>
      <ModalsProvider>
         <html lang='pt-br'>
            <body>
               {children}
            </body>
         </html>
      </ModalsProvider>
      </DataProvider>
   )
}

export default RootLayout