/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {
  Create,
  TextField,
  SimpleForm,
  TextInput,
  Edit,
  Datagrid,
  List,
  ReferenceField,
  EditButton,
  DeleteButton,
  ReferenceInput,
  SelectInput,
  CreateButton,
  TopToolbar,
} from "react-admin";

const ExercisesActions = ({ basePath, data }) => (
  <TopToolbar>
    <CreateButton basePath={basePath} record={data} />
  </TopToolbar>
);

export const ExerciseList = (props) => (
  <List actions={<ExercisesActions />} {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField source="topicId" reference="topics">
        <TextField label="Topic" source="name" />
      </ReferenceField>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const ExerciseCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="topicId" reference="topics">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const ExerciseEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
    </SimpleForm>
  </Edit>
);
