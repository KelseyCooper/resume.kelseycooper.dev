import styled from 'styled-components';
import tokens from '../tokens';
import media from '../media';

export const Resume = styled.section`
  display: flex;
  flex-direction: column;
  max-width: ${tokens.get('maxWidth.resumeMobile')};
  margin-right: auto;
  margin-left: auto;

  @media ${media.tablet} {
    max-width: ${tokens.get('maxWidth.resume')};
    flex-direction: row;
  }
`

export const ResumeColumnFirst = styled.div`
  @media ${media.tablet} {
    width: 30%;
  }
`

export const ResumeColumnSecond = styled.div`
  @media ${media.tablet} {
    width: 70%;
    margin-left: ${tokens.space(4)};
  }
`

export const ResumeIntro = styled.div`
  padding: ${tokens.space(5)};
  margin-top: 0;
  margin-bottom: ${tokens.space(4)};
  background-color: ${tokens.color('white')};
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048);
`

export const ResumeIntroText = styled.p`
  margin-top: ${tokens.space(4)};
  margin-bottom: 0;
`
