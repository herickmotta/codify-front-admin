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
  TopToolbar,
  CreateButton,
} from "react-admin";

const TheoryActions = ({ basePath, data }) => (
  <TopToolbar>
    <CreateButton basePath={basePath} record={data} />
  </TopToolbar>
);

export const TheoryList = (props) => (
  <List actions={<TheoryActions />} {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="youtubeLink" />
      <ReferenceField source="topicId" reference="topics">
        <TextField label="Topic" source="name" />
      </ReferenceField>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const TheoryCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="youtubeLink" />
      <ReferenceInput source="topicId" reference="topics">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const TheoryEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="youtubeLink" />
    </SimpleForm>
  </Edit>
);
