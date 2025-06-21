import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";
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
        icon={<CiPlay1 size={27} />}
        sx={{ color: "#fff" }}
      />
      <BottomNavigationAction
        icon={<BsCameraVideoFill size={25} />}
        sx={{ color: "#fff" }}
      />
      <BottomNavigationAction
        icon={<CgAddR size={25} />}
        sx={{ color: "#fff" }}
      />
      <BottomNavigationAction
        icon={<FiSearch size={25} />}
        sx={{ color: "#fff" }}
      />
      <BottomNavigationAction
        icon={<IoPersonSharp size={25} />}
        sx={{ color: "#fff" }}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
