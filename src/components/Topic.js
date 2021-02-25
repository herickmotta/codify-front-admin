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
  SingleFieldList,
  ChipField,
  ReferenceManyField,
  Datagrid,
  List,
  ReferenceField,
  EditButton,
  DeleteButton,
  ReferenceInput,
  SelectInput,
  CreateButton,
  TopToolbar,
  DeleteWithConfirmButton,
} from "react-admin";

const TopicActions = ({ basePath, data }) => (
  <TopToolbar>
    <CreateButton basePath={basePath} record={data} />
  </TopToolbar>
);

export const TopicList = (props) => (
  <List actions={<TopicActions />} {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField source="chapterId" reference="chapters">
        <TextField label="Chapter" source="name" />
      </ReferenceField>
      <ReferenceManyField
        label="Exercises"
        reference="exercises"
        target="topicId"
      >
        <SingleFieldList>
          <ChipField source="id" />
        </SingleFieldList>
      </ReferenceManyField>
      <ReferenceManyField label="Theory" reference="theories" target="topicId">
        <SingleFieldList>
          <ChipField source="id" />
        </SingleFieldList>
      </ReferenceManyField>
      <EditButton />
      <DeleteWithConfirmButton confirmContent="Are you sure? This will delete all dependencies of this entry, like exercises and theories" />
    </Datagrid>
  </List>
);

export const TopicCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceInput source="chapterId" reference="chapters">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const TopicEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <ReferenceInput source="chapterId" reference="chapters">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const TopicShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceManyField
        label="Exercises"
        reference="exercises"
        target="topicId"
      >
        <Datagrid>
          <TextField source="id" />
          <EditButton />
          <CreateButton />
          <DeleteButton />
        </Datagrid>
      </ReferenceManyField>

      <ReferenceManyField
        label="Theories"
        reference="theories"
        target="topicId"
      >
        <Datagrid>
          <TextField source="id" />
          <TextField source="youtubeLink" />
          <EditButton />
          <CreateButton />
          <DeleteButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);
