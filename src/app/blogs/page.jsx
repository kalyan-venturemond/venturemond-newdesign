import React from 'react'
import Hero from './Hero'
import BlogsFraming from './BlogsFraming'
import CaseStories from './CaseStories'
import FounderNotes from './FounderNotes'
import BehindTheBuilds from './BehindTheBuilds'
import VentureStories from './VentureStories'
import BlogCTA from './BlogCTA'

const Blogs = () => {
  return (
    <div>
      <Hero />
      <BlogsFraming />
      <CaseStories />
      <FounderNotes />
      <BehindTheBuilds />
      <VentureStories />
      <BlogCTA />
    </div>
  )
}

export default Blogs