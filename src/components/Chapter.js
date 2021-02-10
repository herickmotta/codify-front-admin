/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {
  Create,
  TextField,
  SimpleForm,
  TextInput,
  Edit,
  Show,
  SimpleShowLayout,
  ReferenceManyField,
  ReferenceInput,
  SelectInput,
  Datagrid,
} from "react-admin";

export const ChapterCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceInput source="courseId" reference="courses">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const ChapterEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput multiline source="description" />
      <TextInput source="photo" />
    </SimpleForm>
  </Edit>
);

export const ChapterShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceManyField label="Topics" reference="topics" target="chapterId">
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);
