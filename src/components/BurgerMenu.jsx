import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import BurgerIcon from '../img/list.png'


const ITEM_HEIGHT = 48;

export default function BurgerMenu() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img className="burger" width={40} src={BurgerIcon} alt="burgericon" />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
            background: "#6F6B6B"
          },
        }}
      > 
        <Link className="burger-a" to="/admin">
          <MenuItem onClick={handleClose}>Admin panel</MenuItem>
        </Link>
        <Link className="burger-a" to="/like">
          <MenuItem onClick={handleClose}>Избранные</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
