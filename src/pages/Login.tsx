import { Button } from "antd";
import { useForm } from "react-hook-form";

const Login = () => {
    const { handleSubmit, register } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
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