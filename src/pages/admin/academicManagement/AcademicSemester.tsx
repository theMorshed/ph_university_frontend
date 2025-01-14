import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academiSemesterApi";

const AcademicSemester = () => {
    const data = useGetAllSemestersQuery(undefined);
    console.log(data);
    return (
        <div>
            This is academic sementer manager page.
        </div>
    );
};

export default AcademicSemester;