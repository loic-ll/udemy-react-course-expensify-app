//Higher Order Component - A component that renders antoher component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstact state

console.log('HOC running');

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login!</p>}
    </div>
  );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="There are details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Logged In as LOL!" />, document.getElementById('app'));