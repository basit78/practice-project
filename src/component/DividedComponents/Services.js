import React from "react";
import Fade from "react-reveal/Fade";

export default function Services() {
  return (
    <div>
      <section id="services">
        <Fade down>
          <div class="container" data-aos="fade-up">
            <header class="section-header wow fadeInUp">
              <h1
                className="text-danger"
                className="text-danger"
                style={{
                  fontSize: "56px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                }}
              >
                Services
              </h1>
              <p>
                Laudem latine persequeris id sed, ex fabulas delectus quo. No
                vel partiendo abhorreant vituperatoribus, ad pro quaestio
                laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta
                zanos paradigno tridexa panatarel.
              </p>
            </header>

            <div class="row">
              <div
                class="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="icon">
                  <i class="ion-ios-analytics-outline"></i>
                </div>
                <h4 class="title">
                  <a href="">Logo Design</a>
                </h4>
                <p class="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
              <div
                class="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="icon">
                  <i class="ion-ios-bookmarks-outline"></i>
                </div>
                <h4 class="title">
                  <a href="">Websites</a>
                </h4>
                <p class="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
              <div
                class="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="icon">
                  <i class="ion-ios-paper-outline"></i>
                </div>
                <h4 class="title">
                  <a href="">Web Applications</a>
                </h4>
                <p class="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
              <div
                class="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="icon">
                  <i class="ion-ios-speedometer-outline"></i>
                </div>
                <h4 class="title">
                  <a href="">Mobile Applications</a>
                </h4>
                <p class="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div
                class="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="icon">
                  <i class="ion-ios-barcode-outline"></i>
                </div>
                <h4 class="title">
                  <a href="">Marketing</a>
                </h4>
                <p class="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
              <div
                class="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div class="icon">
                  <i class="ion-ios-people-outline"></i>
                </div>
                <h4 class="title">
                  <a href="">Branding</a>
                </h4>
                <p class="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
}
