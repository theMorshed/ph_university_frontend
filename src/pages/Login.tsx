/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const defaultValues = {
        id: 'A-0001',
        password: 'iamadmin'
    }

    const [login] = useLoginMutation();

    const onSubmit = async(data: FieldValues) => {
        console.log(data);
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
        <Row justify='center' align='middle' style={{height: '100vh'}}>
            <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
                <PHInput type='text' name='id' label='ID: ' />
                <PHInput type='text' name='password' label='Password: ' />
                <Button htmlType="submit">Login</Button>
            </PHForm>
        </Row>
    );
};

export default Login;