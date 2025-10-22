const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Pagre Gino's"),
    React.createElement(Pizza, {
      name: "Peperoni",
      description: "this is perproni pizza",
    }),
    React.createElement(Pizza, {
      name: "Chesse",
      description: "this is Chessy pizza",
    }),
    React.createElement(Pizza, {
      name: "American",
      description: "this is American pizza",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App)); //Hey , inside of root go and stamp app once -> you get instance of the class or component
