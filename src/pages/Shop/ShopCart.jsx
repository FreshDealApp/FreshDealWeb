import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";
import { useCart } from "@src/context/CartContext";

const ShopCart = () => {
  const { cartItems, removeFromCart } = useCart();

  //const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  return (
    <div>
      <div>
        {loaderStatus ? (
          <div className="loader-container">
            <MagnifyingGlass
              visible={true}
              height="100"
              width="100"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperclassName="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#0aad0a"
            />
          </div>
        ) : (
          <>
            <>
              <ScrollToTop />
            </>
            <>
              <div>
                <section className="mb-lg-14 mb-8 mt-8">
                  <div className="container">
                    {/* row */}
                    <div className="row">
                      <div className="col-12">
                        {/* card */}
                        <div className="card py-1 border-0 mb-8">
                          <div>
                            <h1 className="fw-bold">Shop Cart</h1>
                            <p className="mb-0">Shopping in 382480</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* row */}
                    <div className="row">
                      <div className="col-lg-8 col-md-7">
                        <div className="py-3">
                          {/* alert */}
                          <div className="alert alert-danger p-2" role="alert">
                            You’ve got FREE delivery. Start{" "}
                            <Link to
                              ="#!" className="alert-link">
                              checkout now!
                            </Link>
                          </div>
                          {cartItems.length === 0 ? (
                            <p>Your Cart is Empty.</p>
                          ) : (
                            <ul className="list-group list-group-flush">
                              {cartItems.map((item, index) => {
                                const isFirst = index === 0;
                                const isLast = index === cartItems.length - 1;

                                const itemClass = `list-group-item py-3 py-lg-0 px-0 ${isFirst ? "border-top" : isLast ? "border-bottom" : ""
                                  }`;

                                return (
                                  <li key={item.id} className={itemClass}>
                                    <div className="row align-items-center">
                                      <div className="col-3 col-md-2">
                                        {" "}
                                        <img
                                          src={item.image_url}
                                          alt={item.title}
                                          className="img-fluid"
                                        />
                                      </div>
                                      <div className="col-4 col-md-6">
                                        {/* title */}
                                        <h6 className="mb-0">{item.title}</h6>
                                        <span>
                                          <small className="text-muted">{item.description}</small>
                                        </span>
                                        {/* text */}
                                        <div className="mt-2 small ">
                                          {" "}
                                          <Link
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-decoration-none text-inherit"
                                          >
                                            {" "}
                                            <span className="me-1 align-text-bottom">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-trash-2 text-success"
                                              >
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                <line x1={10} y1={11} x2={10} y2={17} />
                                                <line x1={14} y1={11} x2={14} y2={17} />
                                              </svg>
                                            </span>
                                            <span className="text-muted">Remove</span>
                                          </Link>
                                        </div>
                                      </div>
                                      {/* input group */}
                                      <div className="col-3 col-md-3 col-lg-2">
                                        <div className="input-group  flex-nowrap justify-content-center  ">
                                          <input
                                            type="button"
                                            defaultValue="-"
                                            className="button-minus form-control  text-center flex-xl-none w-xl-30 w-xxl-10 px-0  "
                                            data-field="quantity"
                                          />
                                          <input
                                            type="number"
                                            step={1}
                                            max={10}
                                            defaultValue={item.quantity}
                                            name="quantity"
                                            className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0 "
                                          />
                                          <input
                                            type="button"
                                            defaultValue="+"
                                            className="button-plus form-control  text-center flex-xl-none w-xl-30  w-xxl-10 px-0  "
                                            data-field="quantity"
                                          />
                                        </div>
                                      </div>
                                      {/* price */}
                                      <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                        <span className="fw-bold">${item.pick_up_price * item.quantity}</span>
                                        {/*<div className="text-decoration-line-through text-muted small">
                                        $20.00
                                      </div>*/}
                                      </div>
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                          {/* btn */}
                          <div className="d-flex justify-content-between mt-4">
                            <Link to
                              ="#!" className="btn btn-primary">
                              Continue Shopping
                            </Link>
                            <Link to
                              ="#!" className="btn btn-dark">
                              Update Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* sidebar */}
                      <div className="col-12 col-lg-4 col-md-5">
                        {/* card */}
                        <div className="mb-5 card mt-6">
                          <div className="card-body p-6">
                            {/* heading */}
                            <h2 className="h5 mb-4">Summary</h2>
                            <div className="card mb-2">
                              {/* list group */}
                              <ul className="list-group list-group-flush">
                                {/* list group item */}
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                  <div className="me-auto">
                                    <div>Item Subtotal</div>
                                  </div>
                                  <span>$70.00</span>
                                </li>
                                {/* list group item */}
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                  <div className="me-auto">
                                    <div>Service Fee</div>
                                  </div>
                                  <span>$3.00</span>
                                </li>
                                {/* list group item */}
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                  <div className="me-auto">
                                    <div className="fw-bold">Subtotal</div>
                                  </div>
                                  <span className="fw-bold">$67.00</span>
                                </li>
                              </ul>
                            </div>
                            <div className="d-grid mb-1 mt-4">
                              {/* btn */}
                              <button
                                className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                                type="submit"
                              >
                                Go to Checkout <span className="fw-bold">$67.00</span>
                              </button>
                            </div>
                            {/* text */}
                            <p>
                              <small>
                                By placing your order, you agree to be bound by the
                                Freshcart <Link to
                                  ="#!">Terms of Service</Link>
                                and <Link to
                                  ="#!">Privacy Policy.</Link>{" "}
                              </small>
                            </p>
                            {/* heading */}
                            <div className="mt-8">
                              <h2 className="h5 mb-3">Add Promo or Gift Card</h2>
                              <form>
                                <div className="mb-2">
                                  {/* input */}
                                  <label
                                    htmlFor="giftcard"
                                    className="form-label sr-only"
                                  >
                                    Email address
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="giftcard"
                                    placeholder="Promo or Gift Card"
                                  />
                                </div>
                                {/* btn */}
                                <div className="d-grid">
                                  <button
                                    type="submit"
                                    className="btn btn-outline-dark mb-1"
                                  >
                                    Redeem
                                  </button>
                                </div>
                                <p className="text-muted mb-0">
                                  {" "}
                                  <small>Terms &amp; Conditions apply</small>
                                </p>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default ShopCart;
