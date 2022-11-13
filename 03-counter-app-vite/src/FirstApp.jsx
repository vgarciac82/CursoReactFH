import PropTypes from "prop-types";

const FirstApp = ({ title, subtitle = "REACT DEVELOPER" }) => {
  const getResult = (a, b) => {
    return a + b;
  };

  return (
    <>
      
        <h1><div data-testid="test-title">{title}</div></h1>
      
      <h2>{subtitle}</h2>
      <p>My first React App</p>
    </>
  );
};

export default FirstApp;

FirstApp.proppTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  subtitle: "BEST REACT DEVELOPER",
};
