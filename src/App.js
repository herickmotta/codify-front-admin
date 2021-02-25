import React from "react";
import { Admin, Resource } from "react-admin";
import {
  ChapterCreate,
  ChapterEdit,
  ChapterList,
  ChapterShow,
} from "./components/Chapter";
import {
  CourseCreate,
  CourseEdit,
  CourseList,
  CourseShow,
} from "./components/Course";
import {
  ExerciseCreate,
  ExerciseEdit,
  ExerciseList,
} from "./components/Exercise";
import { TheoryCreate, TheoryEdit, TheoryList } from "./components/Theory";
import {
  TopicShow,
  TopicList,
  TopicCreate,
  TopicEdit,
} from "./components/Topic";
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
      <Resource
        name="chapters"
        list={ChapterList}
        show={ChapterShow}
        create={ChapterCreate}
        edit={ChapterEdit}
      />
      <Resource
        name="topics"
        list={TopicList}
        show={TopicShow}
        edit={TopicEdit}
        create={TopicCreate}
      />
      <Resource
        name="exercises"
        list={ExerciseList}
        edit={ExerciseEdit}
        create={ExerciseCreate}
      />
      <Resource
        name="theories"
        list={TheoryList}
        edit={TheoryEdit}
        create={TheoryCreate}
      />
    </Admin>
  );
}
export default App;
