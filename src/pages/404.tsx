import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import FadeIn from "../components/FadeIn"

import PaintSpill from "../images/svg/paint-spill.svg"

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <Seo pageTitle="404" />
      <FadeIn>
        <div className="flex justify-center">
          <div className="max-w-2xl">
            <div className="flex mb-6 mt-10">
              <PaintSpill className="hidden md:block md:w-1/2 md:pr-8" />
              <div className="w-full md:w-1/2 md:pl-8 flex items-center">
                <div className="mx-auto">
                  <h1 className="flex justify-center text-8xl font-extrabold">404</h1>
                  <h2 className="flex justify-center text-3xl font-extrabold">Page Not Found.</h2>
                </div>
              </div>
            </div>
            <div className="flex justify-center px-8">
              <p className="text-center">
                Oops, it appears the page you were looking for doesn't exist... Don't worry though, everything is going to be <i>fabtastic</i> after you click the button below!
              </p>
            </div>
            <div className="flex justify-center">
              <Link to="/" className="px-4 py-2 text-lg text-secondary font-bold bg-primary rounded-full hover:bg-primary-light transition duration-200 mt-10 mb-24">CLICK ME!</Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </Layout>
  )
}

export default NotFoundPage
