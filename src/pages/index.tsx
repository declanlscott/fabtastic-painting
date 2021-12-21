import React from "react"

import { StaticImage, getImage } from "gatsby-plugin-image"
import BackgroundImage from 'gatsby-background-image'
import { convertToBgImage } from 'gbimage-bridge'
import { Link, graphql, PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Gallery from "../components/Gallery"
import Testimonials from "../components/Testimonials"
import ContactUsForm from "../components/ContactUsForm"
import FadeIn from "../components/FadeIn"

import { IndexQuery } from "../../graphql-types"

const IndexPage: React.FC<PageProps<IndexQuery>> = ({ data }) => {
  const aboutUsImage = getImage(data.aboutUsBgImage?.childImageSharp?.gatsbyImageData);

  const aboutUsBgImage = convertToBgImage(aboutUsImage);

  return (
    <Layout>

      <Seo pageTitle="Home" />

      <Hero />

      {/* Divider */}
      <div className="bg-white flex">
        <p className="flex items-center text-secondary font-medium lg:text-4xl md:text-3xl text-2xl text-center mx-auto my-10 px-4">
          Locally Owned &amp; Operated. Serving the Corridor &amp; Eastern Iowa.
        </p>
      </div>

      {/* About us */}
      <div className="inline-block w-full bg-white bg-opacity-80">
        <BackgroundImage
          {...aboutUsBgImage}
          preserveStackingContext
        >
          <div className="flex-col md:px-8 px-4 md:py-20 py-10">
            <FadeIn>
              <div className="grid lg:w-80 md:w-64 w-56 flex mx-auto">
                <StaticImage
                  className="row-start-1 col-start-1"
                  src="../images/paint-brush-stroke.webp"
                  alt=""
                  placeholder="none"
                />
                <h2 className="row-start-1 col-start-1 relative grid lg:text-5xl md:text-4xl text-3xl font-semibold text-secondary text-center items-center">ABOUT US</h2>
              </div>
            </FadeIn>
            <FadeIn><hr className="border-secondary w-48 mx-auto my-7" /></FadeIn>
            <FadeIn>
              <p className="text-center lg:max-w-4xl md:text-base text-sm text-light text-secondary mx-auto">
                Fabtastic Painting is a woman-owned company founded in 2018 with the goal of providing high-quality and affordable painting services to the Corridor & Eastern Iowa. 
                With over 35 years combined experience in the construction industry, we decided to focus and specialize in the one area we enjoy and take pride in...painting! 
                Call us today about your next painting project, we look forward to working with you to make it <i>Fabtastic</i>!
              </p>
            </FadeIn>
            <FadeIn>
              <div className="flex">
                <div className="mx-auto mt-10 md:mt-20 mb-4">
                  <Link to="/about-us" className="px-4 py-2 text-lg text-secondary font-bold bg-primary border border-tertiary rounded-full hover:bg-primary-light transition duration-200">READ MORE</Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </BackgroundImage>
      </div>

      {/* Services */}
      <FadeIn>
        <Services />
      </FadeIn>

      {/* Gallery */}
      <FadeIn>
        <Gallery />
      </FadeIn>

      {/* Testimonials */}
      <FadeIn>
        <Testimonials />
      </FadeIn>

      {/* Request a quote form */}
      <FadeIn>
        <div className="my-8 md:mt-16 md:mb-32 mx-8">
          <h2 className="flex sm:justify-center font-semibold text-4xl sm:text-5xl text-secondary mb-7">CONTACT US</h2>
          <p className="font-light text-base text-secondary sm:text-center max-w-xl mx-auto mb-10">
            Need our professional services for your home or business? Fill out this form to contact us today about our competitive rates and satisfaction guarantee!
          </p>
          <div className="flex justify-center text-secondary">
            <ContactUsForm />
          </div>
        </div>
      </FadeIn>
      
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql `
  query Index {
    aboutUsBgImage: file(relativePath: {eq: "about-us.webp"}) {
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP, AVIF],
          placeholder: NONE,
          transformOptions: {cropFocus: CENTER, fit: COVER}
        )
      }
    }
  }
`
