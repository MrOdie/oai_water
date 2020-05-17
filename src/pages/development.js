import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ToggleComponent from '../components/Toggle/ToggleComponent';

import devToggle from '../assets/data/developmentToggleData.yaml';

const toggleTitles = devToggle.titles
const toggleBodies = devToggle.bodies

const development = () => {
    return (
      <Layout page="development">
        <SEO title="Development" />
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="col">

                <h5 className="h2">Development of Groundwater Resources</h5>

                <p>The development of groundwater resources depends on several factors among them, the intended use of the groundwater, the volume needed, the quality required and any permitting issues that may be required. These factors guide the planning and development of groundwater resources. Whether the groundwater produced is needed for irrigation purposes, industrial supply purposes or drinking water purposes, each case being unique, development options are similar.</p>

                <p>In this section, we will look at OAI's groundwater development projects for industrial, irrigation and public supply purposes. Included in these options is the development of single well projects, multi-well projects, single aquifer projects and multi-aquifer projects. Each of these cases are linked to on the tabs at the top of the page.</p>

                <p>Mobile County Water, Sewer and Fire Protection Authority's Boykin Road Wells is the first well sited by OAI for the water system. The hydrogeology was completed by OAI's Dan O'Donnell and was included in MCW's Wellhead Protection Plan Dan completed for the system. The well tested out at 1,900 gpm and was permitted for 1,000 gpm. Ten years on the Boykin Road Well continues to be the system's best well both production and water wise.</p>

              </div>
            </div>
          </div>
        </section>
        <section className="sub__single">
          <div className="container">
            <div className="row">
              <div className="col">
                <ToggleComponent titles={toggleTitles} bodies={toggleBodies}/>
              </div>
            </div>
          </div>
        </section>
        <section className="sub__single">
          <div className="container">
            <div className="row">
              <div className="col">
                <h5 className="h2">Modeling</h5>

                <p>O'Donnell &amp; Associates, Inc. utilizes computer simulations (modeling) of groundwater flow to meet regulatory requirements of public, industrial and irrigation supply wells. Our models are specifically tailored to address our clients concerns and are no more complex than necessary. Our experience includes development of regional, sub-region and local models using 2-D or 3-D model codes. Our experince with modeling includes:</p>

                <ul className="list">
                  <li>Permitting public supply wells</li>
                  <li>Wellhead protection delineations</li>
                  <li>Source water assessment delineation</li>
                  <li>Capture zone analysis</li>
                  <li>Contaminant migration studies</li>
                  <li>Wellfield feasibility analysis</li>
                  <li>Wellfield design</li>
                  <li>Saltwater intrusion studies</li>
                  <li>Well interference studies</li>
                </ul>

                <p>Our personnel participated in the beta testing program for the Environmental Protection Agency's analytic element models CZAEM and WhAEM. OAI has experience with the following groundwater flow modeling programs: PMWIN (Modflow), GFLOW and GFLOW 2000, CZAEM, WhAEM, Visual Bluebird, BioScreen (a natural attenuation model) and Visual Modflow.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="sub__single">
          <div className="container">
            <div className="row">
              <div className="col">
                <h5 className="h2">Groundwater Resources</h5>

                <p>OAI has the training, knowledge, technical skill and experience required to help you effectively and efficiently manage, protect, expand or monitor your groundwater resource. OAI maintains professional registrations in Alabama, Arkansas, Florida, Kentucky, Louisiana and Mississippi. A summary of OAI's groundwater development projects can be reviewed through the tabs at the top of this page. A summary of our overall services include:</p>
                <p><strong>Water Supply</strong></p>

                <p>The days of $25,000 public supply wells have gone the way of the nickle candy bar. OAI has the experience and ability to level the playing field to ensure your next well will be completed as efficiently as possible. All aspects of groundwater resources exploration, development and management are critical to the success of your groundwater supply. OAI has extensive experience with research, well analysis, wellhead/sourcewater protection, vulnerability analysis, emergency response planning, Management, wellfield design (multi-well and multi-aquifer) and Wellsite geology (mudlogging). The earlier OAI is involved, the better your chances of success become.</p>

                <p><strong>Aquifer Testing</strong></p>
                <p>Constant rate, Step rate, 24/6 testing, Litigation support issues and Production optimization.</p>

                <p><strong>Modeling</strong></p>
                <p>Regional, Sub-regional and Local Scale, 2-D modeling (analytic element method), 3-D modeling (Modflow), Capture zone analysis, Wellhead/sourcewater protection delineations.</p>

                <p><strong>Wellfields</strong></p>
                <p>Wellfields can be an economical and efficient means to develop water resources, See how OAI has, through research, planning, testing and permitting, become the experienced leader in wellfield development for both industrial and public supply in the central Gulf Coast area.</p>

                <p><strong>Permitting</strong></p>
                <p>Groundwater extraction (Coastal zone permitting required of wells all producing >50 gpm), Underground injection control (UIC), Landfills (Siting or Expansion), Confined Animal Feeding Operations (CAFO) and NPDES stormwater issues.</p>

                <p><strong>Training (On-Site)</strong></p>
                <p>Custom tailored to teach Board members, superintendants and others the groundwater basics critical to managing their resources through 1-on-1 sessions or through classroom instruction.</p>

              </div>
            </div>
          </div>
        </section>
      </Layout>
    )

}

export default development;