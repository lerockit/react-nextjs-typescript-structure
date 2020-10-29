import Head from 'next/head'
import React from 'react'

interface Props {
  title: string
}

const SEO: React.FC<Props> = ({ title }) => {
  const completeTitle = `${title} | Gazin`
  return (
    <Head>
      {/* SEO IMPORTANT AND CUSTOM META TAGS */}
      <title>{completeTitle}</title>
    </Head>
  )
}

export default SEO
