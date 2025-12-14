import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  TextInput,
} from 'react-admin';

const postFilters = [
  <TextInput key="q" label="Search" source="q" alwaysOn />,
];

export const PostList = (props) => (
  <div
    style={{
      padding: 24,
      minHeight: 'calc(100vh - 64px)',
      background:
        'radial-gradient(circle at top right, rgba(249,115,22,0.08), transparent 65%)',
    }}
  >
    <div
      style={{
        maxWidth: 1150,
        margin: '0 auto',
        borderRadius: 18,
        overflow: 'hidden',
        boxShadow: '0 16px 40px rgba(15,23,42,0.25)',
        backgroundColor: '#ffffff',
      }}
    >
      <div
        style={{
          padding: '14px 20px',
          background:
            'linear-gradient(120deg,#f97316 0%,#fb923c 40%,#7c3aed 100%)',
          color: '#f9fafb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: 20, fontWeight: 600 }}>All Posts</div>
          <div style={{ fontSize: 13, opacity: 0.9 }}>
            Browse content and spot spam or low‑quality posts.
          </div>
        </div>
        <div style={{ fontSize: 13, opacity: 0.9 }}>100 posts loaded</div>
      </div>

      <List
        {...props}
        title=""
        filters={postFilters}
        sx={{
          '& .RaList-content': { padding: 0 },
          '& .MuiTableHead-root': {
            backgroundColor: '#fef3c7',
          },
        }}
      >
        <Datagrid
          rowClick="show"
          sx={{
            '& .MuiTableCell-head': {
              fontWeight: 600,
              fontSize: 13,
              color: '#4b5563',
            },
            '& .MuiTableRow-root:nth-of-type(even)': {
              backgroundColor: '#fffbeb',
            },
            '& .MuiTableRow-hover:hover': {
              backgroundColor: '#fef3c7',
            },
          }}
        >
          <TextField source="id" label="ID" />
          <ReferenceField source="userId" reference="users" label="Author">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" label="Title" />
          <TextField source="body" label="Content" />
        </Datagrid>
      </List>
    </div>
  </div>
);
