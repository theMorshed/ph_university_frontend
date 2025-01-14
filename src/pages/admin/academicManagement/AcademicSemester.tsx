import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academiSemesterApi";

const AcademicSemester = () => {
    const data = useGetAllSemestersQuery(undefined);
    if (data) {
        console.log(data?.data);
    }
    return (
        <div>
            This is academic sementer manager page.
        </div>
    );
};

export default AcademicSemester;