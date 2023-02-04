import Footer from "./footer";
import Header from "./header";

export default function Layout({children}){
    return(
        <div className="bg-primary">
            <Header></Header>
            <div>{children}</div>
            <Footer></Footer>
        </div>
    );
}