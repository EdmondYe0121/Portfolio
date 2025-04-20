/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: `${import.meta.env.BASE_URL}/images/icon-dev.svg`,
    title: "Full Stack Development",
    description: "Building scalable web applications using React, Node.js, and Spring Boot with secure backend APIs and responsive frontends."
  },
  {
    icon: `${import.meta.env.BASE_URL}images/cloud-computing.png`,
    title: "Cloud Infrastructure",
    description: "Deploying and maintaining applications using AWS (EC2, Lambda, S3, RDS) and Docker for scalable and reliable performance."
  },
  {
    icon: `${import.meta.env.BASE_URL}images/integration.png`,
    title: "Database & API Engineering",
    description: "Designing efficient MySQL and MongoDB databases with optimized queries, stored procedures, and RESTful API integrations."
  },
  {
    icon: `${import.meta.env.BASE_URL}images/settings.png`,
    title: "Automation",
    description: "Automating hardware imaging and device deployment using PowerShell, managing asset tracking systems, and supporting large-scale IT operations."
  }
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
      I’m a third-year Computer Science student at the University of British Columbia with a passion for building scalable, 
      user-focused software systems. My experience spans full-stack development, cloud infrastructure, and technical support engineering, 
      where I’ve contributed to both backend API design and intuitive frontend experiences.
      </p>

      <p>
      I’ve worked on impactful projects such as a warehouse management system, a Chrome extension for web accessibility, and a full-stack campus navigation tool. 
      I thrive in environments where I can apply my technical skills—Java, Python, TypeScript, SQL, 
      and cloud technologies—to solve real-world problems, collaborate across teams, and continually grow as a developer. 
      </p>

      <p>
      I am currently looking for Software Development Engineer intern roles.
      </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - testimonials
    --> */}

    {/* <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section> */}


    {/* <!--
      - clients
    --> */}

    {/* <section className="clients">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-1-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-2-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-3-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-4-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-5-color.png" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/logo-6-color.png"alt="client logo"/>
          </a>
        </li>

      </ul>

    </section> */}

  </article>
  )
}

export default About