import React from "react";
import { Admin, Resource, ListGuesser, ShowGuesser } from "react-admin";
import dataProvider from "./providers/dataProvider";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="courses" list={ListGuesser} show={ShowGuesser} />
  </Admin>
);
export default App;
