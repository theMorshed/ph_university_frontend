import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
const { Header, Content } = Layout;


const MainLayout = () => {
    const dispatch = useAppDispatch();
    const handleSubmit = () => {
        dispatch(logout());
    }
    return (
        <Layout style={{height: '100%'}}>
            <Sidebar />
            <Layout>
                <Header style={{position: 'sticky', top: '0', left: '0', zIndex: '3'}}><Button onClick={handleSubmit}>Logout</Button></Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 500,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;