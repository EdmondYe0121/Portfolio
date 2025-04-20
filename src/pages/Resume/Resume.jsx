import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="University of British Columbia"
            date="2022 — 2026"
            description="Computer Science Major, GPA: 3.8/4.0, Dean's Honors' List"
          />
          <TimelineItem
            title="Hangzhou Foreign Languages School"
            date="2019 — 2022"
            description="Top 5% of the Class"
          />
          {/* <TimelineItem
            title="High school of art and design"
            date="2002 — 2004"
            description="Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos."
          /> */}
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Technical Support Engineer @ Microserve"
            date="2024.8 — 2024.12"
            description={
              <>
                <ul>
                  <li>Implemented an automated asset tracking system using MySQL to monitor 5,000+ devices, flagging 50–60 redundancies monthly for recovery.</li><br />
                  <li>Developed Java Spring REST API to identify duplicate devices and schedule equipment returns, integrated Canada Post API for shipping labels.</li><br />
                  <li>Built AWS-based asset recovery system with Lambda, RDS, SES, Step Functions, and API Gateway, achieving 99.9% uptime and 50% reduction in manual work.</li><br />
                  <li>Used Redis caching to speed up device data lookups, reducing API latency from 200ms to 20ms and easing database load during peak usage.</li>
                </ul>
              </>
            }
          />
        </ol>
      </div>

      {/* <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web design" value={80} />
          <SkillItem title="Graphic design" value={70} />
          <SkillItem title="Branding" value={90} />
          <SkillItem title="WordPress" value={50} />
        </ul>
      </div> */}
    </section>
  );
};

export default Resume;
