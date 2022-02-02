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

export default function ModalZakazat({cart, totalPrice}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const { addZakaz, addProductZakaz } = React.useContext(AuthContext);



  const [newZakaz, setNewZakaz] = React.useState({
    name: "",
    number: "",
    address: "",
    totalPrice,
    cart,
    count: cart.count
  });

  const handleInput = (event) => {
    let object = {
      ...newZakaz,
      [event.target.name]: event.target.value,
    };

    setNewZakaz(object);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    addProductZakaz(newZakaz)

    setNewZakaz({
        name: "",
        number: "",
        address: "",
        totalPrice,
        cart,
        count:cart.count
    });
  };
  

  return (
    <div>
      <button className="total-btn" onClick={handleOpen}>Заказат</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <form onSubmit={handleSubmit} className="zakaz-form">
            <input onChange={handleInput} type="text" placeholder='Введите имя'  name='name' value={newZakaz.name}/>
            <input onChange={handleInput} type="text" placeholder='Введите номер'  name='number' value={newZakaz.number}/>
            <input onChange={handleInput} type="text" placeholder='Введите адрес'  name='address' value={newZakaz.address}/>
            <input onChange={handleInput} type="text" placeholder='Введите адрес'  name={totalPrice} value={totalPrice}/>
            {
                cart.map((item) =>{
                    return <div>
                      <input onChange={handleInput} type="text" placeholder='Введите адрес'  name={item.product.name} value={item.product.name}/>
                      <input onChange={handleInput} type="text" placeholder='Введите адрес'  name={item.count} value={item.count}/>
                      
                      
                    </div> 
                   
                })
            }
            <button  onClick={handleSubmit}>Отправить</button>
           </form>
        </Box>
      </Modal>
    </div>
  );
}
