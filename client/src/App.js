import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';
import ProtectedRoutes from './components/ProtectedRoutes';
import PublicRoute from './components/PublicRoute';
import ApplyDoctor from './pages/ApplyDoctor';
import NotificationPage from './pages/NotificationPage';
function App() {
  const {loading} = useSelector(state => state.alerts)  
  return (
    <>
     <BrowserRouter>
     {loading ? (<Spinner />) :(
      <Routes>
      <Route path='/' element={
      <ProtectedRoutes>
      <HomePage />
      </ProtectedRoutes>
      }/>
      <Route path='/apply-doctor' element={
      <ProtectedRoutes>
      <ApplyDoctor />
      </ProtectedRoutes>
      }/>
      <Route path='/notification' element={
      <ProtectedRoutes>
      <NotificationPage/>
      </ProtectedRoutes>
      }/>
      <Route path='/Login' element={
      <PublicRoute>
 <Login />
      </PublicRoute>
     }/>
      <Route path='/Register' element={
      <PublicRoute>
<Register />
      </PublicRoute>
      }/>
     </Routes>)
     }
    
     </BrowserRouter>
    </>
  );
}

export default App;
