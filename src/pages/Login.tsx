/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
    const dispatch = useAppDispatch();
    const { handleSubmit, register } = useForm({
        defaultValues: {
            id: 'A-0001',
            password: 'iamadmin'
        }
    });

    const [login] = useLoginMutation();

    const onSubmit = async(data: any) => {
        const userInfo = {
            id: data.id,
            password: data.password
        }
        const result = await login(userInfo).unwrap();
        const user = verifyToken(result.data.accessToken);
        dispatch(setUser({user: user, token: result.data.accessToken}))
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