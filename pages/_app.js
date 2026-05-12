import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <div className="noise-overlay" />
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}
