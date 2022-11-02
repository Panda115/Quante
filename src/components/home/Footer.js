import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="copyright">
                <p>
                  <Link to={"privacy-policy"}>Privacy</Link> |{" "}
                  <Link to={"terms-and-conditions"}>Site Terms</Link> | 2022{" "}
                  <b>Quantex</b> | All Rights Reserved
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              {/* <div class="footer-social">
                <ul>
                  <li><Link to={{pathname:'https://facebook.com/Quantex-106940475250005/',}}><i class="fa fa-facebook"></i></Link></li>
                  <li><Link to={'#'}><i class="fa fa-twitter"></i></Link></li>
                  <li><Link to={'#'}><i class="fa fa-linkedin"></i></Link></li>
                  <li><Link to={'#'}><i class="fa fa-youtube"></i></Link></li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
