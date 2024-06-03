import React from 'react';

import './Navbar.css'; // Import your CSS filecd..
import { FaRegUserCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Navbar({ show, onClose, onConfirm }) {

  //  const LogoutPopup = ({ show, onClose, onConfirm }) => {
  //   const [isOpen, setIsOpen] = useState(true);

  // const handleClose = () => {
  //   setIsOpen(false);
  //   onClose();
  // };

  // const handleConfirm = () => {
  //   setIsOpen(false);
  //   onConfirm();
  // };

  // {isOpen && (
  //   <div className="position-fixed top-0 start-0 bottom-0 end-0 d-flex align-items-center justify-content-center">
  //     <div className="card shadow" style={{ width: '300px' }}>
  //       <div className="card-body">
  //         <h5 className="card-title text-center mb-4">Logout</h5>
  //         <p className="card-text text-center mb-4">Are you sure you want to log out?</p>
  //         <div className="d-flex justify-content-between">
  //           <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
  //           <button type="button" className="btn btn-danger" onClick={handleConfirm}>Confirm</button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )}

  // const handleLogoutClick = () => {
  //   setPopupVisible(true);
  // };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">


          {/* company name */}
          <span className='spana'> Digital</span><span className='spanb'>Flake</span>
        </div>
        <div className='user-icon ml-9'></div>
        <FaRegUserCircle className='icon ' />
      </nav>


      {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end m-2">
        <button className="btn btn-light btn-outline-danger" onClicktype="handleLogoutClick ">Logout</button>
      </div> */}

      <div className="main">

        <div className="d-flex align-items-start ">
          <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <span class="material-symbols-outlined"></span>

            <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>



            <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Category </button>

            <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Products</button>

          </div>

          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
            </div>
            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">02Introducing "Streamline," the all-in-one productivity suite for busy professionals. Say goodbye to juggling multiple apps and scattered workflows. Streamline seamlessly integrates task management, communication, calendar scheduling, and document collaboration into a single intuitive platform. Boost your efficiency with features like smart reminders, drag-and-drop project organization, and real-time team collaboration. Get more done in less time and stay focused on what matters with Streamline. Available for
              free and paid plans, start your free trial today and experience the power of productivity reimagined!
            </div>


            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">03Introducing "Streamline," the all-in-one productivity suite for busy professionals. Say goodbye to juggling multiple apps and scattered workflows. Streamline seamlessly integrates task management, communication, calendar scheduling, and document collaboration into a single intuitive platform. Boost your efficiency with features like smart reminders, drag-and-drop project organization, and real-time team collaboration. Get more done in less time and stay focused on what matters with Streamline. Available for
              free and paid plans, start your free trial today and experience the power of productivity reimagined!</div>
          </div>

        </div>
      </div>



    </>
  );
};

export default Navbar;
