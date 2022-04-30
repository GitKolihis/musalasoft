/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as addGatewayActions from "./redux/actions/gatewayActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allGateway: [],
      addGateway: {},
      msg: "",
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        allGateway: this.props.getGateway.data
      })
    }
  }

  componentDidMount() {
    this.props.getAllGateway();
  }

  render() {
    return (
      <div className="App">
        <div className="row container-fluid">
          <div className="col col-2 p-3">
            <div className="p-1 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Gateway Registration </h5>{" "}
                  <div className="row">
                    <div className="col col-sm col-6">
                      <button
                        type="button"
                        className="btn btn-warning btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Add Gateway
                      </button>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>{" "}
          </div>{" "}
          <div className="col col-10 p-3">
            <div className="row p-2">
              <h3>Gateway One</h3>
              <div className="col col-6 col-sm-3 p-2">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"> Card title </h5>{" "}
                    <p className="card-text">Device One. </p>{" "}
                    <div className="row">
                      <div className="col col-sm col-6">
                        <a href="#" className="btn btn-md btn-primary">
                          Status{" "}
                        </a>{" "}
                      </div>
                      <div className="col col-sm col-6">
                        <a href="#" className="btn btn-md btn-danger">
                          Delete{" "}
                        </a>{" "}
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Gateway Registration
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                    Gateway Name:
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="1"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">
                    Gateway IP Address:
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="1"
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    addGatewayDate: state.addGatewayReducer.addGateway,
    getGateway: state.addGatewayReducer.getGateway
  };
}

const mapDispatchToProps = (dispatch) => ({
  addGateway: (event) => dispatch(addGatewayActions.addGateway(event)),
  getAllGateway: (event) =>  dispatch(addGatewayActions.getGateway(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
