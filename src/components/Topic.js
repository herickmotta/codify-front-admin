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
} from "react-admin";

export const ChapterCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput multiline source="description" />
      <TextInput source="photo" />
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
        <SingleFieldList>
          <ChipField source="id" />
        </SingleFieldList>
      </ReferenceManyField>

      <ReferenceManyField
        label="Theories"
        reference="theories"
        target="topicId"
      >
        <Datagrid>
          <TextField source="id" />
          <TextField source="youtubeLink" />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);
