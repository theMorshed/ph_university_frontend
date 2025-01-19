import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagementApi";

const stduentDefaultData = {
    "name": {
        "firstName": "Jaane",
        "middleName": "commando",
        "lastName": "Doe"
    },
    "gender": "female",
    "dob": "2000-05-15T00:00:00.000Z",
    "email": "student2@gmail.com",
    "contactNo": "1234567890",
    "emergencyContactNo": "0987654321",
    "bloodGroup": "O+",
    "presentAddress": "123 Elm Street, Springfield",
    "permanentAddress": "456 Maple Avenue, Springfield",
    "guardian": {
        "fatherName": "Robert Doe",
        "fatherOccupation": "Engineer",
        "fatherContactNo": "1122334455",
        "motherName": "Mary Doe",
        "motherOccupation": "Teacher",
        "motherContactNo": "5566778899"
    },
    "localGuardian": {
        "name": "James Smith",
        "occupation": "Businessman",
        "address": "789 Oak Street, Springfield",
        "contactNo": "9988776655"
    },
    // "admissionSemester": "67739bb370b22552c1a613bc",
    // "academicDepartment": "67739c8670b22552c1a613c5"
}

const CreateStudent = () => {
    const {data: sData, isLoading: sIsloading} = useGetAllSemestersQuery(undefined);
    const semesterOptions = sData?.data?.map(item => ({
        value: item._id,
        label: `${item.name} ${item.year}`
    }))
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const studentData = {
            password: "student123",
            student: data
        }
        console.log(studentData);
        // const formData = new FormData();
        // formData.append('data', JSON.stringify(studentData));
        // console.log(Object.fromEntries(formData));
    }
    return (
        <Row>
            <Col span={24}>
                <PHForm onSubmit={onSubmit} defaultValues={stduentDefaultData}>
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
                    <Divider>Guardian</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="guardian.fatherName" label="Father Name" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="guardian.fatherOccupation" label="Father Occupation" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="guardian.fatherContactNo" label="Father Contact Number" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="guardian.motherName" label="Mother Name" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="guardian.motherOccupation" label="Mother Occupation" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="guardian.motherContactNo" label="Mother Contact Number" />
                        </Col>
                    </Row>
                    <Divider>Local Guardian</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="localGuardian.name" label="Name" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="localGuardian.occupation" label="Occupation" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="localGuardian.contactNo" label="Contact Number" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="localGuardian.address" label="Address" />
                        </Col>
                    </Row>
                    <Divider>Academic Information</Divider>
                    <Row gutter={8}>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHSelect options={semesterOptions} disabled={sIsloading} name="admissionSemester" label="Admission Semester" />
                        </Col>
                        {/* <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHSelect options={} disabled={dIsloading} name="departmentOptions" label="Admission Department" />
                        </Col> */}
                    </Row>
                    <Button htmlType="submit">submit</Button>
                </PHForm>
            </Col>
        </Row>

    );
};

export default CreateStudent;