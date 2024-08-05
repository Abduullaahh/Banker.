import React from 'react';
import { useState, useEffect } from 'react';
import Sidebar from './DashBoardSidebar';

export default function Payments() {
  return (
    <div className='user-dashboard'>
        <div className='acc_details'>
            <p>Payments</p>
        </div>
        <div className='card-parent'>
            <div className="row1">
                <div className='dashboard-card'>
                        <img src="funds.svg" alt="Funds Transfer Icon" />
                        <p>Funds Transfer</p>
                    </div>
                    <div className='dashboard-card'>
                        <img src="bill.svg" alt="Bills & Topup Icon" />
                        <p>Bills & Topup</p>
                    </div>
                    <div className='dashboard-card'>
                        <img src="beneficiary.svg" alt="Add Beneficiary Icon" />
                        <p>Add Beneficiary</p>
                    </div>
            </div>
            <div className="row2">
                <div className='dashboard-card'>
                    <img src="debit-card.svg" alt="Debit Card Icon" />
                    <p>Debit Card</p>
                </div>
                <div className='dashboard-card'>
                    <img src="statement.svg" alt="Account Statement Icon" />
                    <p>Account Statement</p>
                </div>
                <div className='dashboard-card'>
                    <img src="feedback.svg" alt="Feedback Icon" />
                    <p>Feedback</p>
                </div>
            </div>
            </div>
    </div>
  );
}