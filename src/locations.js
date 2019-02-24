// in src/locations.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  DisabledInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  BooleanInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const LocationFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="location" alwaysOn />
  </Filter>
);

export const LocationList = (props) => (
  <List {...props} filters={<LocationFilter />}>
    <Datagrid>
      <TextField source="location" />
      <TextField source="description" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" />
    </Datagrid>
  </List>
);

export const LocationShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="location" />
      <TextField source="description" />
    </SimpleShowLayout>
  </Show>
);

export const LocationCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="location" />
      <TextInput source="description" />
      <BooleanInput label="Beach" source="beach" />
      <BooleanInput label="Cafe" source="cafe" />
      <BooleanInput label="Attractions" source="attractions" />
    </SimpleForm>
  </Create>
);

export const LocationEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="location" />
      <TextInput source="description" />
      <BooleanInput label="Beach" source="beach" />
      <BooleanInput label="Cafe" source="cafe" />
      <BooleanInput label="Attractions" source="attractions" />
    </SimpleForm>
  </Edit>
);
