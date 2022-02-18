import React from "react";
import Skills from "./DividedComponents/Skills";
import Fact from "./DividedComponents/Fact";
import Freelancer from "./DividedComponents/Freelancer";
import Team from "./DividedComponents/Team";
import Contact from "./DividedComponents/Contact";
import Services from "./DividedComponents/Services";
import Aboutus from "./DividedComponents/Aboutus";
import Clients from "./DividedComponents/Clients";
import Portfolio from "./DividedComponents/Portfolio";
import Spin from "react-reveal/Spin";
import Zoom from "react-reveal/Zoom";

export default function Home() {
  return (
    <div>
      <section id="intro">
        <div class="intro-container">
          <div
            id="introCarousel"
            class="carousel  slide carousel-fade"
            data-ride="carousel"
          >
            <ol class="carousel-indicators"></ol>

            <div class="carousel-inner" role="listbox">
              <div
                class="carousel-item active"
                style={{
                  backgroundImage: `url(assets/img/intro-carousel/1.jpg)`,
                }}
              >
                <div class="carousel-container">
                  <div class="container">
                    <h2 class="animate__animated animate__fadeInDown">
                      We are professional
                    </h2>
                    <p class="animate__animated animate__fadeInUp">
                      Our Professional Team is always available to help you out.
                    </p>
                    <a
                      href="#featured-services"
                      class="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="carousel-item"
                style={{
                  backgroundImage: `url(assets/img/intro-carousel/2.jpg)`,
                }}
              >
                <div class="carousel-container">
                  <div class="container">
                    <h2 class="animate__animated animate__fadeInDown">
                      Web Designing & Development
                    </h2>
                    <p class="animate__animated animate__fadeInUp">
                      Our Services are Including Web Design and Development on
                      Every Platform that you required.
                    </p>
                    <a
                      href="#featured-services"
                      class="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="carousel-item"
                style={{
                  backgroundImage: `url(assets/img/intro-carousel/3.jpg)`,
                }}
              >
                <div class="carousel-container">
                  <div class="container">
                    <h2 class="animate__animated animate__fadeInDown">
                      Logo Designing
                    </h2>
                    <p class="animate__animated animate__fadeInUp">
                      We Create Eye Attractive Logos.
                    </p>
                    <a
                      href="#featured-services"
                      class="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="carousel-item"
                style={{
                  backgroundImage: `url(assets/img/intro-carousel/4.jpg)`,
                }}
              >
                <div class="carousel-container">
                  <div class="container">
                    <h2 class="animate__animated animate__fadeInDown">
                      Branding
                    </h2>
                    <p class="animate__animated animate__fadeInUp">
                      Building a brand identity from the ground up. Rebranding
                      established businesses. Establishing brand positioning and
                      messaging. Creating a branding strategy. Designing company
                      logos. Formulating brand guidelines for design, style and
                      tone.
                    </p>
                    <a
                      href="#featured-services"
                      class="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="carousel-item"
                style={{
                  backgroundImage: `url(assets/img/intro-carousel/5.jpg)`,
                }}
              >
                <div class="carousel-container">
                  <div class="container">
                    <h2 class="animate__animated animate__fadeInDown">
                      Mobile Hybrid Applications
                    </h2>
                    <p class="animate__animated animate__fadeInUp">
                      This includes expert business analysis, design and
                      development of your mobile application from idea to
                      launch, integrating the new product into your
                      infrastructure and providing further optimization and
                      scale-up on demand..
                    </p>
                    <a
                      href="#featured-services"
                      class="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              class="carousel-control-prev"
              href="#introCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon ion-chevron-left"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>

            <a
              class="carousel-control-next"
              href="#introCarousel"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon ion-chevron-right"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
      <section id="featured-services">
        <div class="container">
          <div class="row">
            <Spin>
              <div class="col-lg-4 box">
                <i class="ion-ios-bookmarks-outline"></i>
                <h4 class="title">
                  <a href="" className="text-success">
                    Web Design & Development
                  </a>
                </h4>
                <p class="description">
                  Web Design & Development Based on React, Vue, Laravel,
                  WordPress with PHP and JavaScript
                </p>
              </div>
            </Spin>
            <div className="col-lg-4 box box-bg">
              <Zoom>
                <div class="col-lg-4 box box-bg">
                  <i class="ion-ios-stopwatch-outline"></i>
                  <h4 class="title">
                    <a href="" className="text-success">
                      Logo Design
                    </a>
                  </h4>
                  <p class="description">
                    Your logo stands in for your business's brand in so many
                    ways, whenever your customers come into contact with your
                    business or website. The logo becomes a readily-identifiable
                    symbol of the brand, which helps keep your business
                    front-of-mind for the people you will turn into customers.
                  </p>
                </div>
              </Zoom>
            </div>
            <Spin>
              <div class="col-lg-4 box">
                <i class="ion-ios-heart-outline"></i>
                <h4 class="title">
                  <a href="" className="text-success">
                    Hybdrid Mobile Application
                  </a>
                </h4>
                <p class="description">
                  Mobile Application on React Native which runs on Android as
                  well as IOS
                </p>
              </div>
            </Spin>
          </div>
        </div>
      </section>

      <Aboutus />
      <Services />
      <Skills />
      <Fact />
      <Portfolio />
      <Clients />
      <Freelancer />
      <Team />
      <Contact />
    </div>
  );
}
