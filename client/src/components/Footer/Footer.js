import "./Footer.scss"

const Footer = () => {
    return ( 
        <div className="footer">
           <div className="top">
               <div className="item">
                 <h1>Categories</h1>
                 <span>Women</span>
                 <span>Men</span>
                 <span>Shoes</span>
                 <span>Accessories</span>
                 <span>New Arrivals</span>
              </div>
               <div className="item">
                  <h1>Links</h1>
                  <span>FAQ</span>
                  <span>Pages</span>
                  <span>Stores</span>
                  <span>Compare</span>
                  <span>Cookies</span>
               </div>
               <div className="item">
                  <h1>About</h1>
                  <span>
                  ONYSTORE is a premier shopping hub, offering curated selections of top-tier products. Elevate your lifestyle with our handpicked collection and embrace a new level of quality and style.
                 </span>
                </div>
              <div className="item">
                  <h1>Contact</h1>
                  <span>
                  Get in touch with us at ONYSTORE. Your questions and feedback matter. Reach our friendly support team for assistance, ensuring your shopping experience is exceptional.
                 </span>
              </div>
            </div>
            <div className="bottom">
                <div className="left">
                <span className="logo">ONYSTORE</span>
                <span className="copyright">
                    © Copyright 2023. All Rights Reserved
                </span>
            </div>
            <div className="right">
                  <img src="/img/payment.png" alt="" />
            </div>
      </div>
    </div>
     );
}
 
export default Footer;