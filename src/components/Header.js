import React, { useState } from 'react';

import { BsHouse } from 'react-icons/bs';

import  Modal  from 'react-modal'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor: '#264653'
    }
  };

function refreshPage() {
    window.location.reload();
  }



Modal.setAppElement('#root');



const Header = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
        <div className='title' id='startShow'>
            <h1 >Dog Fun  <BsHouse /> </h1>
        </div>

        <div id='navbar'>
                <ul className='navlink'>
            
                    <li href='#'><button className='btn btn-refresh' onClick={refreshPage}>refresh</button></li>
                    <li href='#'><button className='btn' onClick={() => setModalIsOpen(true)}>info</button></li>
                </ul>
            </div>

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={customStyles} >
            <h1>Welcome to Dog Fun House <BsHouse /></h1>
            <h2>Hello, this is a simple Web App for dog lovers.</h2>
            <hr></hr>
            <h2>Author: Sadia Sanam Sarwar (AKA Sumaya Sanam)</h2>
            <h2>Contact: syasanam@gmail.com</h2>
            <p>Software: ReactJS REST-API</p>
            <p>Version: 1.0 April 2021</p>
            <p>Credit Images: https://dog.ceo/api/breeds/image/random/50</p>
            <div>
            <button className='btn' onClick={() => setModalIsOpen(false)}>Close</button>
            </div>
      </Modal>
    </>
    )
}

export default Header