import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";
import Data from "../../data/LevelsAndSemesters";
import DummyData from "../../data/DummyData"; //to be deleted

export default class FormB extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row container mx-auto">
            <div className="col-md-8 mx-auto mt-5 mb-3">
              <h4 className="text-center text-primary text-uppercase mb-3">
                Form B
              </h4>
              <form>
                {Data.map((item, id) => {
                  return (
                    <div className="row form-group" id={id}>
                      <label className="text-primary font-weight-bold text-uppercase">
                        {item.label}
                      </label>
                      <select name="level" className="form-control">
                        {item.data.map((text, id) => {
                          return (
                            <option value={text} id={id}>
                              {text}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  );
                })}
                <div className="row form-group">
                  <button
                    className="btn btn-primary btn-block text-capitalize"
                    type="submit"
                  >
                    Get Form B
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead className="text-uppercase text-primary">
                    <tr>
                      <th>#</th>
                      <th>Course Code</th>
                      <th>Course Titles</th>
                      <th>Credit Values</th>
                      <th>Course Masters</th>
                    </tr>
                  </thead>
                  <tbody className="text-capitalize">
                    {DummyData.map((data, id) => {
                      return (
                        <tr id={id}>
                          <td>{++id}</td>
                          <td>{data.code}</td>
                          <td>{data.title}</td>
                          <td>{data.value}</td>
                          <td>{data.master}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary text-capitalize"
                  type="button"
                >
                  <i className="fas fa-download mr-1"></i>
                  Download Form B
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
