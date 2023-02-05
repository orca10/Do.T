import '@/styles/globals.css'
import Head from 'next/head'
import LayoutWrapper from 'components/LayoutWrapper'

export default function App({ Component, pageProps }) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  )
}
