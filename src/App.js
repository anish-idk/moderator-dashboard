import { Admin, Resource, defaultTheme } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@mui/icons-material/Book';
import GroupIcon from '@mui/icons-material/Group';
import { UserList } from './UserList';
import { PostList } from './PostList';

const Dashboard = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 40,
    }}
  >
    <div
      style={{
        maxWidth: 600,
        width: '100%',
        background: '#ffffff',
        padding: 24,
        borderRadius: 12,
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      }}
    >
      <h2 style={{ marginBottom: 8 }}>Welcome, Moderator 👋</h2>
      <p style={{ marginBottom: 4 }}>
        Use the menu on the left to review users and their posts.
      </p>
      <p style={{ marginBottom: 4 }}>
        Start with the <strong>Users</strong> tab to understand your community,
        then go to <strong>Posts</strong> to review what they share.
      </p>
      <p style={{ marginTop: 12, color: '#666' }}>
        Tip: You can sort columns, change rows per page, and export data using
        the controls above each table.
      </p>
    </div>
  </div>
);


const myTheme = {
  ...defaultTheme,
  typography: {
    ...defaultTheme.typography,
    fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h2: {
      ...defaultTheme.typography.h2,
      fontWeight: 700,
      fontSize: '2rem',
    },
    body1: {
      ...defaultTheme.typography.body1,
      fontSize: '0.95rem',
    },
  },
  palette: {
    ...defaultTheme.palette,
    primary: { main: '#ff9800' },      
    secondary: { main: '#1976d2' },    
    background: {
      ...defaultTheme.palette.background,
      default: '#f5f5f7',              
    },
  },
};


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard} theme={myTheme}>
    <Resource name="users" list={UserList} icon={GroupIcon} />
    <Resource name="posts" list={PostList} icon={PostIcon} />
  </Admin>
);

export default App;
