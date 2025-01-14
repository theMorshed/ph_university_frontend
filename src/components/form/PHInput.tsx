import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
    type: string;
    name: string;
    label?: string;
}

const PHInput = ({type, name, label}: TInputProps) => {

    return (
        <div style={{marginBottom: '20px'}}>
            {label ? label : null}
            <Controller name={name}
            render={({field}) => <Input {...field} id={name} type={type} />}
            />
        </div>
    )
};

export default PHInput;