import React from 'react'
import "./Home.scss"
import Homeswiper from "../pages/pagecompo/HomeSwiper/Homeswiper"


// Image imports 
import Founder from "./homeimgs/Founder.png"
import bcaimg from "./homeimgs/bcaimg.png"
import bcomimg from "./homeimgs/bcomimg.png"
import bbaimg from "./homeimgs/bbaimg.png"

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

          {/* hero second */}
          <div className="hero__second">
            <div className="FMessage">
              <h2>Message from The Founder</h2>
              <p>
                Dear Students,
                We recognize that choosing an institution is one of the most important decisions you make in your life. At NRI we choose our students with as much care as you choose your institution. We are today living in a period of stress and strife, of competition and complexities. The adolescent of today is at a loss to decide for oneself the right course in one's academic and developmental pursuits. We believe that our students must set their firm grip on to quality right through the years with us and furthermore stride on to a rewarding and exciting career in future.
                <span><a href="/about">Readmore...</a></span>
              </p>
            </div>
            <div className="founder flex flex-ai-c flex-jc-c">
              <img src={Founder} alt="" />
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



      {/* ############################### */}
      {/* ############################### */}
      {/* ############################### */}

    </>
  )
}

export default Home