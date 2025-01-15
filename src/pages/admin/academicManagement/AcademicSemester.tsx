import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagementApi";

const AcademicSemester = () => {
    const data = useGetAllSemestersQuery(undefined);
    console.log(data?.data);
    return (
        <div>
            This is academic sementer manager page.
        </div>
    );
};

export default AcademicSemester;