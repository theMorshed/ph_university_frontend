import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagementApi";

const CreateStudent = () => {
    const {data: sData, isLoading: sIsloading} = useGetAllSemestersQuery(undefined);
    const semesterOptions = sData?.data?.map(item => ({
        value: item._id,
        label: `${item.name} ${item.year}`
    }))
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
        // const formData = new FormData();
        // formData.append('data', JSON.stringify(data));
        // console.log(Object.fromEntries(formData));
    }
    return (
        <Row>
            <Col span={24}>
                <PHForm onSubmit={onSubmit}>
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
                            <PHInput type="text" name="fatherName" label="Father Name" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="fatherOccupation" label="Father Occupation" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="fatherContactNo" label="Father Contact Number" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="motherName" label="Mother Name" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="motherOccupation" label="Mother Occupation" />
                        </Col>
                        <Col span={24} md={{span: 12}} lg={{span: 8}}>
                            <PHInput type="text" name="motherContactNo" label="Mother Contact Number" />
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