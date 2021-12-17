import React from 'react'

import ContactUsForm from '../components/ContactUsForm'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

const ContactUsPage: React.FC = () => {
    return (
        <Layout>
            <Seo pageTitle="Contact Us" />
            <ContactUsForm />
        </Layout>
    )
}

export default ContactUsPage
