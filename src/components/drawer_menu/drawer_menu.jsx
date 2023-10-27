import { useState } from "react";
import { Button, Drawer } from "antd";

function DrawerMenu() {
    
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      open={open}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}
export default DrawerMenu;
