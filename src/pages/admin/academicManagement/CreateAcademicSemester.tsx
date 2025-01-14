import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const nameOptions = [
    {
        label: 'Autumn',
        value: '01'
    },
    {
        label: 'Summer',
        value: '02'
    },
    {
        label: 'Fall',
        value: '03'
    },
]

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
    value: String(currentYear + number),
    label: String(currentYear + number)
}))

export const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthOptions = monthNames.map((name) => ({
    value: name,
    label: name
}))

const CreateAcademicSemester = () => {
    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        const name = nameOptions[Number(data.name) - 1].label;
        const semesterData = {
            name: name,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth
        }
        console.log(semesterData);
    }

    return (
        <Flex justify="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit}>
                    <PHSelect label='Name' name='name' options={nameOptions} />
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