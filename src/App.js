import React from "react";
import { Admin, Resource } from "react-admin";
import { ChapterCreate, ChapterShow } from "./components/Chapter";
import {
  CourseCreate,
  CourseEdit,
  CourseList,
  CourseShow,
} from "./components/Course";
import { TopicShow } from "./components/Topic";
import authProvider from "./providers/authProvider";
import dataProvider from "./providers/dataProvider";

function App() {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource
        name="courses"
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
        show={CourseShow}
      />
      <Resource name="chapters" show={ChapterShow} create={ChapterCreate} />
      <Resource name="topics" show={TopicShow} />
      <Resource name="exercises" />
      <Resource name="theories" />
    </Admin>
  );
}
export default App;
