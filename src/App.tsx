import React, {memo} from 'react';
import {ConfigProvider, Layout} from "antd";
import {RouterProvider} from "react-router-dom";
import router from "./routes";

const App = () => {
    return (<ConfigProvider
        theme={{
            token: {
                colorPrimary: '#C9FF68',
                borderRadius: 4,
                colorBgContainer: '#ffffff',
            },
            components: {
                Button: {
                    colorText: '#FF5733'
                }
            }
        }}
    >
        <Layout>
            <RouterProvider router={router}/>
        </Layout>
    </ConfigProvider>)
}

export default memo(App);
