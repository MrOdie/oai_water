import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { toggle } from '../assets/js/toggle';

class development extends React.PureComponent {
  componentDidMount() {
    toggle();
  }

  render() {
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
                <div className="toggle__content">

                  <ul className="toggle__nav">
                    <li className="toggle__title active" data-toggle="toggle__first">
                      Public Supply
                  </li>
                    <li className="toggle__title" data-toggle="toggle__second">
                      Industrial Supply
                  </li>
                    <li className="toggle__title" data-toggle="toggle__third">
                      Irrigation Supply
                  </li>
                  </ul>
                  <div id="toggle__first" className="toggle__body visible">
                    <p>OAI's direct* involvement with the development of groundwater for public supply purposed began in 1999 with the planning, testing, development and permitting of a municipal wellfield for a Baldwin County water system. In all, since that first call, OAI has completed 90+ hydrogeologic studies that have resulted in the development of 51 public supply wells capable of producing 47+ million gallons per day. The following case studies highlight some of these public supply well projects.</p>
                    <h6 className="h4">Case #1</h6>

                    <p>This Baldwin County utility was first introduced to OAI's hydrogeologic approach to the development of groundwater resources after four dry holes and two test wells resulted in the completion of a single 600 gpm production well. Since switching to OAI and implementing OAI's approach, the system has completed two single aquifer wellfields and one multi-aquifer wellfield with the addition of four public supply wells. The four wells increased production by 3,350 gpm (4.8 mgd) with no test wells or dry holes.</p>
                    <h6 className="h4">Case #2</h6>

                    <p>This Dallas County water system was in dire straits due to the 2007 drought and were several months into water rationing which in turn brought lower revenue. Their solution to the drought was to drill a new 1,450+ foot deep well. OAI was retained to complete a hydrogeologic study to determine whether or not the target aquifer was present at depth. The study found that not only was the aquifer present at depth, it also found that forty years earlier the system completed a test well in the aquifer and found that the targeted aquifer contained high quality water eliminating the current budgeted cost for a new test well. More importantly, the study showed that by simply lowering the pumps in two existing wells by 50 feet, these existing two wells would provide an adequate supply of water to the system for many years to come. This $50,000 fix eliminated the current need for the new $1,000,000+ well, provided an end to water rationing and restored their revenue stream.</p>
                    <h6 className="h4">Case #3</h6>

                    <p>This southwest Alabama water system completed a test bore and dry hole in an area of their system where they needed additional supply. OAI was retained to review the work to date and identify options for developing an additional supply. The review was successful in identifying distribution problems a new well would bring and outlined a plan to expand production without a new well. Testing confirmed the feasibility of OAI's plan and the system implemented the plan that maximized production under the existing distribution network.</p>

                    <h6 className="h4">CASE #4</h6>

                    <p>This Mobile County water system was in need of a new well.  Working with the system's engineer, OAI was called on to provide hydrogeologic planning and wellsite services for the new well that was an offset to an existing well.  As the pilot bore was advanced, OAI identified a sand not previous under consideration for development.  Based on OAI's observation and recomendation to test the sand, the single well location was developed as a multi-well multi-aquifer wellfield.  The primary aquifer tested out at 1,276 gpm and was permitted for 850 gpm.  The secondary aquifer tested out at 900 gpm and was permitted for 600 gpm.  The wells, seen at the top of the page, are 41 feet apart horizontally and located in the "back yard" on a residential lot with the treatment plant designed to look like a residence in the subdivision.  Savings to the water system on this multi-well project were estimated at $600,000.</p>

                    <p><em>* Does not include 5 years of groundwater development experience prior to forming OAI.</em></p>
                  </div>
                  <div id="toggle__second" className="toggle__body">


                    <p>OAI's involvement with industrial supply began with a 2001 phone call for our assistance with a seafood processing well and has expanded to wells associated with cooling water, process water and mining water. In all, since that first call, OAI has completed six hydrogeologic studies that have resulted in the development of 10 industrial supply wells capable of producing 10.5+ million gallons per day. The following five case studies highlight some of these industrial supply well projects.</p>

                    <h6 className="h4">Case #1</h6>

                    <p>OAI's first industrial supply well project was a high volume well located within Alabama's coastal zone. The client was referred to OAI due to our expertise with permitting coastal wells. The project required a hydrogeologic work-up to support development of a new replacement well, aquifer testing to determine aquifer hydraulics and groundwater modeling to evaluate the well's potential to cause saltwater encroachment and its impact on other area wells. 50-year capture zone. OAI’s hydrogeologic effort determined no other wells were completed in the aquifer, saltwater encroachment would not occur and permitted this 196-gallon per minute well. Initially permitted in 2002, the well continues to provide the needed groundwater supply.</p>
                    <h6 className="h4">Case #2</h6>

                    <p>This OAI client's product was in demand to the point the plant was expanding to double its production capacity. This expansion brought with it the need for additional industrial water for use in the manufacturing process and for use as a potable source of supply for plant employees. OAI was retained to complete a hydrogeologic study of aquifers underlying the site with the intent to develop an additional source of groundwater supply. Once a target aquifer was identified, OAI completed wellsite services and assisted the facility in permitting the well as both a source of industrial and potable water. The project was successful in identifying an aquifer, developing a new 1,000 gpm well and permitting the well.</p>
                    <h6 className="h4">Case #3</h6>

                    <p>This OAI client was paying a local utility for its entire cooling water supply since the plant's construction after having been told groundwater "is not an option" in the area. The client was referred to OAI by their engineer who was familiar with OAI's groundwater exploration and development efforts. Initially, OAI was retained to complete a hydrogeologic study to determine if any aquifers were present. The hydro-study identified five aquifers underlying the plant site. Of the five aquifers, one was targeted for development due to it having acceptable water quality and it not being used as a source of public water supply in the area. The aquifer was tested and found acceptable with respect to water quality and quantity as proposed in the study. A 710 gpm well was completed in the aquifer and permitted for use as a source of industrial supply. Since 2005, this well has provided industrial supply water for this facility significantly reducing the plant's purchased water expense.</p>
                    <h6 className="h4">Case #4</h6>

                    <p>OAI met with this client to discuss their expected groundwater needs. In Phase 1 of this project, OAI completed a hydrogeologic study covering 30 square miles around the client's plant. The study identified several aquifers and presented proposed drilling depths to test the aquifers identified. Drilling and test wells found the targeted aquifers present as mapped and with water quality meeting the requirements of its intended use. Land purchase followed and two separate aquifers were tapped by two production wells. To date, the wellfield has two "test wells" capable of supplying a combined capacity of 756 gpm and two production wells, photo below, capable of 1,500 gpm each for a current wellfield total production potential of 3,756 gpm (5.4 mgd). A third aquifer has yet to be tested but should easily be capable of an additional 1,500 of industrial supply. Each aquifer may be capable of supporting additional wells based on testing to date.</p>
                    <h6 className="h4">Case #5</h6>

                    <p>This industrial client retained OAI to explore the potential of developing an industrial source of supply at their facility after hearing about OAI's success in developing a groundwater source of supply at an adjacent plant, see Case #3 above. OAI completed research and identified two aquifers with the potential to meet their needs. The aquifers were drilled, tested and permitted under Alabama’s Coastal Zone Regulation with 300 gpm and 600 gpm wells. Daily savings generated from use of these two wells reduced this plant's purchased water expense by about $1,100 to $1,300 per day beginning in 2006 when the two wells went on-line. In 2012, a review was initiated by OAI to determine whether or not a third well can be completed at the site without adversely impacting operation of the two existing wells. The review was favorable with a third well completed at the plant in 2013 and permitted for 800 gpm.</p>
                    <h6 className="h4">Case #6</h6>

                    <p>Discussion with this client initially began in 2009.  After years of start and stop, OAI was tasked with assessing this client's industrial supply.  The assessment didn't offer much hope for additional development at the site but did offer an option never even considered by the client.  Authorization was given and OAI submitted a plan to test a new concept of groundwater production.  The test program was implemented as planned.  The result found tremendous production of high quality water, dubbed "holy water" by the client, was sustainable.  Plans are currently underway to develop a four well wellfield capable of producing up to 5.6 MGD.  OAI's research and persistence led to this project moving forward.</p>

                    <p>In many of OAI's industrial water supply projects, our clients were initially given incorrect information or miss-informed on the availability of groundwater in the vicinity of their plants. OAI's track record shows that it could be to your benefit to get a second opinion on the groundwater option if you have been told groundwater is not an option.</p>

                  </div>
                  <div id="toggle__third" className="toggle__body">
                    <p>When it rains it pours and when it doesn't, it's best to have a dependable irrigation supply to supplement precipitation deficits. OAI* has been developing irrigation supply dating back to Dan's effort for a Gulf Coast Golf facility in Gulf Shores Alabama.</p>
                    <h6 className="h4">Case #1</h6>

                    <p>Researched, planned, developed and permitted a 252,000 gallon per day supplemental irrigation supply for an "on island" golf course in 1995. Two years after permitting the first well, a second well was added increasing irrigation supply to 504,000 gallons per day. This project became the first single aquifer wellfield permitted under Alabama's Coastal regulation. Both wells continue to provide irrigation supply for this "on island" golf course.</p>
                    <h6 className="h4">Case #2</h6>

                    <p>OAI identified a target aquifer for this irrigation project that would not compete with public water supply wells. The aquifer was drilled, tested and permitted to supply 500 gpm for this golf course that needed a supplemental groundwater supply to support the course's lake supply of irrigation. Like Case #1, this well was completed "on island" in an area deemed off limits due to saltwater encroachment.</p>
                    <h6 className="h4">Case #3</h6>

                    <p>OAI was retained to evaluate the hydraulics of a Florida irrigation well to determine appropriate spacing for a two well single aquifer wellfield. The project involved evaluating aquifer hydraulics and developing a groundwater flow model to evaluate various well configurations. The client was presented with spacing options for two and three wells operating at 350 gpm.</p>

                    <p>Are you considering developing an irrigation supply? OAI is available to research area aquifers, provide wellsite geologic services and to model aquifer hydraulic to develop your needs efficiently. With ongoing erratic weather conditions bringing recurring drought to the Gulf Coast, don't get caught wanting. Begin your irrigation planning by contacting OAI today and put Irrigation in the Subject box.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </Layout>
    )

  }
}

export default development;