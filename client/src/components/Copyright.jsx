import { Link, styled, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Copyright() {
  return (
    <Typography
      mt="-2"
      variant="body2"
      align="center"
      sx={{ color: "text.secondary" }}
    >
      &copy; Harshal Chaudhari &nbsp;
      <FavoriteIcon
        color="error"
        sx={{ fontSize: 18, mb: "-2px", ml: "-5px" }}
      />
      <br />
      <Link
        variant="subtitle3"
        component={"a"}
        href="https://github.com/harshal2390/SplitApp"
        target="_blank"
      >
        [GitHub]
      </Link>
    </Typography>
  );
}
