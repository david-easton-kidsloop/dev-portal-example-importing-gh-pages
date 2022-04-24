
import React, { ReactNode } from 'react'
import Header from '../shared/Header'
import Footer from "../shared/Footer"

interface Props {
    children: ReactNode;
}

const Base = (props: Props) => {
    const {
        children
    } = props;
  return (
      <>
      <Header />
      <main>
          { children }
      </main>
      <Footer />
      </>
  )
}

export default Base
