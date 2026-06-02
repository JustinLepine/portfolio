import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

interface LayoutChildren {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutChildren) {
  return (
    <div className='layout'>
      <header className='layout_header'>
        <Nav />
      </header>
      <main>
        { children }
      </main>
      <Footer />
    </div>
  )
}
