import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminData from "../pages/admin/userManagement/AdminData";
import AdminDetails from "../pages/admin/userManagement/AdminDetails";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import FacultyData from "../pages/admin/userManagement/FacultyData";
import FacultyDetails from "../pages/admin/userManagement/FacultyDetails";
import StudentData from "../pages/admin/userManagement/StudentData";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";

export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        name: 'Academic Management',
        children: [
            {
                name: 'Create A. Semester',
                path: 'create-academic-semester',
                element: <CreateAcademicSemester />
            },
            {
                name: 'Academic Semester',
                path: 'academic-semester',
                element: <AcademicSemester />
            },
            {
                name: 'Create A. Faculty',
                path: 'create-academic-faculty',
                element: <CreateAcademicFaculty />
            },
            {
                name: 'Academic Faculty',
                path: 'academic-faculty',
                element: <AcademicFaculty />
            },
            {
                name: 'Create A. Department',
                path: 'create-academic-department',
                element: <CreateAcademicDepartment />
            },
            {
                name: 'Academic Department',
                path: 'academic-department',
                element: <AcademicDepartment />
            },
        ]
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent />
            },
            {
                name: 'All Students',
                path: 'students-data',
                element: <StudentData />
            },
            {
                path: 'students-data/:studentId',
                element: <StudentDetails />
            },
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: <CreateAdmin />
            },
            {
                name: 'All Admins',
                path: 'admin-data',
                element: <AdminData />
            },
            {
                path: 'admin-data/:adminId',
                element: <AdminDetails />
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty />
            },
            {
                name: 'All Faculties',
                path: 'faculty-data',
                element: <FacultyData />
            },
            {
                path: 'faculty-data/:facultyId',
                element: <FacultyDetails />
            },
        ]
    }
]