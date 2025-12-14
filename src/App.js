import {
  Admin,
  Resource,
  defaultTheme,
  Layout,
  Sidebar,
  AppBar,
} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@mui/icons-material/Book';
import GroupIcon from '@mui/icons-material/Group';
import { UserList } from './UserList';
import { PostList } from './PostList';

const DashboardPage = () => (
  <div
    style={{
      padding: 24,
      minHeight: 'calc(100vh - 64px)',
      background:
        'radial-gradient(circle at top left, rgba(37,99,235,0.12), transparent 60%), radial-gradient(circle at bottom right, rgba(249,115,22,0.12), transparent 55%)',
    }}
  >
    <div
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '2fr 1.3fr',
        gridTemplateRows: 'minmax(220px, auto) minmax(160px, auto)',
        gap: 20,
      }}
    >
      <div
        style={{
          gridColumn: '1 / 3',
          borderRadius: 20,
          padding: 28,
          background:
            'linear-gradient(120deg,#2563eb 0%,#7c3aed 50%,#f97316 100%)',
          color: '#f9fafb',
          boxShadow: '0 20px 50px rgba(15,23,42,0.55)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <div>
          <h2 style={{ margin: 0, marginBottom: 10, fontSize: 26 }}>
            Moderator Overview
          </h2>
          <p style={{ margin: 0, opacity: 0.9, maxWidth: 460 }}>
            Review users, scan posts, and keep the community healthy from one
            place.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 28 }}>
          <div>
            <div style={{ fontSize: 12, opacity: 0.85 }}>Users</div>
            <div style={{ fontSize: 30, fontWeight: 600 }}>10</div>
          </div>
          <div>
            <div style={{ fontSize: 12, opacity: 0.85 }}>Posts</div>
            <div style={{ fontSize: 30, fontWeight: 600 }}>100</div>
          </div>
        </div>
      </div>

      <div
        style={{
          borderRadius: 18,
          padding: 20,
          backgroundColor: '#ffffff',
          boxShadow: '0 10px 30px rgba(15,23,42,0.18)',
          borderTop: '3px solid #2563eb',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <h3 style={{ margin: 0 }}>People overview</h3>
        <p style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>
          See who is in your community and how to reach them.
        </p>
        <ul
          style={{
            margin: 8,
            paddingLeft: 18,
            fontSize: 14,
            color: '#4b5563',
          }}
        >
          <li>
            Browse all users with names, usernames, email, phone and website.
          </li>
          <li>Use search and sorting to quickly find a specific person.</li>
        </ul>
      </div>

      <div
        style={{
          borderRadius: 18,
          padding: 20,
          backgroundColor: '#ffffff',
          boxShadow: '0 10px 30px rgba(15,23,42,0.18)',
          borderTop: '3px solid #f97316',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <h3 style={{ margin: 0 }}>Content overview</h3>
        <p style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>
          Keep track of what is being posted in the community.
        </p>
        <ul
          style={{
            margin: 8,
            paddingLeft: 18,
            fontSize: 14,
            color: '#4b5563',
          }}
        >
          <li>
            View all posts with title, body and the author they belong to.
          </li>
          <li>Search, sort and scan posts to spot spam or issues fast.</li>
        </ul>
      </div>
    </div>
  </div>
);

const myTheme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    primary: { main: '#2563eb' },
    secondary: { main: '#f97316' },
    background: {
      default: '#e5e7eb',
      paper: '#ffffff',
    },
  },
  typography: {
    ...defaultTheme.typography,
    fontFamily: '"Inter","Segoe UI",sans-serif',
    body1: { ...defaultTheme.typography.body1, fontSize: '0.9rem' },
  },
  sidebar: {
    width: 260,
    closedWidth: 70,
  },
  components: {
    MuiTable: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          paddingTop: 6,
          paddingBottom: 6,
        },
      },
    },
  },
};

const MySidebar = (props) => (
  <Sidebar
    {...props}
    sx={{
      '& .RaSidebar-drawerPaper': {
        backgroundColor: '#0f172a',
        color: '#e5e7eb',
        borderRight: '1px solid #111827',
        paddingTop: 12,
      },
      '& .RaMenuItemLink-root': {
        borderRadius: 999,
        margin: '8px 12px',
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontWeight: 500,
      },
      '& .RaMenuItemLink-icon': {
        fontSize: 22,
        color: '#9ca3af',
      },
      '& .RaMenuItemLink-active': {
        background:
          'linear-gradient(120deg, #2563eb 0%, #7c3aed 60%, #f97316 100%)',
        boxShadow: '0 10px 25px rgba(15,23,42,0.45)',
        color: '#f9fafb',
      },
      '& .RaMenuItemLink-active .RaMenuItemLink-icon': {
        color: '#ffffff',
      },
    }}
  />
);

const MyAppBar = (props) => (
  <AppBar
    {...props}
    color="primary"
    sx={{
      '& .RaAppBar-title': { fontWeight: 600 },
      minHeight: 48,
    }}
  />
);

const MyLayout = (props) => (
  <Layout {...props} appBar={MyAppBar} sidebar={MySidebar} />
);

const dataProvider = jsonServerProvider(
  'https://jsonplaceholder.typicode.com'
);

const App = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={DashboardPage}
    theme={myTheme}
    layout={MyLayout}
  >
    <Resource name="users" list={UserList} icon={GroupIcon} />
    <Resource name="posts" list={PostList} icon={PostIcon} />
  </Admin>
);

export default App;
