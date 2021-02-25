/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {
  List,
  Create,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  Edit,
  ImageField,
  Show,
  SimpleShowLayout,
  ReferenceManyField,
  CreateButton,
  ShowButton,
  DeleteWithConfirmButton,
} from "react-admin";

export const CourseList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField multiline source="description" />
      <ImageField source="photo" />
      <EditButton />
      <ShowButton />
      <DeleteWithConfirmButton confirmContent="Are you sure? This will delete all dependencies of this entry, like chapters, topics, exercises and theories" />
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
        label="Chapters"
        reference="chapters"
        target="courseId"
      >
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <ShowButton />
          <EditButton />
          <CreateButton />
          <DeleteWithConfirmButton confirmContent="Are you sure? This will delete all dependencies of this entry, like chapters, topics, exercises and theories" />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);
