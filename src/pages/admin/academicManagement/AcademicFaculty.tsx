import { Button, Table, TableColumnsType } from "antd";
import { useGetAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagementApi";
import { TAcademicFaculty } from "../../../types/academicManagement.types";

export type TTableData = Pick<TAcademicFaculty, 'name'>

const AcademicFaculty = () => {
    const {data: academicFacultyData, isFetching} = useGetAcademicFacultiesQuery(undefined);

    const tableData = academicFacultyData?.data?.map(({_id, name}) => ({
        key: _id, name
    }));

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',            
        },
        {
            title: 'Action',
            key: 'x',
            render: () => {
                return <div><Button>Update</Button></div>
            }
        }
    ];

    return (
        <Table
            loading={isFetching}
            columns={columns}
            dataSource={tableData}
        />
    );
};

export default AcademicFaculty;