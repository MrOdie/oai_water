import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Blockquote from '../components/modules/blockquote';
import ToggleComponent from '../components/Toggle/ToggleComponent';

import mgmtToggle from '../assets/data/managementToggleData.yaml';
import mgmtAccordion from '../assets/data/managementAccordionData.yaml';
import AccordionComponent from '../components/Accordion/AccordionComponent';

const toggleTitles = mgmtToggle.titles;
const toggleBodies = mgmtToggle.bodies;

const accordionLabels = mgmtAccordion.labels;

const management = () => {
  return (
    <Layout page="management">
      <SEO title="Management" />
      <section className="intro">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className="h2">Management of Groundwater Resources</h5>

              <p>The management of groundwater resources is more than just the maintenance and repair of your system's infrastructure. While that is critical to a healthy water system, equally important to the health of your system is sourcewater protection, sustainability, a supportive rate structure and asset management that is pro-active rather than reactive with respect to your infrastructure. At OAI, we work with our clients in each of these areas to ensure long lasting delivery of their water supply.</p>
              <AccordionComponent labels={accordionLabels}></AccordionComponent>
            </div>
          </div>
        </div>
      </section>
      <section className="sub__single">
        <div className="container">
          <div className="row">
            <div className="col">

              <h5 className="h2">Sourcewater Assessment Plans</h5>

              <p>OAI has completed Sourcewater Assessment Plans* for public water systems in the following Alabama Counties:</p>

              <ul className="list double">
                <li>Baldwin (27)</li>
                <li>Choctaw (2)</li>
                <li>Conechuh (1)</li>
                <li>Escambia (1)</li>
                <li>Marengo (1)</li>
                <li>Mobile (53)</li>
                <li>Monroe (5)</li>
                <li>Sumter (1)</li>
                <li>Washington (12)</li>
              </ul>

              <p><em>*includes Wellhead Protection Projects</em></p>

              <p>Beginning with the public comment period on the proposed wellhead protection regulations through the present day regulations governing sourcewater protection, OAI's Dan O'Donnell has been at the forefront of shaping and meeting the codified regulations. He saw these regulations not just as another regulatory burden passed on to water systems but rather as an opportunity to define the hydrogeology of the system's groundwater resource. Understanding the hydrogeology of the system's groundwater resource allowed the system to properly allocate time, effort and financial resources toward protecting the resource (a sourcewater issue) and, equally important, to use the hydrogeology to efficiently develop additional water supply to meet demand.</p>

              <p>OAI's wellhead and sourcewater protection efforts focused heavily on understanding the aquifer through site-specific cross sections rather than regional generalizations. For those systems's that selected this approach, the dividends were tremendous as they began the process of developing their next well. Using the hydrogeology developed under the wellhead/sourcewater projects, OAI moved to eliminate dry holes, test wells and observation wells on new well projects, worked to reduce piping runs and treatment costs by taking advantage of favorable aquifer hydraulics that allowed multiple aquifer or well development at the same sites and, in some cases, a reduction in or elimination of land purchase costs for the new wellsites. Each of these reductions came with significant savings to the system through a reduction in exploration costs, well in excess of they money spent on the wellhead/sourcewater assessment effort.</p>

              <p>If your system is in need of sourcewater assessment services, you have two options. One, treat it a just another regulation with little or no direct benefit to you or 2) call OAI and learn how you can use this effort to not only meet the regulatory requirement but, more importantly, help your system develop your water supply in a more efficient manner now and down the road.</p>

            </div>
          </div>
        </div>
      </section>
      <section className="sub__single">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className="h2">Groundwater Monitoring</h5>
              <Blockquote>Ground Water is among the Nation's most precious resources. Measurements of water levels in wells provide the most fundamental indicator of the status of this resource and are critical to meaningful evaluations of the quantity and quality of ground water and its interaction with surface water. Water-level measurements are made by many Federal, State, and local agencies. It is the intent of this report to high-light the importance of measurements of ground-water levels and to foster a more comprehensive and systematic approach to the long-term collection of these essential data. Through such mutual efforts, the Nation will be better positioned in coming decades to make wise use of its extensive ground-water resources.</Blockquote>

              <p>The paragraph you just read was written by Robert Hirsh as the forward to the United States Geological Survey's Circular 1217 entitled "Ground-Water-Level Monitoring and the Importance of Long-TermWater-Level Data". This new page will explain the benefits of groundwater monitoring and use examples to show how this management tool can help you manage your groundwater resources.</p>
              <h6 className="h3">Water Level Monitoring as a Management Tool</h6>

              <p>Water system managers make critical decisions every day. As you face increasing demand, you find yourself in need of a new well. Is your only option a program that involves test bores, test wells and new land purchases? Maybe not if you know the health of your source aquifer. By starting a groundwater level monitoring program at your system today, your option may include only aquifer testing to establish well spacing. Implementing a groundwater level monitoring program now can provide you with the information needed to further develop the aquifer you are currently using. No more test wells because you already know the water quality and the production potential of the aquifer. No more searching for an acceptable wellsite as you have one present are ready to go. Below are four case studies on groundwater level monitoring at public supply wells. For some additional information of Dan's hobby of groundwater level monitoring.</p>
              <ToggleComponent titles={toggleTitles} bodies={toggleBodies} />

            </div>
          </div>
        </div>
      </section>
      <section className="sub__single">
        <div className="container">
          <div className="row">
            <div className="col">

              <h5 className="h2">Rate Study</h5>
              <p>On April 21, 2014, OAI introduced a new management service, the Rate Study, to help our clients formulate effective consumption rates for them and their customers. Does your water system need this service? Well, if you have not evaluated your rates in the past few years, if your revenues are not covering your expenses (and that includes reserve accounts) and/or you have trouble covering emergency and preventive maintenance costs, you would benefit from a Rate Study. This process doesn't have to be painful or expensive because OAI works with you using information you already have on hand. Using sound, proven methodology while working with you, OAI will assess your rates and make recommendations that will ensure they are equitable for all your customers, large and small. Contact us today.</p>

            </div>
          </div>
        </div>
      </section>
      <section className="sub__single">
        <div className="container">
          <div className="row">
            <div className="col">

              <h5 className="h2">Asset Management</h5>

              <p>Asset management can (and should) work for your benefit. Asset management in this sense is defined as "a process for maintaining a desired level of customer service at the best appropriate cost." OAI received training from the EPA and is now an EPA Certified trainer for the EPA's Check Up Program for Small Systems (CUPSS), see below. We are available to put our training to work for you and your water system. In just a few short lessons, you will be in control of this new program and well on the road to:</p>

              <ul className="list">
                <li>Making more informed decisions</li>
                <li>Saving time by planning work schedules ahead</li>
                <li>Backing up budget talks with solid facts you can then present to your Boards</li>
                <li>Improving customer service</li>
                <li>Preparing an asset management plan in seven steps</li>
              </ul>

              <p>The Check Up Program for Small Systems (CUPSS) is an easy to learn program developed by the EPA in response to a clear need from communities to consolidate and package asset management materials in an easy-to-use, clear and update-to-date fashion. EPA's Office of Groundwater and Drinking Water (OGWDW) developed CUPSS with the help of a workgroup that included representatives from state agencies, technical assistance organizations, EPA Regional offices, and small waste water and drinking water utilities. With this collaborative approach, EPA was able to develop a comprehensive application that provides all the tools required to implement an asset management program and develop effective asset management plans.</p>

              <p>To get started, simply send an email to OAI and put CUPSS in the subject box.</p>

            </div>
          </div>
        </div>
      </section>
    </Layout >
  )
}

export default management;