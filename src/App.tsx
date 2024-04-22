import React, { useEffect, useState } from 'react';
import './main.global.css';
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Accounts } from "./components/Accounts";
import { AccountView } from "./components/AccountView";
import { AccountDetails } from "./components/AccountDetails";
import { Currency } from "./components/Currency";
import { CurrencyDetails } from "./components/CurrencyDetails";
import { Banks } from "./components/Banks";
import { NotFound } from "./components/NotFound";
import { useUser } from "./hooks/useUser";
import { Provider } from 'react-redux';
import { rootReducer } from "./store/reducer";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function AppComponent() {
  const [mounted, setMounted] = useState(false);
  const [user] = useUser();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted && (user.login
    || user.loginError
    || Object.keys(user).length === 0)
  ) {
    return <Login user={user} />
  }

  if (mounted && (user.signup
    || user.signupError
    || user.signupSuccess)
  ) {
    return <Signup user={user} />
  }

  return (
    <div>
      {mounted && (
        <BrowserRouter>
          <Layout>
            <Header navigation={true} />
            <Content user={user}>
              <Routes>
                {Object.keys(user).length === 0 
                  && <Route path='/signup' element={<Navigate to='/accounts' replace />} />
                  || <Route path='/login' element={<Navigate to='/accounts' replace />} />
                }
                <Route path='/' element={<Navigate to='/accounts' replace />} />
                <Route path='/signup' element={<Navigate to='/accounts' replace />} />
                <Route path='/logout' element={<Navigate to='/login' replace />} />
                <Route path='/accounts' element={<Accounts />} />
                <Route path='/accounts/:number' element={<AccountView />} />
                <Route path='/accounts/:number/details' element={<AccountDetails />} />
                <Route path='/currency' element={<Currency />} />
                <Route path='/currency/details' element={<CurrencyDetails />} />
                <Route path='/banks' element={<Banks />} />
                <Route path='/create-account' element={<Navigate to='/accounts' replace />} />
                <Route path='/transfer-funds' element={<Navigate to={`/accounts/${user.currentAccount}`} replace />} />
                <Route path='/currency-buy' element={<Navigate to='/currency' replace />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Content>
          </Layout>
        </BrowserRouter>
      )}
    </div>
  );
}

export const App = () =>
  <Provider store={store}>
    <AppComponent />
  </Provider>
;
