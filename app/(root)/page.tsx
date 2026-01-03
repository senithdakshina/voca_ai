import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI powerd Practice and Feedback</h2>
          <p className="text-lg">
            Practice on real interview questions & get instence feedback
          </p>
          <Button asChild className="btn-primary maxc-sm:w-full"></Button>
          <Link href="/interview">Start an Interview</Link>
        </div>
        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        ></Image>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard
              key={interview.id}
              role={interview.role}
              type={interview.type}
              techstack={interview.techstack}
            />
          ))}
          <p>You haven&apos;t taken any interviews yet</p>
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an interview</h2>
        {dummyInterviews.map((interview) => (
          <InterviewCard
            key={interview.id}
            role={interview.role}
            type={interview.type}
            techstack={interview.techstack}
          />
        ))}
        -
        <div className="interviews-section">
          <p>There are no interviews available </p>
        </div>
      </section>
    </>
  );
};

export default page;
fdsdf