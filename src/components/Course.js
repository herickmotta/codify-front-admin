/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {
  List,
  Create,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  SimpleForm,
  TextInput,
  Edit,
  ImageField,
  Show,
  SimpleShowLayout,
  ReferenceManyField,
  CreateButton,
} from "react-admin";

export const CourseList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField multiline source="description" />
      <ImageField source="photo" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CourseCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput multiline source="description" />
      <TextInput source="photo" />
    </SimpleForm>
  </Create>
);

export const CourseEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput multiline source="description" />
      <TextInput source="photo" />
    </SimpleForm>
  </Edit>
);

export const CourseShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField multiline source="description" />
      <ImageField source="photo" />

      <ReferenceManyField
        label="chapters"
        reference="chapters"
        target="courseId"
      >
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
          <CreateButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);
