import React from "react";

export default function Clients() {
  return (
    <section id=".clients">
      <div class="container" data-aos="zoom-in">
        <header class="section-header">
          <h1
            className="text-danger"
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            Our Clients
          </h1>
        </header>

        <div class="owl-carousel clients-carousel">
          <img src="assets/img/clients/client-1.png" alt="" />
          <img src="assets/img/clients/client-2.png" alt="" />
          <img src="assets/img/clients/client-3.png" alt="" />
          <img src="assets/img/clients/client-4.png" alt="" />
          <img src="assets/img/clients/client-5.png" alt="" />
          <img src="assets/img/clients/client-6.png" alt="" />
          <img src="assets/img/clients/client-7.png" alt="" />
          <img src="assets/img/clients/client-8.png" alt="" />
        </div>
      </div>
    </section>
  );
}
