import { Breadcrumbs, Stack, Link } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const BreadCrumbsItem = ({ label, to }: any) => {
  const location: any = useLocation();
  const navigate = useNavigate();

  function handleClick(event: any) {
    event.preventDefault();
    if (event.target.innerHTML === "/") navigate("/");
    const index =
      event.target.innerHTML === "/"
        ? "/"
        : location.pathname
            .split("/")
            .join("/")
            .lastIndexOf(event.target.innerHTML) +
          event.target.innerHTML.length;
    navigate(location.pathname.split("/").join("/").substring(0, index));
  }

  const breadcrumbs = location.pathname.split("/").map((item: any) => {
    return (
      <Link
        underline="hover"
        key={location.pathname.split("/").indexOf(item)}
        color="inherit"
        href={item === "" ? "/" : item}
        onClick={(e) => handleClick(e)}
      >
        {item === "" ? "/" : item}
      </Link>
    );
  });
  console.log(breadcrumbs);
  // .map((el: any) => console.log(el));

  return (
    <Stack spacing={2} sx={{ marginX: 1, marginTop: 1 }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};

export default BreadCrumbsItem;
