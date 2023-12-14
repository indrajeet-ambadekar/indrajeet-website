import { LuminaIcon } from "lumina-design-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default ({ ...props }) => {
  return (
    <section className='info-section'>
      <VerticalTimeline animate={true}>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "#ea6153", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #ea6153" }}
          date="Sept'23 - present"
          iconStyle={{ background: "rgb(141 99 244)", color: "#fff" }}
          icon={
            <LuminaIcon className='timeline-icon' name='briefcase' size={30} />
          }
        >
          <h3 className='vertical-timeline-element-title'>
            Software Engineering Manager
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Teknobuilt, Mumbai, IN
          </h4>
          <p>
            Engineering Management, Team Leading, Software Solutioning, Team
            Skill Development, Team Mentoring, Strategic Planning, Project
            Planning
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "#ea6153", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #ea6153" }}
          date="Dec'18 - Aug'23"
          iconStyle={{ background: "rgb(141 99 244)", color: "#fff" }}
          icon={
            <LuminaIcon className='timeline-icon' name='briefcase' size={30} />
          }
        >
          <h3 className='vertical-timeline-element-title'>Tech Lead</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            HDFC Life, Mumbai, IN
          </h4>
          <p>
            Software Design, Development Technologies, Product and System
            Integration, Collaboration, Solution Design, Client Requirement
            Management, Leadership, Project Management.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "#ea6153", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #ea6153" }}
          date="Apr'18 - Dec'18"
          iconStyle={{ background: "rgb(141 99 244)", color: "#fff" }}
          icon={
            <LuminaIcon className='timeline-icon' name='briefcase' size={30} />
          }
        >
          <h3 className='vertical-timeline-element-title'>Lead UI Developer</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Medibuddy (Previously known as DoscApp), Bengalure, IN
          </h4>
          <p>UI Development, Leading team of UI developer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "#ea6153", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #ea6153" }}
          date="Jan'18 - Apr'23"
          iconStyle={{ background: "rgb(141 99 244)", color: "#fff" }}
          icon={
            <LuminaIcon className='timeline-icon' name='briefcase' size={30} />
          }
        >
          <h3 className='vertical-timeline-element-title'>
            Senior Software Engineer
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Freight Tiger, Mumbai, IN
          </h4>
          <p>UI Development</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "#ea6153", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #ea6153" }}
          date="Nov'15 - Jan'18"
          iconStyle={{ background: "rgb(141 99 244)", color: "#fff" }}
          icon={
            <LuminaIcon className='timeline-icon' name='briefcase' size={30} />
          }
        >
          <h3 className='vertical-timeline-element-title'>
            Senior Software Engineer
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Reliance Jio Infocomm Pvt. Ltd., Mumbai, IN
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "#ea6153", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #ea6153" }}
          date="Apr'15 - Nov'18"
          iconStyle={{ background: "rgb(141 99 244)", color: "#fff" }}
          icon={
            <LuminaIcon className='timeline-icon' name='briefcase' size={30} />
          }
        >
          <h3 className='vertical-timeline-element-title'>
            Senior Software Engineer
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Tinyowl Technologies Pvt. Ltd., Mumbai, IN
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "#ea6153", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #ea6153" }}
          date="May'14 - Apr'15"
          iconStyle={{ background: "rgb(141 99 244)", color: "#fff" }}
          icon={
            <LuminaIcon className='timeline-icon' name='briefcase' size={30} />
          }
        >
          <h3 className='vertical-timeline-element-title'>Software Engineer</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Frankly.me Pvt. Ltd, Delhi NCR, IN
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "#ea6153", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #ea6153" }}
          date="Dec'18 - May'14"
          iconStyle={{ background: "rgb(141 99 244)", color: "#fff" }}
          icon={
            <LuminaIcon className='timeline-icon' name='briefcase' size={30} />
          }
        >
          <h3 className='vertical-timeline-element-title'>
            Junior Software Engineer
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Codingmart Technologies Pvt. Ltd., Mumbai, IN
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "#ea6153", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #ea6153" }}
          date="Aug'10 - May'14"
          iconStyle={{ background: "rgb(141 99 244)", color: "#fff" }}
          icon={
            <LuminaIcon
              className='timeline-icon'
              name='graduation-cap'
              size={30}
            />
          }
        >
          <h3 className='vertical-timeline-element-title'>
            B.Tech in Computer Science Engineering
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Vellore Institute of Technology, Chennai, IN
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};
