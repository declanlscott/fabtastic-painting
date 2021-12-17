import React from "react"

import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { Link, graphql, PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import ContactUsForm from "../components/ContactUsForm"

import { FaBrush, FaPaintRoller, FaPaintBrush, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import { HiOutlineHome, HiHome } from "react-icons/hi"
import { GiWaterSplash } from "react-icons/gi"

import { IndexQuery } from "../../graphql-types"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import SwiperCore, {
  Autoplay, Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper'
import FadeIn from "../components/FadeIn"

const IndexPage: React.FC<PageProps<IndexQuery>> = ({ data }) => {
  SwiperCore.use([Autoplay, Navigation, Pagination, Mousewheel, Keyboard]);

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
      <div className="inline-block overflow-hidden relative w-full bg-white bg-opacity-80">
        <StaticImage
          className="absolute h-full w-full z-neg"
          src="../images/about-us.webp"
          alt=""
          placeholder="none"
        />
        <div className="flex-col md:px-8 px-4 md:my-20 my-10">
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
                <Link to="/about-us" className="px-4 py-2 text-lg text-secondary font-bold bg-primary rounded-full hover:bg-primary-light transition duration-200">READ MORE</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Services */}
      <FadeIn>
        <div className="md:flex justify-center my-8 md:mt-32 md:mb-16 mx-8">
          <div className="flex items-center justify-center">
            <StaticImage
            className=""
            src="../images/services.webp"
            alt="Services"
            placeholder="none"
            width={480}
            height={600}
          />
          </div>
          <div className="flex items-center justify-center">
            <div className="flex-col text-secondary md:ml-16 mt-10 md:mt-0">
              <h3 className="flex font-medium tracking-widest mb-2">HIGH QUALITY &amp; AFFORDABLE</h3>
              <h2 className="flex font-semibold text-4xl sm:text-5xl mb-7">SERVICES WE PROVIDE</h2>
              <p className="flex font-light text-base max-w-lg mb-10">
                We pride ourselves on our service, starting from your personal consultation all the way to the final walk-through.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-4">
                <div className="flex-col">
                  <div className="flex items-center font-lg font-medium pb-8">
                    <FaBrush className="w-8 h-8 mr-4" />
                    Residential Painting
                  </div>
                  <div className="flex items-center font-lg font-medium pb-8">
                    <HiOutlineHome className="w-8 h-8 mr-4" />
                    Interior Painting
                  </div>
                  <div className="flex items-center font-lg font-medium pb-8">
                    <GiWaterSplash className="w-8 h-8 mr-4" />
                    Power Washing
                  </div>
                </div>
                <div className="flex-col">
                  <div className="flex items-center font-lg font-medium pb-8">
                    <FaPaintRoller className="w-8 h-8 mr-4" />
                    Commerical Painting
                  </div>
                  <div className="flex items-center font-lg font-medium pb-8">
                    <HiHome className="w-8 h-8 mr-4" />
                    Exterior Painting
                  </div>
                  <div className="flex items-center font-lg font-medium pb-8">
                    <FaPaintBrush className="w-8 h-8 mr-4" />
                    Staining
                  </div>
                </div>
              </div>
              <div className="flex mt-4">
                <div className="mx-auto">
                  <Link to="/services" className="mx-auto px-4 py-2 text-lg font-bold bg-primary rounded-full hover:bg-primary-light transition duration-200">
                    AND MORE!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Gallery */}
      <FadeIn>
        <div className="md:flex justify-center my-8 md:my-16 mx-8">
          <div className="flex items-center justify-center">
            <div className="flex-col text-secondary md:mr-16">
              <h2 className="flex justify-center items-center font-semibold text-4xl sm:text-5xl mb-7">WORK &amp; PROJECTS</h2>
              <p className="font-light text-base max-w-lg mb-10">
                Providing Fabtastic service to the Cedar Rapids &amp; Iowa City Corridor in Eastern Iowa since 2018. 
                Follow us on <a className="text-tertiary hover:text-tertiary-dark transition duration-200 underline" href="https://www.facebook.com/FabtasticPainting/" target="_blank">Facebook</a> &amp;&nbsp;
                <a className="text-tertiary hover:text-tertiary-dark transition duration-200 underline" href="https://www.instagram.com/fabtastic_paintingcr/" target="_blank">Instagram</a> to see more!
              </p>
              <div className="flex mt-4">
                <div className="mx-auto">
                  <Link to="/gallery" className="mx-auto px-4 py-2 text-lg font-bold bg-primary rounded-full hover:bg-primary-light transition duration-200">
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-10 md:mt-0">
            <Swiper
              id="swiper-color"
              cssMode={true}
              autoplay={{
                "delay": 5000,
              }}
              navigation={true}
              pagination={{"clickable": true}}
              loop={true}
              mousewheel={true}
              keyboard={true}
              className="max-w-md rounded-3xl"
            >
              {data.galleryPhotos.edges.map(image => (
                <SwiperSlide key={image.node.id}>
                  <GatsbyImage
                    image={image.node.childImageSharp?.gatsbyImageData}
                    alt="Gallery Photos"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </FadeIn>

      {/* Testimonials */}
      <FadeIn>
        <div className="my-8 md:my-16 mx-8">
          <div className="mx-auto max-w-7xl text-secondary">
            <div className="flex justify-between">
              <div className="flex-col">
                <h3 className="flex font-medium tracking-widest mb-2">WHAT PEOPLE ARE SAYING</h3>
                <h2 className="flex font-semibold text-4xl sm:text-5xl mb-7">TESTIMONIALS</h2>
                <p className="flex font-light text-base max-w-lg mb-10">
                  Don't believe us? Check out our customer write-ups and learn how we went above and beyond to make their spaces Fabtastic.
                </p>
              </div>
              <div className="hidden md:flex text-primary text-opacity-50 gap-16">
                <FaQuoteLeft className="w-24 h-24 mt-0 my-auto"/>
                <FaQuoteRight className="w-24 h-24 mb-5 my-auto" />
              </div>
            </div>
            <Swiper
              id="swiper-color"
              cssMode={true}
              autoplay={{
                "delay": 15000,
              }}
              pagination={{"clickable": true}}
              loop={true}
              mousewheel={true}
              keyboard={true}
            >
              {data.testimonials.edges.map(testimonial => (
                <SwiperSlide key={testimonial.node.id} className="my-auto">
                  <div className="max-w-4xl mx-auto text-center">
                    <p className="font-base font-light italic mb-6">"{testimonial.node.frontmatter?.content}"</p>
                    <p className="font-base font-medium">{testimonial.node.frontmatter?.author}</p>
                  </div>
                  <div className="h-10" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
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
    galleryPhotos: allFile(
      filter: {relativeDirectory: {eq: "gallery/featured"}, extension: {regex: "/(jpg)|(jpeg)|(png)/"}}
    ) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, AVIF]
              placeholder: NONE
              transformOptions: {fit: COVER, cropFocus: CENTER}
              width: 448
              height: 448
            )
          }
        }
      }
    }

    testimonials: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            author
            content
          }
          id
        }
      }
    }
  }
`