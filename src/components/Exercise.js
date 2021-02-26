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

import RichTextInput from "ra-input-rich-text";

const ExercisesActions = ({ basePath, data }) => (
  <TopToolbar>
    <CreateButton basePath={basePath} record={data} />
  </TopToolbar>
);

export const ExerciseList = (props) => (
  <List actions={<ExercisesActions />} {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField source="topicId" reference="topics">
        <TextField label="Topic" source="name" />
      </ReferenceField>
      <TextField source="wording" />
      <TextField source="example" />
      <TextField source="defaultCode" />
      <TextField source="test" />
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
      <TextInput source="name" />
      <RichTextInput
        label="Wording"
        source="wording"
        validation={{ required: true }}
      />
      <TextInput
        multiline
        fullWidth
        source="example"
        initialValue="Quando enviado x retorna x"
      />
      <TextInput
        multiline
        fullWidth
        source="defaultCode"
        initialValue={`function nomeDaFuncao(param){
  //insira seu código aqui
}`}
      />
      <TextInput
        multiline
        fullWidth
        source="test"
        initialValue={`describe("nomeDoExercicio", () => {
	it("casoDeTeste", () => {
		
	});
});`}
      />
    </SimpleForm>
  </Create>
);

export const ExerciseEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextField source="name" />
      <RichTextInput label="wording" source="wording" />
      <TextField fullWidth source="example" />
      <TextField fullWidth source="defaultCode" />
      <TextField fullWidth source="test" />
    </SimpleForm>
  </Edit>
);
