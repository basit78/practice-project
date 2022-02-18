import React from "react";

export default function Skills() {
  return (
    <div>
      <section id="skills">
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            <h1
              className="text-danger"
              style={{
                fontSize: "56px",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
            >
              Our Skills
            </h1>
            <h2 style={{ fontWeight: "bold" }}>
              This chart shows the skill percentage of our{" "}
            </h2>
            <h2
              className="text-primary font-bold"
              style={{
                fontFamily: "sans-serif",
                fontSize: "50px",
                fontWeight: "bold",
              }}
            >
              HARD WORK
            </h2>
          </header>

          <div class="skills-content">
            <div class="progress">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span class="skill">
                  HTML <i class="val">100%</i>
                </span>
              </div>
            </div>

            <div class="progress">
              <div
                class="progress-bar bg-info"
                role="progressbar"
                aria-valuenow="90"
                // aria-valuemin="0"
                aria-valuemax="100"
              >
                <span class="skill">
                  CSS <i class="val">90%</i>
                </span>
              </div>
            </div>

            <div class="progress">
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                aria-valuenow="95"
                // aria-valuemin="0"
                aria-valuemax="100"
              >
                <span class="skill">
                  JavaScript <i class="val">95%</i>
                </span>
              </div>
            </div>

            <div class="progress">
              <div
                class="progress-bar bg-danger"
                role="progressbar"
                aria-valuenow="85"
                // aria-valuemin="0"
                aria-valuemax="100"
              >
                <span class="skill">
                  Photoshop <i class="val">85%</i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
