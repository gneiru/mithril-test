import "./App.css";

export const App = () => {
  console.log("Hello from Mithril!");
  return {
    view: () => {
      return (
        <>
          <h1>My Mithril App</h1>
        </>
      );
    },
  };
};
