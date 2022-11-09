const FirstApp = () => {
  
  const getResult = (a, b) => {
    return a + b;
  };

  return (
    <div>
      <h1>CHERLUX {getResult(2, 3)}</h1>
      <p>My first React App</p>
    </div>
  );
};

export default FirstApp;
