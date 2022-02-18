import React from "react";

export default function Fact() {
  return (
    <section id="facts">
      <div class="container">
        <header class="section-header">
          <h1
            className="text-danger"
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            Facts
          </h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque
          </p>
        </header>

        <div class="row counters">
          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">274</span>
            <p>Clients</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">421</span>
            <p>Projects</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">1,364</span>
            <p>Hours Of Support</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">18</span>
            <p>Hard Workers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
