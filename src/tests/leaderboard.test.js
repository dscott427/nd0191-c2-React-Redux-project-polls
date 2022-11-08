import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Leaderboard from "../components/Leaderboard";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import '@testing-library/jest-dom/extend-expect';
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { handleInitialData } from "../actions/shared";

const path = "/";
const match = {
  isExact: true,
  path,
  url: path
};

const store = createStore(reducer, middleware);

describe('Leaderboard', () => {

  it('Able to render leaderboard', async () => {
    await store.dispatch(setAuthedUser("tylermcginnis"));
    await store.dispatch(handleInitialData());
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Leaderboard />
        </BrowserRouter>
      </Provider>
    );

    expect(component.getByTestId("leaderboard-component")).toBeInTheDocument();    

  })

});