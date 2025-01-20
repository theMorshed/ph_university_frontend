import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TFaculty, TQueryParam } from "../../../types";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/userManagement.api";
import { Link } from "react-router-dom";

export type TTableData = Pick<TFaculty, 'fullName' | 'id' | 'email' | 'contactNo'>

const FacultyData = () => {
    const [params, setParams] = useState<TQueryParam[]>([]);
    const [page, setPage] = useState(1);

    const {data: facultyData, isFetching} = useGetAllFacultiesQuery([
        {name: 'page', value: page},
        {name: 'sort', value: 'id'},
        ...params
    ])

    const metaData = facultyData?.meta;
    const tableData = facultyData?.data?.map(({_id, fullName, id, email, contactNo, academicDepartment}) => ({
        key: _id,
        fullName,
        id,
        email,
        contactNo,
        academicDepartment: academicDepartment.name
    }))

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            key: 'fullName',
            dataIndex: 'fullName',            
        },
        {
            title: 'Faculty ID',
            key: 'id',
            dataIndex: 'id',            
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',
        },
        {
            title: 'Contact No',
            key: 'contactNo',
            dataIndex: 'contactNo',
        },
        {
            title: 'Department',
            key: 'academicDepartment',
            dataIndex: 'academicDepartment',
        },
        {
            title: 'Action',
            key: 'x',
            render: (item) => {
                return (
                    <Space>
                        <Link to={`/admin/faculty-data/${item.key}`}><Button>Details</Button></Link>
                        <Button>Update</Button>
                        <Button>Block</Button>
                    </Space>
                )
            }
        }
    ];

    const onChange: TableProps<TTableData>['onChange'] = (
        _pagination,
        filters,
        _sorter,
        extra
    ) => {
        if (extra.action === 'filter') {
        const queryParams: TQueryParam[] = [];

        filters.name?.forEach((item) =>
            queryParams.push({ name: 'name', value: item })
        );

        filters.year?.forEach((item) =>
            queryParams.push({ name: 'year', value: item })
        );

        setParams(queryParams);
        }
    };

    return (
        <>
            <Table
                loading={isFetching}
                columns={columns}
                dataSource={tableData}
                onChange={onChange}
                pagination={false}
            />
            <Pagination 
                current={page}
                onChange={(value) => setPage(value)}
                pageSize={metaData?.limit}
                total={metaData?.total}
            />
        </>
    );
};

export default FacultyData;