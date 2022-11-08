import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";
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



describe('App', () => {

    it("should render the App", () => {

        const view = render(
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        );
        expect(view).toBeDefined();
        expect(view).toMatchSnapshot();
    });

    it("should render login", () => {
        const view = render(
          <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Provider>
        );
        
        expect(view.queryByTestId("login-component")).toBeInTheDocument();

      });

      it("should render dashboard on successful logon", async () => {
        await store.dispatch(setAuthedUser("tylermcginnis"));
        await store.dispatch(handleInitialData());
   
        const view = render(
          <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Provider>
        );
    
        const heading = view.getByTestId("dashboard-component");
        expect(heading).toBeInTheDocument();
      });

});