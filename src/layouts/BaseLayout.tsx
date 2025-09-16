import {type FunctionComponent, type PropsWithChildren} from "react";
import {Outlet} from "react-router-dom";

const BaseLayout: FunctionComponent<PropsWithChildren> = () => {
    // const {token: {colorBgContainer, borderRadiusLG}} = theme.useToken();
    return (
        // <Layout>
        //     {/*<HeaderPlugin/>*/}
        //     <Content style={{padding: '24px 24px'}}>
        //         <div
        //             style={{
        //                 background: colorBgContainer,
        //                 minHeight: 280,
        //                 padding: 24,
        //                 borderRadius: borderRadiusLG,
        //             }}
        //         >
        <Outlet/>
        //         </div>
        //     </Content>
        //     <FooterPlugin/>
        // </Layout>
    );
}

export default BaseLayout;