import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { BiJoystick } from 'react-icons/bi'
import { experienceData } from 'src/constants/data'
import { styles } from 'src/constants/styles'

export default function Experience() {
  return (
    <div className='container mt-20 text-center'>
      <h1 className={styles.heroSubText + 'mb-2 lg:mb-2'}>WHAT I HAVE DONE SO FAR</h1>
      <h1 className={styles.heroHeadText + ' '}>Work Experience</h1>
      <VerticalTimeline>
        {experienceData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className='vertical-timeline-element--work text-left'
            contentStyle={{ background: 'rgb(31 41 55)', color: '' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(31 41 55)' }}
            date={item.date}
            iconStyle={{ background: 'rgb(31 41 55)', color: '#fff' }}
            icon=''
          >
            <h3 className='vertical-timeline-element-title text-lg font-semibold'>{item.title}</h3>
            <h4 className='vertical-timeline-element-subtitle'>{item.subTitle}</h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}
