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
          <p>Esse projeto tem como base o tutorial do <a href="https://bit.ly/3cTd2cm">Colby Fayock</a> do FreeCodeCamp. Todas as modificações são de responsabilidade da desenvolvedora.  </p>
          <p>O site foi criado exclusivamente para fins de estudo, mas todos os dados são baseados na API do projeto <a href="https://github.com/NovelCOVID/API">NovelCOVID</a>. Se houver interesse, postarei a tradução desse tutorial. 
          </p>
          <h3>#FiqueEmCasa</h3>
      </Container>
    </Layout>
  );
};

export default SecondPage;
