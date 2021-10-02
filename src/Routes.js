import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import PageNotFound from "./pages/PageNotFound";
import Splash from "./pages/splash";

const Routes = () => {
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    await new Promise((r) => setTimeout(r, 3000));
    setLoading((loading) => !loading);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <Splash />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route component={PageNotFound} /> {/* 잘못된 페이지 접근 시 */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
