/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
    const { handleSubmit, register } = useForm({
        defaultValues: {
            id: 'A-0001',
            password: 'iamadmin'
        }
    });

    const [login, { data, error }] = useLoginMutation();
    console.log(data, error);

    const onSubmit = (data: any) => {
        const userInfo = {
            id: data.id,
            password: data.password
        }
        login(userInfo)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID: </label>
                <input id="id" type="text" {...register('id')} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="text" {...register('password')} />
            </div>
            <Button htmlType="submit">Login</Button>
        </form>
    );
};

export default Login;