import React, { Component } from "react";
import "./style.css";
import data from "./dataGlasses.json";
export default class ReactB2 extends Component {
  state = {
    glassesModel: "./glassesImage/v2.png",
  };
  nhap = (e) => {
    this.setState({
      glassesModel: e.target.src,
    });
    console.log(e.target.src);
  };
  renderList = () => {
    return data.map((item, index) => {
      return (
        <button key={index} onClick={this.nhap}>
          <img src={item.url} alt="" />
        </button>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="header">
          <h3>TRY GLASSES APP ONLINE</h3>
        </div>
        <div className="body">
          <div className="model">
            <img src="./glassesImage/model.jpg" alt="" className="model_1" />
            <img src="./glassesImage/model.jpg" alt="" className="model_2" />
          </div>
          <div className="glasses">
            <div className="list_glasses">
              <div className="item">{this.renderList()}</div>
              <div className="glasses_model">
                <img src={this.state.glassesModel} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
