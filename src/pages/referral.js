import React from 'react';
import Sidebar from '../components/Sidebar';

export default function Referral() {
  return (
    <>
      <div className="settings mt15">

        <Sidebar />

        <div className="container-fluid">
          <div className="card affiliate-program">
            <div class="card-body">
              <h5 className="card-title">Affiliate Program</h5>
              <div class="row justify-content-between">
                <div class="col-xl-6 col-lg-6">
                  <p class="affiliate-title">Affiliate Link</p>
                  <p class="affiliate-body">Copy and paste this link to send to friends or use in your articles. When
                    users sign up using this link, your account will be credited with referral
                    bonuses.</p>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <p className="affiliate-title">Share your link</p>
                  <form action="">
                    <div class="input-group">
                      <input type="text" class="form-control"
                        value="https://exchange.tradio.com/register?ref=0595b6ff8865ee37" />
                      <div class="input-group-append">
                        <span class="input-group-text bg-primary text-white">Copy</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="card affiliate-status">
            <div class="card-body">
              <h4 class="card-title">Affiliate Status<small class="mb-0"> (Pay on a daily basis)</small></h4>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Total</th>
                    <th>Previous Day</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Invites</td>
                    <td>5 User</td>
                    <td>3 User</td>
                  </tr>
                  <tr>
                    <td>Total Turnover</td>
                    <td>0.248 BTC</td>
                    <td>0.354 BTC</td>
                  </tr>
                  <tr>
                    <td>Free Paid</td>
                    <td>0.255 BTC</td>
                    <td>0.253 BTC</td>
                  </tr>
                  <tr>
                    <td>Affiliate Level (% of Commissions)</td>
                    <td>50%</td>
                    <td></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>Affiliate Payouts
                      <br />
                      <small>Not listed on affiliate leaderboard</small>
                    </th>
                    <th>0.925 BTC</th>
                    <th>0.235 BTC</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h5 className="card-title">Affiliate Payout Status</h5>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Free Paid (BTC)</th>
                    <th>Affiliate Level</th>
                    <th>Payouts (BTC)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>March 8th, 2020</td>
                    <td>0.2954 BTC</td>
                    <td>Level 3</td>
                    <td>0.2547 BTC</td>
                  </tr>
                  <tr>
                    <td>March 8th, 2020</td>
                    <td>0.2954 BTC</td>
                    <td>Level 3</td>
                    <td>0.2547 BTC</td>
                  </tr>
                  <tr>
                    <td>March 8th, 2020</td>
                    <td>0.2954 BTC</td>
                    <td>Level 3</td>
                    <td>0.2547 BTC</td>
                  </tr>
                  <tr>
                    <td>March 8th, 2020</td>
                    <td>0.2954 BTC</td>
                    <td>Level 3</td>
                    <td>0.2547 BTC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
