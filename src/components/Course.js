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
} from "react-admin";

export const CourseList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
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
