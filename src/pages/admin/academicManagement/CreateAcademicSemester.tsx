/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions, yearOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicSemester.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";
import { TResponse } from "../../../types/global.types";
import { TAcademicSemester } from "../../../types/academicManagement.types";

const CreateAcademicSemester = () => {
    const [addAcademicSemester] = useAddAcademicSemesterMutation();

    const onSubmit:SubmitHandler<FieldValues> = async(data) => {
        const toastId = toast.loading('Creating semester...');
        const name = semesterOptions[Number(data.name) - 1]?.label;
        const semesterData = {
            name: name,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth
        }
        try {            
            const res = await addAcademicSemester(semesterData) as TResponse<TAcademicSemester>;
            if (res.error) {
                toast.error(res.error.data.message, {id: toastId});
            } else {
                toast.success('Semester created successfully', {id: toastId});
            }
        } catch(err) {
            toast.error('Something went wrong', {id: toastId});
        }
    }

    return (
        <Flex justify="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
                    <PHSelect label='Name' name='name' options={semesterOptions} />
                    <PHSelect label='Year' name='year' options={yearOptions} />
                    <PHSelect label='Start Month' name='startMonth' options={monthOptions} />
                    <PHSelect label='End Month' name='endMonth' options={monthOptions} />
                    <Button htmlType="submit" size="large">Create Academic Semester</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;