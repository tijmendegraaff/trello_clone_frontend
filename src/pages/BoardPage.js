import React from 'react';

const BoardPage = ({ match }) => (
  <div>
      This is from my Board page with the id of
    {match.params.id}
  </div>
);

export default BoardPage;
