import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import LoginForm from "./forms/LoginForm";
import SignupForm from "./forms/SignupForm";
import CompanyList from "./company/CompanyList";
import CompanyInfo from "./company/CompanyInfo";
import JobList from "./JobList";
import ProfileForm from "./forms/ProfileForm";
import ProtectedRoute from "./ProtectedRoute";

function Routes({ login, signup }) {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/login">
          <LoginForm login={login} />
        </Route>

        <Route exact path="/signup">
          <SignupForm signup={signup} />
        </Route>

        <ProtectedRoute exact path="/companies">
          <CompanyList />
        </ProtectedRoute>

        <ProtectedRoute exact path="/jobs">
          <JobList />
        </ProtectedRoute>

        <ProtectedRoute exact path="/companies/:handle">
          <CompanyInfo />
        </ProtectedRoute>

        <ProtectedRoute path="/profile">
          <ProfileForm />
        </ProtectedRoute>

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default Routes;
