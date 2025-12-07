import React from 'react'
import dayjs from 'dayjs';
const InterviewCard = ({interviewid ,userid,role,type,techstack,createdAt} :InterviewCardProps) => {
    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
    const formattedate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MM D,YYYY');
  return (
    <div className='card-border w-[350px] max-sm:w-full min-h-96'>
      
    </div>
  )
}

export default InterviewCard
