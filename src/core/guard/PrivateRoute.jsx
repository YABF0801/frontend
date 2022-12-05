import { Navigate, Outlet } from 'react-router-dom';
import DashboardLayout from '../../views/dashboard/layouts/DashboardLayout';
import { HOME } from '../config/routes/paths';
import { useAuthContent } from '../context/authContext';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthContent()

  if (!isAuthenticated) return <Navigate to={HOME} />

  return (
    <div>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </div>
  )
}

export default PrivateRoute