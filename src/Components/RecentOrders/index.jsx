import React from 'react';
import './RecentOrders.css'; // Import the CSS file for styling

const recentOrders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered', image: 'p1.jpg' },
  { customer: 'Jane Cooper', orderNo: '48967586', amount: '$305.02', status: 'Delivered', image: 'p2.jpg' },
  { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Cancelled', image: 'p3.jpg' },
  { customer: 'Kristin Watson', orderNo: '20965732', amount: '$56.00', status: 'Pending', image: 'p4.jpg' },
  { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered', image: 'p5.jpg' },
  { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered', image: 'p6.jpg' },
];

function RecentOrders() {
  return (
    <div className="recent-orders">
      <h3 className="recent-orders__title">Recent Orders</h3>
      <ul className="recent-orders__list">
        {recentOrders.map((order, index) => (
          <li key={index} className="recent-orders__item">
            <div className="recent-orders__customer">
              <img src={order.image} alt={order.customer} className="recent-orders__avatar" />
              <span className="recent-orders__name">{order.customer}</span>
            </div>
            <span className="recent-orders__order-no">{order.orderNo}</span>
            <span className="recent-orders__amount">{order.amount}</span>
            <span className={`recent-orders__status ${order.status.toLowerCase()}`}>{order.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentOrders;
