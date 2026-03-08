import { ReactNode } from "react";

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        Auth Layout
        {children}
    </div>
  );
};

export default Layout;