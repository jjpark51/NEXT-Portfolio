import React from 'react'
import Tiger from './Tiger';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import Head from 'next/head';

interface MyComponentProps {
    children: React.ReactNode;
  }

const Layout = ({children}: MyComponentProps) => {
  return (
    <div>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dongle&family=Sunflower:wght@700&family=Ubuntu:wght@700&display=swap" rel="stylesheet" />
        </Head>
      <Tiger />
      <About />
      <Skills />
      <Projects />
      <Footer />
      {children}
    </div>
  )
}

export default Layout
