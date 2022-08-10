import type {NextPage} from 'next'
import Head from "next/head";
import Layout from "../assets/components/Layout";
import SingleColumn from "../assets/components/SingleColumn";
import Blockquote from "../assets/components/partials/Blockquote";
import Banner from "../assets/components/Banner";

import bannerImage from "../assets/images/homepage_2500px.jpeg";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>O'Donnell & Associates Inc.</title>
            </Head>
            <Layout page={"home"}>

                <Banner sectionId={"home-banner"} image={bannerImage} headline={"Hydrogeologic Consulting"} subHeadline={"Research Exploration Development Management"}/>

                <SingleColumn sectionId={"home-welcome"}>
                    <h2 className="section-heading h1">Welcome to O&#39;Donnell &amp; Associates</h2>
                    <p>OAI is a woman-owned hydrogeologic consulting firm located in Mobile, Alabama (USA) that
                        specializes in the research, exploration, development and management of groundwater
                        resources.</p>
                    <p>Through the Grace of God, hard work and quality services, OAI has grown to
                        become the leading provider of professional hydrogeologic services to water
                        systems <em>(50+)</em>,
                        engineering firms <em>(23)</em>, industries <em>(18)</em>, businesses <em>(9)</em> and
                        irrigators <em>(4)</em> across the central Gulf Coast Region.</p>
                    <p>OAI's unique combination of petroleum exploration experience coupled with formal hydrogeologic
                        training sets us apart from others in the
                        crowded hydrogeologic consulting community. With professional geologic experience dating from
                        1979,
                        OAI welcomes you to our website and we look forward to addressing your water resource concerns
                        with
                        proven, cost effective solutions.</p>
                </SingleColumn>

                <SingleColumn sectionId={"home-dream"}>
                    <h3 className={"h2"}>The Dream: To Be The Leading Groundwater Resource Development Firm In The
                        South</h3>
                    <p>O'Donnell & Associates, Inc. began as a dream to become the first company called on by those
                        seeking to develop, expand or manage a groundwater source of water supply. Our target market
                        consists of utilities, engineering firms, industry, irrigators and private entities who are
                        tired of costly "dry holes" or "rules of thumb" approaches to developing groundwater supplies.
                        After prayer and discernment along with the support of family and friends, our dream became a
                        reality in May 1999.</p>

                    <p>hrough the Grace of God, quality services, integrity, hard work and satisfied clients, OAI's
                        dream has flourished with a current client base that consists of 50+ public water systems, 23
                        engineering firms, 18 industrial clients, nine business clients and four irrigation clients, the
                        majority of which are repeat customers. To all our clients, we extend our deepest appreciation
                        for giving OAI your trust. To our family and friends, thank you for making our dream a
                        reality.</p>

                    <p>To those of of you who are not satisfied with the status quo or find yourself wondering if
                        perhaps there is a more efficient way to deal with your water resource needs, we can assure you
                        there is a better way. We welcome your interest in OAI. Perhaps, OAI will soon be "putting
                        geology to work for you" too.</p>

                    <Blockquote><strong>Putting geology to work for you.</strong></Blockquote>

                    <h3 className="h2">The Company</h3>
                    <p>OAI's strength is based on our unique combination of petroleum (exploration and wellsite) geology
                        and hydrogeology experience along with formal hydrogeologic training under the direction of Dr.
                        Wayne Pettyjohn through Oklahoma State University's seven week graduate level hydrogeology
                        program. This combination of formal training and experience sets OAI apart from the crowded
                        hydrogeologic consulting field by letting you plan for success rather than budgeting for
                        failure.</p>

                    <p>With professional geologic experience dating from 1979 with specialization in hydrogeology since
                        1990, OAI has the knowledge and skill to meet complex regulatory requirements in an efficient
                        and cost effective manner, whether they are related to developing a new source of water supply,
                        assessing your existing groundwater resources or managing you groundwater assets. This is done
                        while applying sound geologic and hydrogeologic principals to the problem, what we call "putting
                        geology to work for you".</p>
                </SingleColumn>
            </Layout>
        </>
    )
}

export default Home
