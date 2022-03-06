import React from 'react'
import './Academics.scss'



//
import bcaimg from "../homeimgs/bcaimg.png"
import bcomimg from "../homeimgs/bcomimg.png"
import bbaimg from "../homeimgs/bbaimg.png"

const Academics = () => {
    return (
        <div className="academics">
            <div className="academics_img">

            </div>
            <section className="admissions_elegibility  container--pall">
                <div className="container">
                    <div className="admission container--pt">
                        <h2>
                            Admission
                        </h2>
                        <p>
                            B.Com, BBA, BCA - These courses are conducted under Bangalore University Syllabus. Admissions for the above programmes will start immediately after the declaration of Class XII results and classes commence from 4th Week Of June Regular admissions for UG programmes will start only after the declaration of Class XII results. However applicants or parents can meet the addmission Officer in the college campus, in advance, to enquire about the status of admissions.
                        </p>
                    </div>
                    <div className="elegibility container--py">
                        <h2>
                            Eligibility Criteria for Admission
                        </h2>
                        <ol>
                            <li>Acandidate who has passed the two year Pre University Examination conducted by the Pre University Education Board in Karnataka or any other recognized state board.</li>
                            <li>A candidate who has passed uniforms for regular clean maintenance. JODC /  Three years Diploma in Engineering of Government of Karnataka or any other examination  </li>
                            <li>Any student who has passed PUC-II Science,Arts or Commerce securing a minimum of 35% OF MARKS</li>
                        </ol>
                    </div>
                </div>
            </section>




            {/* second section  */}
            <section className="certificates_courses">
                <div className="container container--pall">
                    <div className="certificates">
                        <h2>Certificates Needed</h2>
                            <ul>
                                <li>10th Class Marks Card with date of birth </li>
                                <li>12th Class or Fquivalent Marks Card  </li>
                                <li>Aadhar Card  </li>
                                <li>Transfer Certificate from the shool or College</li>
                                <li>last attended</li>
                                <li>Migration from the board or university last passed from</li>
                                <li>Cast Certificate in case of SC /ST</li>
                                <li>6 Numbers Passport and 4 Numbers stamp size photographs</li>
                                <li>In case of foreign nationals, Passport Copy</li>
                            </ul>
                    </div>

                    <div className="courses">
                    <h2>Courses</h2>
                    <ul>
                        <li>Bachelor of Business Administration (BBA) Three-year, full-time program Affiliated to Bangalore University </li>
                        <li>Bachelor of Commerce (B. Com.) Three-year, full-time program Affiliated to Banglore University</li>
                        <li>Bachelor of Computer Applications (BCA) Three-year, full-time program Affiliated to Bangalore University</li>
                    </ul>
                    </div>
                </div>
            </section>


            <section className="articles">
        <div className="article__content container container--pall">
          <h2>Courses offered</h2>
          <div className="article__grid">


            <a href="#" className="article__item">
              <div
                className="article__image"
                style={{
                  backgroundImage: `url(${bcaimg})`,

                }}
              ></div>

              <div className="article__text">
                {/* <div className="article__author">
                  ADMIN
                </div> */}
                <div className="article__title">
                  BCA
                </div>
                <div className="article__description">
                  Bachelor of Computer Applications
                </div>
              </div>

            </a>


            <a href="#" className="article__item">
              <div
                className="article__image"
                style={{
                  backgroundImage: `url(${bcomimg})`,

                }}
              ></div>

              <div className="article__text">
                {/* <div className="article__author">
                  ADMIN
                </div> */}
                <div className="article__title">
                  B.COM
                </div>
                <div className="article__description">
                  Bachelor of Commerce
                </div>
              </div>

            </a>


            <a href="#" className="article__item">
              <div
                className="article__image"
                style={{
                  backgroundImage: `url(${bbaimg})`,

                }}
              ></div>

              <div className="article__text">
                {/* <div className="article__author">
                  ADMIN
                </div> */}
                <div className="article__title">
                  BBA
                </div>
                <div className="article__description">
                  Bachelor of Business Administration
                </div>
              </div>

            </a>

          </div>
        </div>
      </section>



        </div>
    )
}

export default Academics