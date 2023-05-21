import React, { useEffect } from "react";
import "react-bootstrap";
import { useState } from 'react';
import action from "../images/action.png"
import Modaltransaction from "../components/Modaltransaction";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import transaction from "../data/transaction.json";
function Transaction() {
    const [showModal, setShowModal] = useState(false);

    const handleModalShow = () => {
      setShowModal(true);
    };
  
    const handleModalHide = () => {
      setShowModal(false);
    };
    return(
        <>
         <div style={{ background: "#E5E5E5", height: "100vh" }}>
      <div className="container">
        <h3 className="text-dark py-4">Incoming Transaction</h3>
        <Table striped hover>
          <thead>
            <tr style={{  background: "white", color: "red" }}>
              <th>No</th>
              <th>Users</th>
              <th>Trip</th>
              <th>Bukti Transfer</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {transaction.map((item) => {
              return (
                <tr style={{ background: "white" }}>
                  <td style={{height:"70px"}} className="text-dark">{item.id}</td>
                  <td className="text-dark">{item.name}</td>
                  <td className="text-dark">{item.Trip}</td>
                  <td className="text-dark">{item.image}</td>
                  <td style={{ color: "green" }}>Active</td>
                  {/* <td style={{ color: "green" }}>Approve</td> */}
                  <td>
                    <button style={{border:"none"}} onClick={handleModalShow}>
                        <img src={action}></img>
                    </button>
                  </td>
                </tr>
              );
            })}
              
              </tbody>
        </Table>

      <Modaltransaction show={showModal} onHide={handleModalHide} />
      </div>
    </div>
        </>
    )
}
export default Transaction