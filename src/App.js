import React from "react";
import { Admin, Resource } from "react-admin";
import {
  CourseCreate,
  CourseEdit,
  CourseList,
  CourseShow,
} from "./components/Course";
import dataProvider from "./providers/dataProvider";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="courses"
      list={CourseList}
      create={CourseCreate}
      edit={CourseEdit}
      show={CourseShow}
    />
  </Admin>
);
export default App;
