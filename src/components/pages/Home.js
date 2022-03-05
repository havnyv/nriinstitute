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
                We recognize that choosing an institution is one of the most important decisions you make in your life. At NRI we choose our students with as much care as you choose your institution. We are today living in a period of stress and strife, of competition and complexities. The adolescent of today is at a loss to decide for oneself the right course in one's academic and developmental pursuits. We believe that our students must set their firm grip on to quality right through the years with us and furthermore stride on to a rewarding and exciting career in future.
              </p>
            </div>
            <div className="latestnews">

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
            <h2>Why choose Sarovar groups ? </h2>
            <p>
              Sarovar Group offers a wide range of consulting services with the
              necessary tools and expertise to help grow your business. We
              partner with our clients from start to finish, focusing on their
              needs while producing new ideas, developing effective strategies
              and designing high quality and scalable solutions. Contact us to
              learn more.
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