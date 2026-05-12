import Head from 'next/head'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Harshit Sharma — MERN Stack Developer</title>
        <meta
          name="description"
          content="Harshit Sharma is a MERN Stack Developer specialising in full-stack web applications with React.js, Node.js, Express.js, and MongoDB."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Harshit Sharma — MERN Stack Developer" />
        <meta
          property="og:description"
          content="Portfolio of Harshit Sharma — building modern full-stack web applications."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-bg text-text">
        <Navbar />
        <Hero />

        {/* Section divider */}
        <div className="hr-accent mx-6 md:mx-20" />

        <About />

        <div className="hr-accent mx-6 md:mx-20" />

        <Skills />

        <div className="hr-accent mx-6 md:mx-20" />

        <Projects />

        <div className="hr-accent mx-6 md:mx-20" />

        <Contact />

        <Footer />
      </main>
    </motion.div>
  )
}
