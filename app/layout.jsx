import { DataProvider } from '@/components'

import '@/css/main.css'

export const metadata = {
   title: 'RiK Tasks',
   description: 'Um webapp de to-dos focado em produtividade e organização',
   icons: {
      icon: '/favicon.ico',
   },
}

const RootLayout = ({ children }) => {
   return (
      <DataProvider>
         <html lang='pt-br'>
            <body>
               {children}
            </body>
         </html>
      </DataProvider>
   )
}

export default RootLayout