import React from 'react';
import Sidebar from '../components/Sidebar';

export default function profile() {
  return (
    <>
      <div className="settings mt15">
        <Sidebar />

        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">General Information</h5>
              <div className="settings-profile">
                <form>
                  <img src={'img/avatar.svg'} alt="avatar" />
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="fileUpload"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="fileUpload"
                    >
                      Choose avatar
                    </label>
                  </div>
                  <div className="form-row mt-4">
                    <div className="col-md-6">
                      <label htmlFor="formFirst">First name</label>
                      <input
                        id="formFirst"
                        type="text"
                        className="form-control"
                        placeholder="First name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="formLast">Last name</label>
                      <input
                        id="formLast"
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="emailAddress">Email</label>
                      <input
                        id="emailAddress"
                        type="text"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phoneNumber">Phone</label>
                      <input
                        id="phoneNumber"
                        type="text"
                        className="form-control"
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="selectLanguage">Language</label>
                      <select
                        id="selectLanguage"
                        className="custom-select"
                      >
                        <option defaultValue>English</option>
                        <option>Mandarin Chinese</option>
                        <option>Spanish</option>
                        <option>Arabic</option>
                        <option>Russian</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="selectCurrency">Currency</label>
                      <select
                        id="selectCurrency"
                        className="custom-select"
                      >
                        <option defaultValue>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                        <option>CHF</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <input type="submit" value="Update" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Security Information</h5>
              <div className="settings-profile">
                <form>
                  <div className="form-row">
                    <div className="col-md-6">
                      <label htmlFor="currentPass">
                        Current password
                      </label>
                      <input
                        id="currentPass"
                        type="text"
                        className="form-control"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="newPass">New password</label>
                      <input
                        id="newPass"
                        type="text"
                        className="form-control"
                        placeholder="Enter new password"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="securityOne">
                        Security questions #1
                      </label>
                      <select
                        id="securityOne"
                        className="custom-select"
                      >
                        <option defaultValue>
                          What was the name of your first pet?
                        </option>
                        <option>
                          What's your Mother's middle name?
                        </option>
                        <option>
                          What was the name of your first school?
                        </option>
                        <option>
                          Where did you travel for the first time?
                        </option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="securityAnsOne">Answer</label>
                      <input
                        id="securityAnsOne"
                        type="text"
                        className="form-control"
                        placeholder="Enter your answer"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="securityTwo">
                        Security questions #2
                      </label>
                      <select
                        id="securityTwo"
                        className="custom-select"
                      >
                        <option defaultValue>Choose...</option>
                        <option>
                          What was the name of your first pet?
                        </option>
                        <option>
                          What's your Mother's middle name?
                        </option>
                        <option>
                          What was the name of your first school?
                        </option>
                        <option>
                          Where did you travel for the first time?
                        </option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="securityAnsTwo">Answer</label>
                      <input
                        id="securityAnsTwo"
                        type="text"
                        className="form-control"
                        placeholder="Enter your answer"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="securityThree">
                        Security questions #3
                      </label>
                      <select
                        id="securityThree"
                        className="custom-select"
                      >
                        <option defaultValue>Choose...</option>
                        <option>
                          What was the name of your first pet?
                        </option>
                        <option>
                          What's your Mother's middle name?
                        </option>
                        <option>
                          What was the name of your first school?
                        </option>
                        <option>
                          Where did you travel for the first time?
                        </option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="securityFore">Answer</label>
                      <input
                        id="securityFore"
                        type="text"
                        className="form-control"
                        placeholder="Enter your answer"
                      />
                    </div>
                    <div className="col-md-12">
                      <input type="submit" value="Update" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
