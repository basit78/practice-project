import React from "react";
import Fade from "react-reveal/Fade";
export default function Portfolio() {
  return (
    <section id="portfolio" class="section-bg">
      <Fade down>
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            <h1
              class="section-title text-danger"
              className="text-danger"
              style={{
                fontSize: "56px",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
            >
              Our Portfolio
            </h1>
          </header>

          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class=" col-lg-12">
              <ul id="portfolio-flters">
                <li data-filter="*" class="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>

          <div
            class="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <figure>
                  <img
                    src="assets/img/portfolio/app1.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <a
                    href="assets/img/portfolio/app1.jpg"
                    data-lightbox="portfolio"
                    data-title="App 1"
                    class="link-preview"
                  >
                    <i class="ion ion-eye"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="link-details"
                    title="More Details"
                  >
                    <i class="ion ion-android-open"></i>
                  </a>
                </figure>

                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html">App 1</a>
                  </h4>
                  <p>App</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <figure>
                  <img
                    src="assets/img/portfolio/web3.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <a
                    href="assets/img/portfolio/web3.jpg"
                    class="link-preview venobox"
                    data-gall="portfolioGallery"
                    title="Web 3"
                  >
                    <i class="ion ion-eye"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="link-details"
                    title="More Details"
                  >
                    <i class="ion ion-android-open"></i>
                  </a>
                </figure>

                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html">Web 3</a>
                  </h4>
                  <p>Web</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <figure>
                  <img
                    src="assets/img/portfolio/app2.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <a
                    href="assets/img/portfolio/app2.jpg"
                    class="link-preview venobox"
                    data-gall="portfolioGallery"
                    title="App 2"
                  >
                    <i class="ion ion-eye"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="link-details"
                    title="More Details"
                  >
                    <i class="ion ion-android-open"></i>
                  </a>
                </figure>

                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html">App 2</a>
                  </h4>
                  <p>App</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="portfolio-wrap">
                <figure>
                  <img
                    src="assets/img/portfolio/card2.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <a
                    href="assets/img/portfolio/card2.jpg"
                    class="link-preview venobox"
                    data-gall="portfolioGallery"
                    title="Card 2"
                  >
                    <i class="ion ion-eye"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="link-details"
                    title="More Details"
                  >
                    <i class="ion ion-android-open"></i>
                  </a>
                </figure>

                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html">Card 2</a>
                  </h4>
                  <p>Card</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <figure>
                  <img
                    src="assets/img/portfolio/web2.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <a
                    href="assets/img/portfolio/web2.jpg"
                    class="link-preview venobox"
                    data-gall="portfolioGallery"
                    title="Web 2"
                  >
                    <i class="ion ion-eye"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="link-details"
                    title="More Details"
                  >
                    <i class="ion ion-android-open"></i>
                  </a>
                </figure>

                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html">Web 2</a>
                  </h4>
                  <p>Web</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <figure>
                  <img
                    src="assets/img/portfolio/app3.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <a
                    href="assets/img/portfolio/app3.jpg"
                    class="link-preview venobox"
                    data-gall="portfolioGallery"
                    title="App 3"
                  >
                    <i class="ion ion-eye"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="link-details"
                    title="More Details"
                  >
                    <i class="ion ion-android-open"></i>
                  </a>
                </figure>

                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html">App 3</a>
                  </h4>
                  <p>App</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="portfolio-wrap">
                <figure>
                  <img
                    src="assets/img/portfolio/card1.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <a
                    href="assets/img/portfolio/card1.jpg"
                    class="link-preview venobox"
                    data-gall="portfolioGallery"
                    title="Card 1"
                  >
                    <i class="ion ion-eye"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="link-details"
                    title="More Details"
                  >
                    <i class="ion ion-android-open"></i>
                  </a>
                </figure>

                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html">Card 1</a>
                  </h4>
                  <p>Card</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="portfolio-wrap">
                <figure>
                  <img
                    src="assets/img/portfolio/card3.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <a
                    href="assets/img/portfolio/card3.jpg"
                    class="link-preview venobox"
                    data-gall="portfolioGallery"
                    title="Card 3"
                  >
                    <i class="ion ion-eye"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="link-details"
                    title="More Details"
                  >
                    <i class="ion ion-android-open"></i>
                  </a>
                </figure>

                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html">Card 3</a>
                  </h4>
                  <p>Card</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <figure>
                  <img
                    src="assets/img/portfolio/web1.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <a
                    href="assets/img/portfolio/web1.jpg"
                    class="link-preview venobox"
                    data-gall="portfolioGallery"
                    title="Web 1"
                  >
                    <i class="ion ion-eye"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="link-details"
                    title="More Details"
                  >
                    <i class="ion ion-android-open"></i>
                  </a>
                </figure>

                <div class="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html">Web 1</a>
                  </h4>
                  <p>Web</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
