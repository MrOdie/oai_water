import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Blockquote from '../components/modules/blockquote';

const exploration = () => {
  return (
    <Layout page="exploration">
      <SEO title="Exploration" />


      <section className="intro">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className="h2">Exploration</h5>

              <p>OAI introduced the hydrogeologic approach to Gulf Coast groundwater users as a new, more efficient means of developing groundwater resources. OAI's hydrogeologic approach includes research, correlation (see cross section* above) and mapping of the hydrogeologic system coupled with a review of the user's existing production system. This work is done before any drilling is planned or commenced. OAI's methodology to groundwater development has proven to be the most efficient and effective means of developing groundwater resources for our clients especially when compared to systems still relying on rules of thumb and the hit or miss approach to drilling. The earlier OAI gets is involved on your next well, the better your chances of success become.</p>

              <p>The tabs above present the various components to OAI's hydrogeologic approach to groundwater exploration. Contact OAI today to implement a hydrogeologic approach to your next well, as our repeat client will confirm, you'll be glad you did.</p>
              <p><em>* The cross section shown above was the key that led to the development of a 5.4 mgd wellfield, see Case #4 on  OAI's Industrial Supply Section under the Development tab.</em></p>
            </div>
          </div>
        </div>
      </section>

      <section className="sub__single">
        <div className="container">
          <div className="row">
            <div className="col">

              <h5 className="h2">Hydrogeologic Study</h5>
              <Blockquote attribution="Exodus 17:3">In those days in their thirst for water, the people grumbled against Moses...</Blockquote>

              <p>Some things never change. The time when you are most likely to hear from your customers is, as the saying goes, when the well runs dry! In today's world like in Moses' time, the people will grumble indeed. To stay on top of the situation by providing clean, inexpensive drinking water to your system's customers requires long range planning. The days of drilling "wildcat" exploration wells in your search for more water are now cost prohibitive.</p>

              <p>OAI takes the business of water supply exploration to the next level. Rather than advancing the hit or miss wildcat exploration approach, we combine research with subsurface mapping (hydrogeologic study) to identify promising aquifers and locate ideal wellsites. How has OAI's approach faired? Our first project was completed for a Baldwin County, Alabama utility. At the end of the day, the savings to the utility was approximately $700,000 with no "dry holes". Through application of OAI's proven hydrogeologic approach, we:</p>

              <ul className="list">
                <li>Increased "site" production from 1 million gallons per day to 2.8 million gallons per day</li>
                <li>Eliminated the need for two treatment plants</li>
                <li>Eliminated approximately 2 miles of piping</li>
                <li>Eliminated the need for 2 "test wells"</li>
                <li>Significantly reduced land purchase requirements</li>
              </ul>

              <p>If you are serious about your groundwater supply and seek an innovative way to explore for new sources of water to meet increasing demand, we want to talk with you. Whether it is for public supply, irrigation supply or industrial supply, we can work with you to locate potential new sources or identify possible options you might not have considered due to "rules of thumb" concepts.</p>

              <p>While some things have not changed from the days of Moses' people grumbling in their thirst, things have changed when it comes to groundwater exploration. OAI's has shown the benefit of our hydrogeologic approach to groundwater development. With experience in all phases of groundwater development, we understand the governing regulations and we have a proven track record of locating new water sources and expanding existing water sources. We listen to your needs and transform your wishes into a finished product that meets your water supply requirements. Whether it involves analysis of your existing system or new source exploration, we make it happen. We also provide training so you and your staff learn how to get the most from your water source.</p>

              <h6 className="h3">Terms Defined:</h6>
              <ul className="list">
                <li><strong>Wildcat</strong> Term applied to petroleum exploration well drilled with little or no geologic insight or effort. Wildcats are more likely to result in failure than geologically located petroleum tests.</li>              
                <li><strong>Research</strong> At OAI, research is a critical component of the majority of our groundwater resource exploration and development projects. The days of completing a public supply well for $25,000 are history. Currently, a single dry hole can run upwards of $60,000 and delay a project by many months. On the other hand, research or hydrogeologic study, has paid off for OAI clients with most projects developing wells without experiencing "dry hole" costs, some projects completing new wells without test well costs and some receiving good news that runs contrary to what the "experts" said.</li>              
                <li><strong>Rules of Thumb</strong> These work great keeping your kids safe at Halloween. When applied to groundwater resources, rules of thumb can and often due drive up the cost of the project. Unless money is of no concern, leave rules of thumb out of your groundwater resource program.</li>
                <li><strong>Analysis of Your Existing System</strong> The reality is most systems have been around longer than their current personnel or their governing Boards. In completing our analysis of system resources, we have identified old system wells the current personnel knew nothing about, see note on research above. Another aspect of analysis involves taking a closer look at exisiting production. Some wells were completed to meet demand "required" at the time. Now, years later, the demand has increased. OAI's analysis allows for a thorough evaluation of the well's hydraulics and in several cases, we have successfully demonstrated (and re-permitted) increased production for a fraction of the cost of a new well.</li>

              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default exploration;