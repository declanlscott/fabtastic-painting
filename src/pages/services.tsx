import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Banner from '../components/Banner'

const ServicesPage: React.FC = () => {
    return (
        <Layout>
            <Seo pageTitle="Services" />
            <Banner pageTitle="Services" />
        </Layout>
    )
}

export default ServicesPage
