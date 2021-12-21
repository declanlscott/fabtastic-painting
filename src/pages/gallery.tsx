import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Banner from '../components/Banner'

const GalleryPage: React.FC = () => {
    return (
        <Layout>
            <Seo pageTitle="Gallery" />
            <Banner pageTitle='Gallery' />
        </Layout>
    )
}

export default GalleryPage
