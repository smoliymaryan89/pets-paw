import { Outlet, useLocation } from "react-router-dom";

import useWindowSize from "@hooks/useWindowSize";
import Container from "@components/Container";
import Aside from "@components/Aside";
import AppBar from "@components/AppBar";

const Layout = () => {
  const { width } = useWindowSize();
  const { pathname } = useLocation();

  return (
    <main>
      <Container className="md:flex md:justify-center lg:justify-between">
        {width > 1439 && <Aside />}

        <div className="flex flex-col">
          {pathname !== "/" && <AppBar />}
          <Outlet />
        </div>
      </Container>
    </main>
  );
};

export default Layout;
