import * as React from 'react';
import { LocationList, LocationShow, LocationCreate, LocationEdit } from "./locations";
import { Admin, Resource } from 'react-admin';
import {
  FirebaseRealTimeSaga,
  FirebaseDataProvider
} from 'react-admin-firebase';

const config = require('./FIREBASE_CONFIG.js').config;

const dataProvider = FirebaseDataProvider(config);
const options = {
  observe: ['locations']
}
const firebaseRealtime = FirebaseRealTimeSaga(dataProvider, options);

class App extends React.Component {
  render() {
    return (
      <Admin
        customSagas={[firebaseRealtime]}
        dataProvider={dataProvider}
      >
        <Resource name="locations" list={LocationList} show={LocationShow} create={LocationCreate} edit={LocationEdit} />
      </Admin>
    );
  }
}

export default App;