import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/component/Home";
import Enter from "@/component/Enter";
import store from "@/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Enter",
    element: <Enter />,
  },
]);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
  }
}

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
