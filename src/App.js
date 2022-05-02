import {Layout, Menu} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {Link, Outlet} from 'react-router-dom';
import Sider from "antd/es/layout/Sider";


function App() {
    return (
        <>
            <Layout style={{minHeight: 1000}}>
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['home']}
                    >
                        <Menu.Item key='home'>
                            <Link to={'/home'}>Home</Link>
                        </Menu.Item>
                        <Menu.Item key='base'>
                            <Link to={'/base'}>Base</Link>
                        </Menu.Item>
                        <Menu.Item key='performers'>
                            <Link to={'/performers'}>Performers</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Layout>
                        <Sider>Sider</Sider>

                        <Content>
                            <Outlet/>
                        </Content>
                    </Layout>
                </Layout>
                <Footer style={{textAlign: "center"}}>Rent Music Studio App ©2022</Footer>
            </Layout>
        </>
    );
}

export default App;
