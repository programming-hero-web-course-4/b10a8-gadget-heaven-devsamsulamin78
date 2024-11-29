const Footer = () => {
  return (
  

<footer className="bg-neutral  text-neutral-content mt-6">

<div>
     <h2 className="text-[32px] font-bold text-center pt-8">Gadget Heaven</h2>
     <p className="text-center ">Leading the way in cutting-edge technology and innovation.</p>
</div>


<div className="footer flex justify-between p-10">
<nav>
  <h6 className="footer-title">Services</h6>
  <a className="link link-hover">Product Support</a>
  <a className="link link-hover">Order Tracking
  </a>
  <a className="link link-hover">Shipping & Delivery </a>
  <a className="link link-hover">Returns</a>
</nav>
<nav>
  <h6 className="footer-title">Company</h6>
  <a className="link link-hover">About Us</a>
  <a className="link link-hover">Careers</a>
  <a className="link link-hover">Contact</a>

</nav>
<nav>
  <h6 className="footer-title">Legal</h6>
  <a className="link link-hover">Terms of Service</a>
  <a className="link link-hover">Privacy Policy</a>
  <a className="link link-hover">Cookie policy</a>
</nav>
  </div>              

</footer>
  
  );
};


export default Footer;
