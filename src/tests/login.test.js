import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import '@testing-library/jest-dom/extend-expect';
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { handleInitialData } from "../actions/shared";

const store = createStore(reducer, middleware);

describe('Login', () => {

  it('Able to submit user name and password with reset', async () => {
    //await store.dispatch(setAuthedUser("tylermcginnis"));
    await store.dispatch(handleInitialData());
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    expect(component.getByTestId('login-component')).toBeInTheDocument();
    var input = component.getByTestId("login-user-name");
    fireEvent.change(input, { target: { value: "tylermcginnis" } });
    var select = component.getByTestId("login-password");
    fireEvent.change(select, { target: { value: "abc321" } });
    var submitButton = component.getByTestId("login-submit-button");
    fireEvent.click(submitButton);

    expect(await component.findByTestId("login-user-name")).toHaveTextContent("");
    expect(await component.findByTestId("login-password")).toHaveTextContent("");

  })

  it('will display a success message if all fields are submitted', async () => {
    await store.dispatch(setAuthedUser("tylermcginnis"));
    await store.dispatch(handleInitialData());
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    expect(component.getByTestId('login-component')).toBeInTheDocument();
    var input = component.getByTestId("login-user-name");
    fireEvent.change(input, { target: { value: "tylermcginnis" } });
    var select = component.getByTestId("login-password");
    fireEvent.change(select, { target: { value: "abc321" } });
    var submitButton = component.getByTestId("login-submit-button");
    fireEvent.click(submitButton);
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>
    );

    expect(await component.findByTestId("dashboard-component")).toBeInTheDocument();

  })

});