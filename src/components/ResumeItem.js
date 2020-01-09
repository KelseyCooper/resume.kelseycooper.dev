import React from 'react';

import * as S from '../styles/components/ResumeItem';

function ResumeItem({title, type, data}) {
  const getSkillItems = () => {
    return data.map(item => {
      return (
        <>
          {item.title && <S.ResumeListItemTitle>{ item.title }</S.ResumeListItemTitle>}
          <S.ResumeListColumn>
            {item.list && item.list.map(listitem => <S.ResumeListColumnItem>{listitem}</S.ResumeListColumnItem>)}
          </S.ResumeListColumn>
        </>
      );
    })
  }

  const getProjectItems = () => {
    return data.map(item => {
      return (
        <>
          <S.ResumeListItemTitle>
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
          </S.ResumeListItemTitle>
          <S.ResumeListRow>
            {item.stack && item.stack.map(listitem => <S.ResumeListRowItem>{listitem}</S.ResumeListRowItem>)}
          </S.ResumeListRow>
          <p>{item.description}</p>
        </>
      )
    })
  }

  const getItems = () => {
    return data.map(item => {
      return (
        <>
          {item.title && <S.ResumeListItemTitle>{item.title}</S.ResumeListItemTitle>}
          {item.duration && <S.ResumeListItemSubtitle>{item.duration}</S.ResumeListItemSubtitle>}
          {item.description && <p>{item.description}</p>}
        </>
      )
    })
  }

  const dataSwitch = (type) => {
    switch(type) {
      case 'skills':
        return getSkillItems();
      case 'projects':
        return getProjectItems();
      default:
        return getItems();
    }
  }

  return (
    <S.ResumeItem>
      {title && <S.ResumeItemTitle>{title}</S.ResumeItemTitle>}
      {dataSwitch(type)}
    </S.ResumeItem>
  )
}

export default ResumeItem;