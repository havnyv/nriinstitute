import React from 'react'
import "./Home.scss"
import Homeswiper from "../pages/pagecompo/HomeSwiper/Homeswiper"

// import Icon from "../pages/homeimgs/book.jpg";
import Icon from "../pages/homeimgs/icon-api.svg";
import Background from "../pages/homeimgs/book.jpg";

function Home() {
  return (
    <>
      <section className="container--px  swiperhero">
        <div className="container swiperhead">
          <Homeswiper />
        </div>
      </section>

      <section className="hero container--pall">
        <div className="container">
          {/* <div className="hero__image"></div> */}
          <div className="hero__first ">
            <div className="welcome">
              <h2>NRI Institute Welcomes you</h2>
              <p>
              NRI INSTITUTE, founded in 1994, is run by "NRI CHILDREN'S
EDUCATIONAL TRUST, Bangalore". The colege is recognized by Government of Karnataka and affiliated to Bangalore University.
The institution strives to fulfill its mission to provide educatonal opportunThe college curriculum comprises of Pre- University Courses as well as Degree Courses. Our major course streams on offer are in the science, commerce and Management. Further breaking down the genres, we offer specializations in Commerce, Computer Science, Management and Business. The college also offers a host of value - Added Courses for students to enhance their skills and develop special talents. <span><a href="/about">Readmore...</a></span>
              </p>
            </div>
            <div className="latestnews">
              <ul>
                <li>lorem3</li>
                <li>lorem3</li>
                <li>lorem3</li>
                <li>lorem3</li>
              </ul>
            </div>
          </div>


            <div className="hero__second">
              <div className="vismis">
                <h2>Our Vision</h2>
                <p>To grow into an abode of learning accessible to the educationally, economically and socially marginalized sections of the society.</p>
                <h2>Our Mission</h2>
                <ul>
                  <li>To Provide qualitative education with all job oriented skills.</li>
                  <li>To enrich the capacity of individuals to learn and lead with integrity and wisdom.</li>
                  <li>To foster outreach programs, cultural and social understanding that strengthen learning.</li>
                  <li>To instill human values and a sense of responsibility towards that society.</li>
                </ul>
              </div>

              <div className="groupofinst">
                <h2>Our Group of Institutions</h2>
                <ul>
                  <li>St. John's High School,Papareddy Palya</li>
                  <li>St. John's High School,Gangondanahalli</li>
                  <li>St. John's Public School,Papareddy Palya</li>
                  <li>St. John's Resedential & Day School,Gidadhakonenahalli</li>
                  <li>NRI Degree College (BBA,BCA,B.COM)</li>
                  <li>NRI PU College (Science & Commerce)</li>
                  <li>St. John's School of Nursing</li>
                  <li>St. John's Institute of Nursing</li>
                </ul>
              </div>

            </div>
            {/* <a href="#" className="button hero__cta">
              LOGIN
            </a> */}
        </div>
      </section>
      {/* ############################### */}
      {/* ############################### */}
      {/* ############################### */}

      <section className="feature">
        <div className="feature__content container container--pall">
          <div className="feature__intro">
            <h2>Courses offered </h2>
            <p>
            To instill human values and a sense of responsibility towards that society.To instill human values and a sense of responsibility towards that society.To instill human values and a sense of responsibility towards that society.
            </p>
          </div>

          <div className="feature__grid">
            <div className="feature__item">
              <div className="feature__icon">
                <img src={Icon} alt="icon" />
              </div>
              <div className="feature__title"></div>
              <div className="feature__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam deserunt voluptate architecto inventore fugiat.

              </div>
            </div>

            <div className="feature__item">
              <div className="feature__icon">
                <img src={Icon} alt="icon" />
              </div>
              <div className="feature__title">Online Services</div>
              <div className="feature__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam deserunt voluptate architecto inventore fugiat.

              </div>
            </div>

            <div className="feature__item">
              <div className="feature__icon">
                <img src={Icon} alt="icon" />
              </div>
              <div className="feature__title">Online Services</div>
              <div className="feature__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam deserunt voluptate architecto inventore fugiat.

              </div>
            </div>

            <div className="feature__item">
              <div className="feature__icon">
                <img src={Icon} alt="icon" />
              </div>
              <div className="feature__title">Online Services</div>
              <div className="feature__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam deserunt voluptate architecto inventore fugiat.

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ############################### */}
      {/* ############################### */}
      {/* ############################### */}

      <section className="articles">
        <div className="article__content container container--pall">
          <h2>Latest Blogs</h2>
          <div className="article__grid">


            <a href="#" className="article__item">
              <div
                className="article__image"
                style={{
                  backgroundImage: `url(${Background})`,

                }}
              ></div>

              <div className="article__text">
                <div className="article__author">
                  ADMIN
                </div>
                <div className="article__title">
                  {" "}
                  Lorem ipsum dolor sit
                  {" "}
                </div>
                <div className="article__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam deserunt voluptate architecto inventore fugiat.

                </div>
              </div>

            </a>


            <a href="#" className="article__item">
              <div
                className="article__image"
                style={{
                  backgroundImage: `url(${Background})`,

                }}
              ></div>

              <div className="article__text">
                <div className="article__author">
                  ADMIN
                </div>
                <div className="article__title">
                  {" "}
                  Lorem ipsum dolor sit
                  {" "}
                </div>
                <div className="article__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam deserunt voluptate architecto inventore fugiat.

                </div>
              </div>

            </a>


            <a href="#" className="article__item">
              <div
                className="article__image"
                style={{
                  backgroundImage: `url(${Background})`,

                }}
              ></div>

              <div className="article__text">
                <div className="article__author">
                  ADMIN
                </div>
                <div className="article__title">
                  {" "}
                  Lorem ipsum dolor sit
                  {" "}
                </div>
                <div className="article__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam deserunt voluptate architecto inventore fugiat.

                </div>
              </div>

            </a>


            <a href="#" className="article__item">
              <div
                className="article__image"
                style={{
                  backgroundImage: `url(${Background})`,

                }}
              ></div>

              <div className="article__text">
                <div className="article__author">
                  ADMIN
                </div>
                <div className="article__title">
                  {" "}
                  Lorem ipsum dolor sit
                  {" "}
                </div>
                <div className="article__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam deserunt voluptate architecto inventore fugiat.
                </div>
              </div>

            </a>

          </div>
        </div>
      </section>
    </>
  )
}

export default Home