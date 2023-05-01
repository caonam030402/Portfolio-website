import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function Experience() {
  return (
    <div className='container mt-20 text-center'>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work text-left'
          contentStyle={{ background: 'rgb(22, 12, 61)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(22, 12, 61)' }}
          date='2011 - present'
          iconStyle={{ background: 'rgb(22, 12, 61)', color: '#fff' }}
          icon=''
        >
          <h3 className='vertical-timeline-element-title'>Creative Director</h3>
          <h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4>
          <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work text-left'
          contentStyle={{ background: 'rgb(22, 12, 61)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(22, 12, 61)' }}
          date='2011 - present'
          iconStyle={{ background: 'rgb(22, 12, 61)', color: '#fff' }}
          icon=''
        >
          <h3 className='vertical-timeline-element-title'>Creative Director</h3>
          <h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4>
          <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work text-left'
          contentStyle={{ background: 'rgb(22, 12, 61)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(22, 12, 61)' }}
          date='2011 - present'
          iconStyle={{ background: 'rgb(22, 12, 61)', color: '#fff' }}
          icon=''
        >
          <h3 className='vertical-timeline-element-title'>Creative Director</h3>
          <h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4>
          <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work text-left'
          contentStyle={{ background: 'rgb(22, 12, 61)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(22, 12, 61)' }}
          date='2011 - present'
          iconStyle={{ background: 'rgb(22, 12, 61)', color: '#fff' }}
          icon=''
        >
          <h3 className='vertical-timeline-element-title'>Creative Director</h3>
          <h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4>
          <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
