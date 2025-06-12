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
            title="Software Engineering Internship @ Integral Pivots"
            date="Since 2025.5"
          />
          <TimelineItem
            title="Software Developer Co-op @ Microserve"
            date="2024.9 — 2024.12"
          />
          <TimelineItem
            title="Software Developer Co-op @ China Telecom"
            date="2024.5 — 2024.8"
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
