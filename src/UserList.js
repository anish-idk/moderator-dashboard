import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = props => (
  <List {...props} title="User Directory">
    <Datagrid rowClick="show">
      <TextField source="id" label="ID" />
      <TextField source="name" label="Name" />
      <TextField source="username" label="Username" />
      <EmailField source="email" label="Email" />
      <TextField source="phone" label="Phone" />
      <TextField source="website" label="Website" />
    </Datagrid>
  </List>
);
