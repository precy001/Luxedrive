import React from 'react'
import Gifticon from '../assets/icons/gift.png'
import coupon from '../assets/icons/tag.png'
import cancel from '../assets/icons/cancel.png'
import { useRef } from 'react'
import Yes from '../assets/icons/yes.png'
import No from '../assets/icons/no.png'

const DashboardData = (props) => {
  return (
    <div>
        <div className="default-dashboard-data" ref={props.dashboardDataRef}>
            <div className="order-details-container">
             <div className="user-order-details">
                <div>
                <img src={Gifticon} alt="" width={25}/>
                </div>

                <div className="number">
                    00
                </div>

                <div className="box-title">
                    Total Order
                </div>
             </div>

             <div className="user-order-details">
             <div>
                <img src={coupon} alt="" width={25}/>
                </div>

                <div className="number">
                    00
                </div>

                <div className="box-title">
                    Coupons
                </div>
             </div>
             <div className="user-order-details">
             <div>
                <img src={cancel} alt="" width={25}/>
                </div>

                <div className="number">
                    00
                </div>

                <div className="box-title">
                    Canceled orders
                </div>
             </div>

             </div>

             <div className="recent-orders-title">
                My Recent Orders
             </div>

             <div className="recent-orders">
                <center>
                No data found
                </center>
             </div>
        </div>

        <div className="profile-data" ref={props.profileDataRef}>
            <form action="" method="post">
                <div className="profile-form-container">
                    <input type="text" name="" id=""  placeholder='Update Username'/>
                    <input type="email" name="" id="" placeholder='Update email'/>
                </div>
                    <div className="title">Change Password</div>

                <div className="profile-form-container">
                <input type="password" name="" id="" placeholder='Current Password'/>
                </div>

                <div className="profile-form-container">
                    <input type="password" name="" id="" placeholder='New password'/>
                    <input type="password" name="" id="" placeholder='Confirm password'/>
                </div>

                <div className="profile-change-btn">
                    <button type="submit">Update Profile</button>
                </div>
            </form>
        </div>

        <div className="order-data" ref={props.orderDataRef}>
            <center>
            No data found
            </center>
        </div>

        <div className="terms-data" ref={props.termsDataRef}>
            <center>
            No data found
            </center>
        </div>

        <div className="signout-data" ref={props.signoutDataRef}>
            <div className="signout-ask">
                Are you sure you want to Sign Out?
            </div>

            <div className="reply">
                <button>
                    <img src={Yes} alt="" width={20}/>
                    <div className="button-name">Yes</div>
                </button>

                <button>
                <img src={No} alt="" width={20}/>
                <div className="button-name">No</div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default DashboardData