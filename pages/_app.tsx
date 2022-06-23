<<<<<<< HEAD
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
=======
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SSRProvider } from "@react-aria/ssr";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
        <Component {...pageProps} />
    </SSRProvider>
  )
}

export default MyApp
>>>>>>> cad058d11a4b8170c7e7a444c10c603a899fa007
