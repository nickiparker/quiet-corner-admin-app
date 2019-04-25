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
  BooleanInput,
  BooleanField
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
      <BooleanField source="beach" />
      <BooleanField source="historical" />
      <BooleanField source="gardens" />
      <BooleanField source="trails" />
      <BooleanField source="cafe" />
    </SimpleShowLayout>
  </Show>
);

export const LocationCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="location" />
      <TextInput source="description" />
      <BooleanInput label="Beach" source="beach" defaultValue={false} />
      <BooleanInput label="Historical" source="historical" defaultValue={false} />
      <BooleanInput label="Gardens" source="gardens" defaultValue={false} />
      <BooleanInput label="Trails" source="trails" defaultValue={false} />
      <BooleanInput label="Cafe" source="cafe" defaultValue={false} />
    </SimpleForm>
  </Create>
);

export const LocationEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="location" />
      <TextInput source="description" />
      <BooleanInput label="Beach" source="beach" defaultValue={false}/>
      <BooleanInput label="Historical" source="historical" defaultValue={false}/>
      <BooleanInput label="Gardens" source="gardens" defaultValue={false}/>
      <BooleanInput label="Trails" source="trails" defaultValue={false}/>
      <BooleanInput label="Cafe" source="cafe" defaultValue={false}/>
    </SimpleForm>
  </Edit>
);
