/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";
import { TResponse } from "../../../types/global.types";
import { TAcademicFaculty } from "../../../types/academicManagement.types";
import PHInput from "../../../components/form/PHInput";
import { academicFacultySchema } from "../../../schemas/academicFaculty.schema";

const CreateAcademicFaculty = () => {
    const [addAcademicFaculty] = useAddAcademicFacultyMutation();

    const onSubmit:SubmitHandler<FieldValues> = async(data) => {
        const toastId = toast.loading('Creating Academic Faculty...');
        const academicFacultyData = {
            name: data.name
        }
        try {            
            const res = await addAcademicFaculty(academicFacultyData) as TResponse<TAcademicFaculty>;
            if (res.error) {
                toast.error(res.error.data.message, {id: toastId});
            } else {
                toast.success('Academic Faculty created successfully', {id: toastId});
            }
        } catch(err) {
            toast.error('Something went wrong', {id: toastId});
        }
    }

    return (
        <Flex justify="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit} resolver={zodResolver(academicFacultySchema)}>
                    <PHInput type="text" name="name" label="Academic Faculty Name" />
                    <Button htmlType="submit" size="large">Create Academic Faculty</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicFaculty;