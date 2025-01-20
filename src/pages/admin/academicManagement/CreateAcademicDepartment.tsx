/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddAcademicDepartmentMutation, useGetAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";
import { TResponse } from "../../../types/global.types";
import { TAcademicDepartment } from "../../../types/academicManagement.types";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import { academicDepartmentSchema } from "../../../schemas/academicDepartment.schema";

const CreateAcademicDepartment = () => {
    const {data: academicFacultyData} = useGetAcademicFacultiesQuery(undefined);
    const academicFacultyOptions = academicFacultyData?.data?.map(item => ({
        value: item._id,
        label: item.name
    }))
    const [addAcademicDepartment] = useAddAcademicDepartmentMutation();

    const onSubmit:SubmitHandler<FieldValues> = async(data) => {
        const toastId = toast.loading('Creating Academic Department...');
        const academicDepartmentData = {
            name: data.name,
            academicFaculty: data.academicFaculty
        }
        try {            
            const res = await addAcademicDepartment(academicDepartmentData) as TResponse<TAcademicDepartment>;
            if (res.error) {
                toast.error(res.error.data.message, {id: toastId});
            } else {
                toast.success('Academic Department created successfully', {id: toastId});
            }
        } catch(err) {
            toast.error('Something went wrong', {id: toastId});
        }
    }

    return (
        <Flex justify="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit} resolver={zodResolver(academicDepartmentSchema)}>
                    <PHInput type="text" name="name" label="Academic Departent Name" />
                    <PHSelect label='Select Academic Faculty' name='academicFaculty' options={academicFacultyOptions} />
                    <Button htmlType="submit" size="large">Create Academic Department</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicDepartment;