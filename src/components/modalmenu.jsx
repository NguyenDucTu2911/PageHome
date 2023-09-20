import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { HiXCircle } from "react-icons/hi2";
import "./module.modalmenu.scss";


const style = {
    position: 'absolute',
    top: '0px',
    right: '0px',
    bottom: '0px',
    width: 200,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function ModalMenu({ open, setOpen }) {
    const handleClose = () => setOpen(false);

    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="menu__exit animated" onClick={handleClose}>
                        <HiXCircle />
                    </div>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <ul className='menu__wrapper'>
                            <li><p>Home</p></li>
                            <li><p>Tours</p></li>
                            <li><p>Booking</p></li>
                            <li><p>Destinations</p></li>
                            <li><p>Pages</p></li>
                            <li><p>Blog</p></li>
                            <li><p>ShortCodes</p></li>
                            <li><p>Shop</p></li>
                        </ul>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalMenu;
