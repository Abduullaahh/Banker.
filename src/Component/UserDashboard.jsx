import React from 'react';
import { useState, useEffect } from 'react';
import Sidebar from './DashBoardSidebar';

export default function UserDashboard() {
    const username = 'Abdullah Tahir'
    const account_no = '98680107868686'
    const account_type = 'Current'
    const balance = '120'

  return (
    <div className='user-dashboard'>
        <div className='acc_details'>
            <p>Account Details</p>
            <div className='upper'>
                <div>
                    {username}
                </div>
                <div>
                    {account_no}
                </div>
            </div>
            <div className='lower'>
                <div>
                    {account_type}
                </div>
                <div>
                    {balance}
                </div>
            </div>
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