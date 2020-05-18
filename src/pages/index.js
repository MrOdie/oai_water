import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeanpub } from "@fortawesome/free-brands-svg-icons"
import { faWrench } from "@fortawesome/free-solid-svg-icons"
import { faTasks } from "@fortawesome/free-solid-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout page="home">
    <SEO title="Home" />
    <section className="intro">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center text-white">O'Donnell &amp; Associates, Inc.</h1>
            <hr />
            <h3 className="text-center text-white text-uppercase">Putting hyrdogeology to work for you</h3>
          </div>
        </div>
      </div>
    </section>
    <section className="sub__single">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Welcome to O'Donnell &amp; Associates, Inc.</h3>

            <p>OAI is a woman-owned hydrogeologic consulting firm located in Mobile, Alabama (USA) that specializes in the research, exploration, development and management of groundwater resources. Through the Grace of God, hard work and quality services, OAI has grown to become the leading provider of professional hydrogeologic services to water systems (50+), engineering firms (23), industries (18), businesses (9) and irrigators (4) across the central Gulf Coast Region. OAI's unique combination of petroleum exploration experience coupled with formal hydrogeologic training sets us apart from others in the crowded hydrogeologic consulting community. With professional geologic experience dating from 1979, OAI welcomes you to our website and we look forward to addressing your water resource concerns with proven, cost effective solutions.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="grid">
      <Link className="grid-item unus" to="/research">
        <div className="inner-item">
          <FontAwesomeIcon className="fa-3x" icon={faLeanpub} />
          <h3>Research</h3>
        </div>
      </Link>
      <Link className="grid-item duo" to="/development">
        <div className="inner-item">
          <FontAwesomeIcon className="fa-3x" icon={faWrench} />
          <h3>Development</h3>
        </div>
      </Link>
      <Link className="grid-item tres" to="/management">
        <div className="inner-item">
          <FontAwesomeIcon className="fa-3x" icon={faTasks} />
          <h3>Management</h3>
        </div>
      </Link>
      <Link className="grid-item quot" to="/exploration">
        <div className="inner-item">
          <FontAwesomeIcon className="fa-3x" icon={faSearch} />
          <h3>Exploration</h3>
        </div>
      </Link>
    </section>
  </Layout>
)

export default IndexPage
