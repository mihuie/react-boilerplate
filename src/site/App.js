import React, { Component } from 'react'; //eslint-disable-line no-unused-vars

export default ({
  children,
}) => {
  const path = location.hash.substr(2).split('/').shift();
  return (
    <div className="appContainer" data-page={path}>
      <div className="mainPanel">{children}</div>
    </div>
  );
};
