import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { BsCameraVideoFill } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";

const BottomNav = () => {
  return (
    <BottomNavigation
      showLabels
      sx={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        background: "rgba(0,0,0,0.8)",
        zIndex: 99,
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<CiPlay1 size={22} />}
        sx={{ color: "#fff" }}
      />
      <BottomNavigationAction
        label="Shorts"
        icon={<BsCameraVideoFill size={22} />}
        sx={{ color: "#fff" }}
      />
      <BottomNavigationAction
        label="Add"
        icon={<CgAddR size={25} />}
        sx={{ color: "#fff" }}
      />
      <BottomNavigationAction
        label="Search"
        icon={<SearchIcon />}
        sx={{ color: "#fff" }}
      />
      <BottomNavigationAction
        label="Profile"
        icon={<PersonIcon />}
        sx={{ color: "#fff" }}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
