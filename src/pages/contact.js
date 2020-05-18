import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const contact = () => {
  return (
    <Layout page="contact">
      <SEO title="Contact" />
      <section className="intro">
        <div className="container">
          <div className="row">

            <div className="col">
              <h2 className="h1">Contact Us</h2>
              <p>Thank you for your interest. For questions or comments, please use the information below. We look forward to hearing from you soon.</p>

              <div className="phone__container">
                <h4 className="h3">Call us:</h4>
                <div className="phone">
                  <div className="phone__row">
                    <p><strong>Office Phone:</strong></p>
                    <p>(251)-285-5945</p>
                  </div>
                  <div className="phone__row">
                    <p><strong>Emergency Phone:</strong></p>
                    <p>(251)-510-9355</p>
                  </div>
                </div>
              </div>

              <div className="hours__container">
                <h4 className="h3">Hours of Operation:</h4>
                <div className="hours">
                  <p><strong>Monday &mdash; Friday</strong>: 7:15 am - 5:00 pm</p>
                  <p><strong>Saturday</strong>: As necessary</p>
                </div>
              </div>

              <div className="address__container">
                <h4 className="h3">Find us:</h4>
                <div className="address">
                  <p>600 Bel Air Boulevard Suite 130</p>
                  <p>Mobile AL 36606</p>
                  <p><a href="tel:2512855945">(251) 285-5945</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sub__single">
        <div className="container">
          <div className="row">
            <div className="col contact__col">
              <div className="contact__form">
                <h2 className="h1">Send Us A Message:</h2>
                <form class="form" method="POST" data-netlify="true">
                  <div className="fields">
                    <div className="field half">
                      <input
                        className="input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="field half">
                      <input
                        className="input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="field half">
                      <input
                        className="input"
                        type="tel"
                        id="phone-number"
                        name="phone-number"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                    <div className="field">
                      <textarea
                        className="message"
                        name="message"
                        id="message"
                        rows="7"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="field">
                      <div data-netlify-recaptca></div>
                    </div>
                    <input type="submit" value="Send Message" class="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default contact