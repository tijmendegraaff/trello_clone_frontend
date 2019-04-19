import React from 'react';

import CardList from '../components/CardList';

const BoardPage = ({ match }) => (
  <div>
    <h1>
      This is from my Board page with the id of
      {match.params.id}
    </h1>
    <CardList />
  </div>
);

export default BoardPage;
