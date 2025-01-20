import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { useAddFacultyMutation } from "../../../redux/features/admin/userManagement.api";
import { useGetAcademicDepartmentsQuery } from "../../../redux/features/admin/academicManagementApi";

const facultyDefaultData = {
    "designation": "Assistant Professor",
    "name": {
        "firstName": "Saber",
        "middleName": "ahmed",
        "lastName": "Chowdhury"
    },
    "gender": "female",
    "dob": "2000-05-15T00:00:00.000Z",
    "email": "faculty3@gmail.com",
    "contactNo": "1234567890",
    "emergencyContactNo": "0987654321",
    "bloodGroup": "O+",
    "presentAddress": "123 Elm Street, Springfield",
    "permanentAddress": "456 Maple Avenue, Springfield",
    "academicDepartment": "67739cbe70b22552c1a613cb"
}

const CreateFaculty = () => {

    const {data: dData, isLoading: dIsloading} = useGetAcademicDepartmentsQuery(undefined);
    const departmentOptions = dData?.data?.map(item => ({
        value: item._id,
        label: item.name
    }))

    const [addFaculty] = useAddFacultyMutation();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const facultyData = {
            password: "faculty123",
            faculty: data
        }
        console.log(facultyData);
        const formData = new FormData();
        formData.append('data', JSON.stringify(facultyData));
        formData.append('file', data.image);
        addFaculty(formData);
        // console.log(Object.fromEntries(formData));
    }
    return (
        <Row>
            <Col span={24}>
                <PHForm onSubmit={onSubmit} defaultValues={facultyDefaultData}>
                    <Divider>Personal Information</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="name.firstName" label="First Name" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="name.middleName" label="Middle Name" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="name.lastName" label="Last Name" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHSelect options={genderOptions} name="gender" label="Gender" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHDatePicker name="dateOfBirth" label="Date Of Birth" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHSelect options={bloodGroupOptions} name="bloodGroup" label="Blood Group" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <Controller name="image" render={({field: {onChange, value, ...field}}) => (
                                <Form.Item label="Picture">
                                    <Input type="file" 
                                        value={value?.fileName} 
                                        {...field} 
                                        onChange={(e) => onChange(e.target.files?.[0])} 
                                    />
                                </Form.Item>
                            )} />
                        </Col>
                    </Row>
                    <Divider>Contact Information</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="email" label="Email" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="contactNo" label="Contact Number" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="emergencyContactNo" label="Emergency Contact Number" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="presentAddress" label="Present Address" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="permanentAddress" label="Permanent Address" />
                        </Col>
                    </Row>     
                    <Divider>Academic Information</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHSelect options={departmentOptions} disabled={dIsloading} name="departmentOptions" label="Academic Department" />
                        </Col>
                    </Row>                                   
                    <Button size="large" htmlType="submit">Create Faculty</Button>
                </PHForm>
            </Col>
        </Row>
    );
};

export default CreateFaculty;