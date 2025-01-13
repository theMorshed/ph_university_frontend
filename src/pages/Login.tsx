/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { handleSubmit, register } = useForm({
        defaultValues: {
            id: 'A-0001',
            password: 'iamadmin'
        }
    });

    const [login] = useLoginMutation();

    const onSubmit = async(data: FieldValues) => {
        const toastId = toast.loading('Logging in', {duration: 2000});
        try {
            const userInfo = {
                id: data.id,
                password: data.password
            }
            const result = await login(userInfo).unwrap();
            const user = verifyToken(result.data.accessToken) as TUser;
            dispatch(setUser({user: user, token: result.data.accessToken}));
            navigate(`/${user.role}/dashboard`);
            toast.success('Logged in', {id: toastId, duration: 2000});
        } catch(err) {
            toast.error('Something went wrong!', {id: toastId, duration: 2000});
        }
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