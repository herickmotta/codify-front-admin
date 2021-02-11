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
  EditButton,
  DeleteButton,
  List,
  ReferenceField,
  SingleFieldList,
  ChipField,
  ShowButton,
  CreateButton,
} from "react-admin";

export const ChapterList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField source="courseId" reference="courses">
        <TextField label="course" source="name" />
      </ReferenceField>
      <ReferenceManyField label="Topics" reference="topics" target="chapterId">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceManyField>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

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
      <ReferenceInput source="courseId" reference="courses">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const ChapterShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceManyField label="Topics" reference="topics" target="chapterId">
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <ShowButton />
          <EditButton />
          <CreateButton />
          <DeleteButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);
