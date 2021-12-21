import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Banner from '../components/Banner'
import ContactUsForm from '../components/ContactUsForm'

const ContactUsPage: React.FC = () => {
    return (
        <Layout>
            <Seo pageTitle="Contact Us" />
            <Banner pageTitle="Contact Us" />
            <ContactUsForm />
        </Layout>
    )
}

export default ContactUsPage
