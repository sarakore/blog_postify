import React from 'react'
import MainLayout from '../components/MainLayout'
import Articles from './container/Article'
import CTA from './container/CTA'

const HomePage = () => {
  return (
    <MainLayout>

      <Articles/>
      <CTA/>
        
    </MainLayout>
  )
}

export default HomePage
