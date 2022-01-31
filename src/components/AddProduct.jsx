import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';

import { AuthContext } from '../context/AuthProvider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: '#35383F',
  borderRadius: "30px",
  boxShadow: "1px 1px 15px 10px  #000",
  p: 4,
};

export default function AddProduct() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {addProduct, addProductsCart} = React.useContext(AuthContext);

  const [newProduct, setNewProduct] = React.useState({
     img: "",
     name: "",
     price: "",
     description: "",
     categor: ""
  })

  const handleSubmit = (event) => {
      event.preventDefault();
      addProduct(newProduct);
      addProductsCart(newProduct)
      setNewProduct({
        img: "",
        name: "",
        price: "",
        description: "",
        categor: ""
      })
  }

  return (
    <div>
      <button className="add-product-btn" onClick={handleOpen}>Добавить продукт</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div onClick={handleClose} className="add-close">	&#10060;</div>
          <div className="add-form">
              <form onSubmit={handleSubmit}>
                  <input value={newProduct.img} onChange={(event) => setNewProduct({...newProduct, img: event.target.value})} type="text" placeholder='Загрузитье картинку'/>
                  <input value={newProduct.name} onChange={(event) => setNewProduct({...newProduct, name: event.target.value})}  type="text" placeholder='Введите называния'/>
                  <input value={newProduct.price} onChange={(event) => setNewProduct({...newProduct, price: event.target.value})} type="text" placeholder='Введите цену'/>
                  <input value={newProduct.description} onChange={(event) => setNewProduct({...newProduct, description: event.target.value})} type="text" placeholder='Введите описанию'/>
                  <select value={newProduct.categor} onChange={(event) => setNewProduct({...newProduct, categor: event.target.value})} >
                      <option value="AirPods">AirPods</option>
                      <option value="Наушники">Наушники</option>
                      <option value="Смартфоны">Смартфоны</option>
                      <option value="Часы">Часы</option>
                      <option value="Смарт часы">Смарт часы</option>
                      <option value="Повер банк">Повер банк</option>
                      <option value="Сумки">Сумки</option>
                      <option value="Ноутбуки">Ноутбуки</option>
                      <option value="Камеры">Камеры</option>
                  </select>
                  <button type='submit'>Добавить</button>
              </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
