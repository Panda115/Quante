import React from 'react';
import Sidebar from '../components/Sidebar';

export default function API() {
  return (
    <>
      <div className="settings mt15">

        <Sidebar />

        <div className="container-fluid">
          <div className="card settings-profile">
            <div className="card-body">
              <h5 className="card-title">Create API Key</h5>
              <div className="form-row">
                <div className="col-md-6">
                  <label htmlFor="generateKey">
                    Generate key name
                  </label>
                  <input
                    id="generateKey"
                    type="text"
                    className="form-control"
                    placeholder="Enter your key name"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="rewritePassword">
                    Confirm password
                  </label>
                  <input
                    id="rewritePassword"
                    type="password"
                    className="form-control"
                    placeholder="Confirm your password"
                  />
                </div>
                <div className="col-md-12">
                  <input type="submit" value="Create API key" />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Your API Keys</h5>
              <div className="wallet-history">
                <table className="table">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Key</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>zRmWVcrAZ1C0RZkFMu7K5v0KWC9jUJLt</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="apiStatus1"
                            checked
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="apiStatus1"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="icon ion-md-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Rv5dgnKdmVPyHwxeExBYz8uFwYQz3Jvg</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="apiStatus2"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="apiStatus2"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="icon ion-md-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>VxEYIs1HwgmtKTUMA4aknjSEjjePZIWu</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="apiStatus3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="apiStatus3"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="icon ion-md-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="apiStatus4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="apiStatus4"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="icon ion-md-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="apiStatus4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="apiStatus4"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="icon ion-md-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="apiStatus4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="apiStatus4"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="icon ion-md-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="apiStatus4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="apiStatus4"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="icon ion-md-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="apiStatus4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="apiStatus4"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="icon ion-md-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="apiStatus4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="apiStatus4"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="icon ion-md-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="apiStatus4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="apiStatus4"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="icon ion-md-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="apiStatus4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="apiStatus4"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="icon ion-md-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="apiStatus4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="apiStatus4"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="icon ion-md-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="apiStatus4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="apiStatus4"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="icon ion-md-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="apiStatus4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="apiStatus4"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="icon ion-md-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="apiStatus4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="apiStatus4"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="icon ion-md-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="apiStatus4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="apiStatus4"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="icon ion-md-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="apiStatus4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="apiStatus4"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="icon ion-md-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>M01DueJ4x3awI1SSLGT3CP1EeLSnqt8o</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="apiStatus4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="apiStatus4"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <i className="icon ion-md-trash"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
