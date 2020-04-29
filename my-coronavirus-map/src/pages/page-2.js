import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Sobre o projeto</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>Mapeamento do Coronavirus no mundo</h1>
        <p>Em construção</p>
      </Container>
    </Layout>
  );
};

export default SecondPage;
