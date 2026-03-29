import React from 'react'

const CartPopUp = ({ message, onClose }) => {
   return (
    <div className="fixed top-5 right-5 z-50">
      <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-3">
        
        <span>{message}</span>

        <button
          onClick={onClose}
          className="font-bold text-white"
        >
          ✕
        </button>

      </div>
    </div>
  );
}

export default CartPopUp;