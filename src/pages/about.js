import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import img from "../assets/images/head-shot.jpg"

const AboutPage = () => (
  <Layout page="about">
    <SEO title="About" />
    <section className="intro">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="h2">The Dream: To be the leading groundwater resources firm in the south</h4>
            <p>O'Donnell &amp; Associates, Inc. began as a dream to become the first company called on by those seeking to develop, expand or manage a groundwater source of water supply. Our target market consists of utilities, engineering firms, industry, irrigators and private entities who were tired of the costly "dry holes" or "rules of thumb" approaches to developing groundwater supplies. After prayer and discernment along with the support of family and friends, our dream became a reality in May 1999 with incorporation following in January 2000.</p>
            <p>Through the Grace of God, quality services, integrity, hard work and satisfied clients, OAI's dream has flourished with a current client base that consists of 43 public water systems, 23 engineering firms, 18 industrial clients, nine business clients and four irrigation clients, the majority of which are repeat customers. To all our clients, we extend our deepest appreciation for giving OAI your trust. To our family and friends, thank you for making our dream a reality.</p>
            <p>To those of of you who are not satisfied with the status quo or find yourself wondering if perhaps there is a more efficient way to deal with your water resource needs, we can assure you there is a better way. We welcome your interest in OAI. Perhaps, OAI will soon be "putting geology to work for you" too.</p>
            <h5 className="h3">The Company</h5>
            <p>OAI's strength is based on our unique combination of petroleum (exploration and wellsite) geology and hydrogeology experience along with formal hydrogeologic training under the direction of Dr. Wayne Pettyjohn through Oklahoma State University's graduate level hydrogeology program. This combination of formal training and experience sets OAI apart from the crowded hydrogeologic consulting field by letting you plan for success rather than budgeting for failure.</p>
            <p>With professional geologic experience dating from 1979 with specialization in hydrogeology since 1990, OAI has the knowledge and skill to meet complex regulatory requirements in an efficient and cost effective manner, whether they are related to developing a new source of water supply, assessing your existing groundwater resources or managing you groundwater assets. This is done while applying sound geologic and hydrogeologic principals to the problem, what we call "putting geology to work for you".</p>
          </div>
        </div>
      </div>
    </section>
    <section className="sub__multi">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="h2">Personnel</h4>
            <p>O'Donnell &amp; Associates, Inc. is a small business by design allowing us to operate in an efficient manner with low overhead which in turn allows us to pass along savings to our clients. Our permanent full-time staff includes Nell and Dan O'Donnell.</p>
          </div>
        </div>
        <div className="row">
          <div className="col__left">
            <img className="personnel__img" src={img} alt="Nell O'Donnell"/>
          </div>
          <div className="col__right">
            <h5 className="h3">Nell O'Donnell, RN, President and CFO</h5>
            <p>Nell is the majority owner of O'Donnell &amp; Associates and has control of the "business" end of the firm. Nell's responsibilities include fiscal management, invoicing, health/insurance issues and budgeting. Outside of OAI activities, Nell is a nurse with the Mobile County School system on an "on call basis". In her spare time she invloved with Cursillo, being grandma to Daniel, Samuel, Irene and George and with church activities at St. Pius X Catholic Church.</p>
          </div>
        </div>
        <div className="row">
          <div className="col__left">
            <h5 className="h3">Dan O'Donnell, PG, Hydrogeologist</h5>
            <p>Dan, a 1979 graduate of Auburn University (BS Geology), has 39+ years of experience in a variety of geologic fields. He maintains professional geologist registrations in Alabama, Arkansas, Florida, Kentucky and Mississippi with Louisiana pending. He is responsible for the technical aspects of the firm. Since 1990, Dan's focus is hydrogeology; the research, exploration, development and management of groundwater resources. He has formal training in hydrogeology from Oklahoma State University and extensive experience with aquifers in the Coastal Plain. Outside of work, Dan is the past Grand Knight of Knights of Columbus Council #13085, is active in The Men of St. Joseph, Cursillo, and other church activities at St. Pius X Catholic Church. In his spare time he works very hard at spoiling his dog Jonas, being papa to little Daniel, Sammy, Irene and George and enjoys conducting research on three shallow aquifer wells in his back yard.</p>
          </div>
          <div className="col__right">
            <img className="personnel__img" src={img} alt="Dan O'Donnell"/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5 className="h3">Additional Expertise</h5>
            <p>Through teaming arrangements with a variety of firms including 23 engineering firms, six drilling contractors and private individuals. OAI has access to PEs, drilling contractors, wetland specialists, developers, karst geologists, hazardous waste management specialists and a variety of technical support personnel. Again, by not having these highly qualified and experienced individuals "on staff" we are able to keep our costs down while being able to providetheir expertise on a project specific/as needed basis.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="sub__single">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="h2">Qualifications and Experience</h4>
            <p>When one looks at a company's "qualifications and experience", it is important to look beyond the mere website postings or company brochures and focus on the actual personnel on hand at the company who will be performing the work and ask yourself: Do they have the qualifications and experience?  At OAI, our qualifications and experience are one and the same with the people who will be working your project. That said, we will start our qualifications by listing Project Experience directly associated with OAI's current staff.</p>
            <h5 className="h3">Project Experience</h5>
            <ul>
              <li>Hydrogeologic studies (85)</li>
              <li>Aquifer Tests (77 aquifer tests and 17 pumping tests)</li>
              <li>PSW Wells premitted (84 with combined production capacity of 20,740 gpm)</li>
              <li>Coastal Wells permitted (9) with combined production capacity of 6.5+ mgd</li>)
              <li>Coastal Wells completed without needing permits (4) with a combined production potential of 1.2+ mgd</li>
              <li>Wellfields Completed (13 with combined production capacity of 33.43+ mgd)</li>
              <li>De-Centralized WWTP Permitted (31 with combined effluent disposal capacity of 1.34 mgd)</li>
              <li>Groundwater Modeling Projects (94)</li>
              <li>UST Investigations (150+ in several States)</li>
              <li>Water well bores geologically logged (52,900+ feet)</li>
            </ul>

            <h5 className="h3">Education</h5>
            <ul>
              <li>BS, Geology, Auburn University (1979)</li>
              <li>Practical Approaches to Ground-water Hydrology and Contamination*, Oklahoma State University (1990)</li>
            </ul>
            <p><small>*Seven week graduate level hydrogeology program</small></p>
            <h5 className="h3">Registrations</h5>
            <ul>
              <li>State of Arkansas, Professional Geologist #1184</li>
              <li>State of Florida, Professional Geologist #1798</li>
              <li>State of Iowa, Groundwater Professional #1124 (1991-1993)</li>
              <li>Commonwealth of Kentucky, Professional Geologist #851</li>
              <li>State of Louisiana, Professional Geoscientist (#430)</li>
              <li>State of Mississippi, Professional Geologist #454</li>
              <li>Florida Department of Transportation, WQIE #91</li>
            </ul>
            <h5 className="h3">Training</h5>
            <ul>
              <li>Texas Board of Professional Geoscientists Ethics Video &amp; Quiz - Passed</li>
              <li>The Analyst/Schlumberger Mud Logging Training (160 hours)</li>
              <li>40-hour Hazardous Material Worker Site Safety OSHA 29 CFR 1910.120</li>
              <li>8-hour Hazmat Refresher (December 2011)</li>
              <li>Property Assessment Short Course w/Certification, Oklahoma State</li>
              <li>Florida DOT Water Quality Impact Evaluation w/Certification</li>
              <li>Geological Survey of Alabama Wellhead Protection Seminar</li>
              <li>Alabama Department of Environmental Management (ADEM) Wellhead Protection Seminar</li>
              <li>Wellhead Protection Training Conference Alabama Rural Water Association (AWRA)</li>
              <li>Groundwater Hydrology, Auburn University</li>
              <li>Monitored Natural Attenuation for Groundwater Seminar (EPA)</li>
              <li>Source Water Assessment Training (AWRA)</li>
              <li>3rd International Analytic Element Modeling Conference (Univ. of Minnesota and EPA)</li>
              <li>1st Annual Alabama Groundwater Conference, presenter (ADEM)</li>
              <li>Alabama/Florida Technical Training, presenter (AWRA)</li>
              <li>2nd Annual Alabama Groundwater Conference (ADEM)</li>
              <li>Coastal Groundwater Protection Workshop, presenter (Weeks Bay and Faulkner State)</li>
              <li>AWWA's Security Planning for Drinking Water Systems: An Operational Approach</li>
              <li>Onsite Wastewater Workshop (Weeks Bay)</li>
              <li>Alabama Water Resources Conference (ARWA)</li>
              <li>Water Security Training and Technical Assistance for Medium Size Community Water Systems</li>
              <li>National Groundwater Association's RCRA Task Force (member)</li>
              <li>Understanding the new Health Department Onsite Sewage Treatment and Disposal Rules (Weeks Bay)</li>
              <li>EPA' Check-up Program for Small Systems (CUPPS) Certified Trainer</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage;