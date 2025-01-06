import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    }, 
    {
        path: '/admin',
        element: <App />,
        children: [
            {
                path: 'create-admin',
                element: <CreateAdmin />
            },
            {
                path: 'create-faculty',
                element: <CreateFaculty />
            },
            {
                path: 'create-student',
                element: <CreateStudent />
            }
        ]
    }
]);

export default router;