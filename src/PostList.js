import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  TextInput,
} from 'react-admin';

const postFilters = [<TextInput label="Search title" source="q" alwaysOn />];

export const PostList = props => (
  <List {...props} title="All Posts" filters={postFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="Post ID" />
      <ReferenceField label="Author" source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" label="Title" />
      <TextField source="body" label="Content" />
    </Datagrid>
  </List>
);
