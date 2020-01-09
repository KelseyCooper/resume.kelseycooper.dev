import React from 'react';
import { useHistory } from "react-router-dom";

import MiniConsole from '../components/MiniConsole';
import ResumeLogo from '../components/ResumeLogo';
import { resumeIntro } from '../content/Resume';
import ResumeItem from '../components/ResumeItem';
import {
  resumeSkills,
  resumeProjects,
  resumeExperience,
  resumeEducation } from '../content/Resume';
import * as S from '../styles/components/Resume';

function Resume({hideReturnButton}) {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  }

  return (
    <S.Resume>
      {!hideReturnButton && (
        <MiniConsole
          clickAction={handleClick}
          text=">Back"
          positionFixed={true}
        />
      )}
      <S.ResumeColumnFirst>
        {resumeIntro.intro && (
          <S.ResumeIntro>
            <ResumeLogo />
            <S.ResumeIntroText>
              {resumeIntro.intro}
            </S.ResumeIntroText>
          </S.ResumeIntro>
        )}
        <ResumeItem title="Skills" type="skills" data={resumeSkills} />
      </S.ResumeColumnFirst>
      <S.ResumeColumnSecond>
        <ResumeItem title="Projects" type="projects" data={resumeProjects} />
        <ResumeItem title="Experience" data={resumeExperience} />
        <ResumeItem title="Education" data={resumeEducation} />
      </S.ResumeColumnSecond>
    </S.Resume>
  )
}

export default Resume;