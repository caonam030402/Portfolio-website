import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { BiJoystick } from 'react-icons/bi'

export default function Experience() {
  return (
    <div className='container mt-20 text-center'>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work text-left'
          contentStyle={{ background: 'rgb(22, 12, 61)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(22, 12, 61)' }}
          date='09.2020 - Đến nay'
          iconStyle={{ background: 'rgb(22, 12, 61)', color: '#fff' }}
          icon=''
        >
          <h3 className='vertical-timeline-element-title text-lg font-semibold'>Sinh Viên</h3>
          <h4 className='vertical-timeline-element-subtitle'>Công nghệ thông tin</h4>
          <p>Hiện tại tôi đang là sinh viên năm 3 chuyên ngành công nghệ thông tin tại trường đại học Đông Á.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work text-left'
          contentStyle={{ background: 'rgb(22, 12, 61)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(22, 12, 61)' }}
          date='01.2021 - 01.2022'
          iconStyle={{ background: 'rgb(22, 12, 61)', color: '#fff' }}
          icon={<BiJoystick />}
        >
          <h3 className='vertical-timeline-element-title text-lg font-semibold'>Bảo lưu</h3>
          <h4 className='vertical-timeline-element-subtitle'>Kết quả học tập</h4>
          <p>
            Sau khi theo học được 1 kì tại trường đại học, thì mình đã quyết định bảo lưu để thực hiện đam mê trở thành
            game thủ chuyên nghiệp.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work text-left'
          contentStyle={{ background: 'rgb(22, 12, 61)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(22, 12, 61)' }}
          date='05.2021 - 01.2022'
          iconStyle={{ background: 'rgb(22, 12, 61)', color: '#fff' }}
          icon=''
        >
          <h3 className='vertical-timeline-element-title text-lg font-semibold'>Freelance</h3>
          <h4 className='vertical-timeline-element-subtitle'>Graphic Design</h4>
          <p>
            Sau nhiều biến cố xảy ra thì mình trở về nhà, trong thời gian rảnh rỗi thì mình đã tự học Graphic Design sau
            1 vài tháng thì mình bắt đầu nhận được những Job đầu tiên.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work text-left'
          contentStyle={{ background: 'rgb(22, 12, 61)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(22, 12, 61)' }}
          date='05.2021 - 01.2022'
          iconStyle={{ background: 'rgb(22, 12, 61)', color: '#fff' }}
          icon=''
        >
          <h3 className='vertical-timeline-element-title text-lg font-semibold'>Công ty BECA</h3>
          <h4 className='vertical-timeline-element-subtitle'>Graphic Design</h4>
          <p>
            Sau một khoảng thời gian làm Freelance thì tình cờ có một Chú thuê mình làm và sau khi hoàn thành sản phẩm
            thì Chú có ngỏ lời muốn tuyển mình vào công ty với vị trí Graphic Design.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work text-left'
          contentStyle={{ background: 'rgb(22, 12, 61)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(22, 12, 61)' }}
          date='05.2021 - 01.2022'
          iconStyle={{ background: 'rgb(22, 12, 61)', color: '#fff' }}
          icon=''
        >
          <h3 className='vertical-timeline-element-title text-lg font-semibold'>Dược mỹ phẩm Socos</h3>
          <h4 className='vertical-timeline-element-subtitle'>Graphic Design</h4>
          <p>
            Vì thời gian mình còn rảnh rỗi nên mình tiếp tục tìm thêm một công việc cố định nên mình đã quyết định ứng
            tuyển vào Socos. Sau những bài kiểm tra thì mình đã chính thực được nhận vào làm với vị trí Graphic Design.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
