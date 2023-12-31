import { useState } from "react";

export const useToggleModal = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);

  const handleClose = () => setOpenModal(false);

  return { openModal, handleClose, handleOpen };
};
