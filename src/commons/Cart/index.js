import React, { Component } from "react";
import { withRouter } from "next/router";
import styles from "src/commons/styles/Cart.module.css";

import Image from "next/image";
import chair from "src/assets/img/Mask.png";
import remove from "src/assets/svg/close.svg";

class index extends Component {
  state = {
    counter: 1,
  };

  addCounter = () => {
    const newCounter = this.state.counter;
    this.setState({
      counter: newCounter + 1,
    });
  };

  subCounter = () => {
    const newCounter = this.state.counter;
    this.setState({
      counter: newCounter - 1 < 1 ? 1 : newCounter - 1,
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-5">
          <div className={`row mb-4 ${styles.product}`}>
            <div className="col-md-1">
              <div className={`pt-5 ${styles.remove}`}>
                <Image src={this.props.remove} alt="remove" layout="responsive" width={30} height={30} />
              </div>
            </div>
            <div className="col-md-5 ps-5">
              <div className={`${styles["img-product"]}`}>
                <Image src={this.props.productImage} alt="product img" layout="responsive" />
              </div>
            </div>
            <div className={`${styles["product-name"]} mx-auto col-md-6 d-flex align-self-center`}>
              <p>{this.props.name}</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`${styles.price} justify-content-center d-flex`}>
            <p>{this.props.price}</p>
          </div>
        </div>
        <div className="col-md-2 text-center">
          <div className={`${styles.price} d-flex justify-content-center`}>
            <p onClick={this.subCounter} className={`${styles.counter} me-3`}>
              -
            </p>
            <p>{this.state.counter}</p>
            <p onClick={this.addCounter} className={`${styles.counter} ms-3`}>
              +
            </p>
          </div>
        </div>
        <div className="col">
          <div className={`${styles.price} justify-content-center d-flex justify-content-center`}>
            <p>{this.props.total}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(index);