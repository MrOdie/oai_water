import React, {ReactNode} from "react";

import Footer from "./Footer";
import Header from "./Header";


interface Props {
    page: string;
    children: ReactNode;
}

const Layout: React.FC<Props> = ({ page, children }) => {

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
