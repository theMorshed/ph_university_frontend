import { Form, Select } from "antd";

const PHSelect = ({label}: {label: string}) => {
    return (
        <Form.Item label={label}>
            <Select
                defaultValue="lucy"
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
            />
        </Form.Item>
    );
};

export default PHSelect;