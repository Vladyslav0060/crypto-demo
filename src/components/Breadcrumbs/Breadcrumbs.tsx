import { Link } from "react-router-dom";
import { Anchor, Breadcrumbs } from "@mantine/core";
import { useLocation } from "react-router-dom";
import "./Breadcrumbs.scss";
const BreadcrumbsComponent = () => {
  const location = useLocation();
  const path = location.pathname.split("/").slice(1);

  const items = path.map((item, index) => (
    <Anchor
      component={Link}
      to={path.slice(0, index + 1).join("/")}
      key={index}
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </Anchor>
  ));

  return (
    <>
      {path.length > 1 && (
        <div className="breadcrumbs">
          <Breadcrumbs>{items}</Breadcrumbs>
        </div>
      )}
    </>
  );
};

export default BreadcrumbsComponent;
