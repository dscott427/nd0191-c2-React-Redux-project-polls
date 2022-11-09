import { setAuthedUser } from "../actions/authedUser";
import reducer from "../reducers";
import middleware from "../middleware";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Nav from "../components/Nav";
import { createStore } from "redux";
import { handleInitialData } from "../actions/shared";
import '@testing-library/jest-dom/extend-expect';

const store = createStore(reducer, middleware);

describe("Nav", () => {
  it("should render nav the component snapshot", async () => {
    await store.dispatch(setAuthedUser("sarahedo"));
    await store.dispatch(handleInitialData());

    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );

    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();

  })

  it("should render the nav component", async () => {
    await store.dispatch(setAuthedUser("sarahedo"));
    await store.dispatch(handleInitialData());

    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );

    expect(view.getByTestId('nav-component')).toBeInTheDocument();

  })

});