import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'

export default function MyOrder() {
  const [orderData, setOrderData] = useState(null)

  const fetchMyOrder = async () => {
    try {
      const res = await fetch('https://food-delivery-application-3-r5t3.onrender.com/api/myOrderData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: localStorage.getItem('userEmail')
        })
      })
      const response = await res.json()
      console.log('Frontend received:', response)
      setOrderData(response)
    } catch (error) {
      console.error('Error fetching orders:', error)
    }
  }

  useEffect(() => {
    fetchMyOrder()
  }, [])

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          {!orderData ? (
            <p className="text-center mt-5">Loading your orders...</p>
          ) : orderData.orderData?.order_data?.length > 0 ? (
            <>
              {/* Show the Order Date */}
              <div className="m-auto mt-5">
                <h5>{orderData.orderData.order_data[0].Order_date}</h5>
                <hr />
              </div>

              {/* Show each ordered item */}
              {orderData.orderData.order_data.slice(1).map((item, index) => (
                <div className="col-12 col-md-6 col-lg-3" key={index}>
                  <div
                    className="card mt-3"
                    style={{ width: '16rem', maxHeight: '360px' }}
                  >
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt={item.name}
                      style={{
                        height: '120px',
                        objectFit: 'fill'
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <div
                        className="container w-100 p-0"
                        style={{ height: '38px' }}
                      >
                        <span className="m-1">{item.qty}</span>
                        <span className="m-1">{item.size}</span>
                        <div className="d-inline ms-2 h-100 w-20 fs-5">
                          ₹{item.price}/-
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p className="text-center mt-5">No orders found</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

    