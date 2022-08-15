import React from "react";
import PropTypes from "prop-types";
function Home({ time }) {
  return (
    <div>
      <h1>Welcome to the Home page</h1>
      <p>the time is {new Date(time).toLocaleTimeString()}</p>
    </div>
  );
}

Home.defaultProps = {
  time: new Date(),
};

Home.propTypes = {
  time: PropTypes.number,
};

export default Home;
