import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import HoverRating from './Stars';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: "#fff",
  bgcolor: '#35383f',
  boxShadow: 24,
  p: 4,
  borderRadius: "20px"
};

export default function CardModal({product}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>
      
      <button className='chenge'>Изменить</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div onClick={handleClose} className="add-close">	&#10060;</div>
          <div className='card-modal '>
               <div className='card-modal-img'>
                   <img src={product.img}/>
               </div>
               <div className='card-modal-content'>
                   <p><strong>Называния:</strong> {product.name}</p>
                   <p className='card-modal-description'><strong>Описания:</strong> {product.description}</p>
                   <p><strong>Цена:</strong> {product.price}</p>
                   <div className="admin-card-btns">
                        <button>Изменить данные</button>
                        <button className="chenge">Удалить</button>
                    </div>
               </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
