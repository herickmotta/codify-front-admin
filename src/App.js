import React from "react";
import { Admin, Resource } from "react-admin";
import { ChapterShow } from "./components/Chapter";
import {
  CourseCreate,
  CourseEdit,
  CourseList,
  CourseShow,
} from "./components/Course";
import { TopicShow } from "./components/Topic";
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
    <Resource name="chapters" show={ChapterShow} />
    <Resource name="topics" show={TopicShow} />
    <Resource name="exercises" />
    <Resource name="theories" />
  </Admin>
);
export default App;
