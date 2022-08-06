import {NextPage} from "next";

import Footer from "../components/Footer";
import Header from "./Header";
import {ReactNode} from "react";

interface Props {
    page: string;
    children: ReactNode;
}

const Layout: NextPage<Props> = ({ page, children }) => {

  return (
    <>
      <Header originPage={page}/>
      <div className={`main ${page}`}>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
