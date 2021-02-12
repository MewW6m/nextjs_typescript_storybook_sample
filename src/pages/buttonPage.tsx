import React from "react";
import {Button} from "../components/atoms/Button/Button";
import Head from "next/head";

class buttonPage extends React.Component{
    render(){
        return (
            <>
                <Head>
                    <title>デモ</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.5.5/css/uikit.min.css" integrity="sha512-ddXaHqFC1CtlGRMVc8TQOqZXdonfBQApH9quc+79OgLraayKoNBZA3DSm7nhI3V9tXmfJ2Bk84Xg0XyFEJZAhA==" crossOrigin="anonymous" />
                </Head>
                <Button label={"Button"} />
            </>
        );
    }
}
export default buttonPage;