import React from 'react';

import * as S from '../styles/components/Footer';

function Footer() {
  return (
    <S.Footer>
      <S.FooterLinkList>
        <S.FooterLink>
          <a href="mailto:kelsey@kcooper.me" target="_blank" rel="noopener noreferrer">Email</a>
        </S.FooterLink>
        <S.FooterLink>
          <a href="https://github.com/KelseyCooper" target="_blank" rel="noopener noreferrer">Github</a>
        </S.FooterLink>
        <S.FooterLink>
          <a href="https://www.linkedin.com/in/kcoop19/" target="_blank" rel="noopener noreferrer">Email</a>
        </S.FooterLink>
      </S.FooterLinkList>
    </S.Footer>
  )
}

export default Footer;