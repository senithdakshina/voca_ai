import { getInterviewById, getInterviewByUserId } from '@/lib/actions/genaral.action';
import { redirect } from 'next/navigation';
import React, { use } from 'react'
import Image from "next/image"; 
import { getRandomInterviewCover } from '@/lib/utils';
import { getCurrentUser } from '@/lib/actions/auth.action ';
import DisplayTechIcons from "@/components/DisplayTechIcons"
import Agent from "@/components/Agent";

const page = async({params} : RouteParams) => {
  const {id} = await params;
  const user = await getCurrentUser();
  const interview = await getInterviewByUserId(id);

  if(!interview) {
    redirect('/');
    
    
  }
  return (
    <div>
      <div className='flex flex-row gap-4 justify-between'>
        <div className='flex flex-row gap-4 items-center max-sm:flex-col'>
          <div className='flex flex-row gap-4'>
            <Image src={getRandomInterviewCover()} alt='cover-iamge' width={40} height={40} className='rounded-full object-cover size-[40px]'></Image>
            <h3 className='capitalize'>{interview.role} Interview </h3>

            <DisplayTechIcons techStack={interview.techstack} />
          </div>
          <p className='bg-dark-200 px-4 py-2 rounded-lg h-fit capitalize'>{interview.type}</p>
        </div>
        <Agent userName={user?.name} 
          type={user?.id}
          interviewId={id}
          type="interview"
          questions={interview.questions}
        />

      </div>
    </div>
  )
}

export default page
