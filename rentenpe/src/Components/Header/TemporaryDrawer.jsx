import React from 'react';
import "./Header.css";
function TemporaryDrawer({ onClose  }) {

    return (
        <div className="drawer">
          {/* Your drawer content goes here */}
          <button onClick={onClose}>Close Drawer</button>
        </div>
      );
  }



  
  export default TemporaryDrawer;


  