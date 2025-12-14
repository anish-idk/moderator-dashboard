import {
  List,
  Datagrid,
  TextField,
  EmailField,
  TextInput,
} from 'react-admin';

const userFilters = [
  <TextInput key="q" label="Search" source="q" alwaysOn />,
];

export const UserList = (props) => (
  <div
    style={{
      padding: 24,
      minHeight: 'calc(100vh - 64px)',
      background:
        'radial-gradient(circle at top left, rgba(37,99,235,0.06), transparent 65%)',
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
            'linear-gradient(120deg,#2563eb 0%,#7c3aed 55%,#f97316 100%)',
          color: '#f9fafb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: 20, fontWeight: 600 }}>User Directory</div>
          <div style={{ fontSize: 13, opacity: 0.9 }}>
            All community members with their contact details.
          </div>
        </div>
        <div style={{ fontSize: 13, opacity: 0.9 }}>10 users loaded</div>
      </div>

      <List
        {...props}
        title=""
        filters={userFilters}
        sx={{
          '& .RaList-content': { padding: 0 },
          '& .MuiTableHead-root': {
            backgroundColor: '#f3f4f6',
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
              backgroundColor: '#f9fafb',
            },
            '& .MuiTableRow-hover:hover': {
              backgroundColor: '#e0ecff',
            },
          }}
        >
          <TextField source="id" label="ID" />
          <TextField source="name" label="Name" />
          <TextField source="username" label="Username" />
          <EmailField source="email" label="Email" />
          <TextField source="phone" label="Phone" />
          <TextField source="website" label="Website" />
        </Datagrid>
      </List>
    </div>
  </div>
);
