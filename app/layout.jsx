import { DataProvider, ModalsProvider, ThemeProvider } from '@/contexts'

import '@/css/main.css'

export const metadata = {
   title: 'Timenize',
   description: 'Um webapp focado em produtividade e organização',
   icons: {
      icon: ['/favicon.ico'],
   },
}

const RootLayout = ({ children }) => {
   return (
      <ThemeProvider>
      <DataProvider>
      <ModalsProvider>
         <html lang='pt-br'>
            <body>
               {children}
            </body>
         </html>
      </ModalsProvider>
      </DataProvider>
      </ThemeProvider>
   )
}

export default RootLayout