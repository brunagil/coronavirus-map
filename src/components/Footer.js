import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; { new Date().getFullYear() }, Bruna Gil - Desenvolvido com Gatsby</p>
      </Container>
    </footer>
  );
};

export default Footer;
