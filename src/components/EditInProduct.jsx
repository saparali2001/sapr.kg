import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import HoverRating from './Stars';
import AuthProvider, { AuthContext } from '../context/AuthProvider';

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

export default function EditInProduct({editProduct, setEditProduct, product:productInstance}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
console.log("Edit:",editProduct)
  const [product, setProduct] = React.useState(productInstance);
  const { saveEditProduct } = React.useContext(AuthContext);

//   const {handleDelete} = React.useContext(AuthProvider)

const handleEditChange = (event) => {
    let object = {
      ...editProduct,
      [event.target.name]: event.target.value,
    };
    console.log(object)
    setEditProduct(object);
  };

  const handleClick = (event) => {
    saveEditProduct(editProduct);
    handleClose()
    setEditProduct(editProduct)
  };

  return (
    <div>
      <div onClick={handleOpen}>
      
      <button className='chenge'>Изменить изменить</button>
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
                   <input type="text" 
                       onChange={handleEditChange}
                        type="text"
                        name="img"
                        value={editProduct.img}
                   />
               </div>
               <div className='card-modal-content'>
                   <p><strong>Называния:</strong>
                     <input type="text" 
                        onChange={handleEditChange}
                        type="text"
                        name="name"
                        value={editProduct.name}
                     />
                   </p>
                   <p className='card-modal-description'><strong>Описания:</strong> 
                   <input type="text" 
                        onChange={handleEditChange}
                        type="text"
                        name="description"
                        value={editProduct.description}
                   /></p>
                   <p><strong>Цена:</strong> <input type="text" 
                       onChange={handleEditChange}
                        type="text"
                        name="price"
                        value={editProduct.price}
                   /></p>
                   <div className="admin-card-btns">
                        
                        <button onClick={handleClick} className="chenge">Сохранить</button>
                    </div>
               </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
