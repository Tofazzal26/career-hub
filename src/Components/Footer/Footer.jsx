import icon from "../../assets/icons/social.png";
const Footer = () => {
  return (
    <footer className="p-10 bg-[#1a1919] text-base-content">
      <div className="footer container mx-auto">
        <aside className="text-white space-y-4">
          <h1 className="text-3xl font-extrabold ">CareerHub</h1>
          <p className="w-[300px] text-base text-[#bbbaba]">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <img src={icon} alt="" />
        </aside>
        <nav className="text-white">
          <h6 className="text-xl font-semibold">Company</h6>
          <a className="link link-hover text-[#bbbaba]">About us</a>
          <a className="link link-hover text-[#bbbaba]">Work</a>
          <a className="link link-hover text-[#bbbaba]">Latest Work</a>
          <a className="link link-hover text-[#bbbaba]">Careers</a>
        </nav>
        <nav className="text-white">
          <h6 className="text-xl font-semibold">Product</h6>
          <a className="link link-hover text-[#bbbaba]">Prototype</a>
          <a className="link link-hover text-[#bbbaba]">Plan and Pricing</a>
          <a className="link link-hover text-[#bbbaba]">Customer</a>
          <a className="link link-hover text-[#bbbaba]">Integrations</a>
        </nav>
        <nav className="text-white">
          <h6 className="text-xl font-semibold">Support</h6>
          <a className="link link-hover text-[#bbbaba]">Help Desk</a>
          <a className="link link-hover text-[#bbbaba]">Sales</a>
          <a className="link link-hover text-[#bbbaba]">Become a Partner</a>
        </nav>
        <nav className="text-white">
          <h6 className="text-xl font-semibold">Contact</h6>
          <a className="link link-hover text-[#bbbaba]">524 Broadway. NYC</a>
          <a className="link link-hover text-[#bbbaba]">+1 777 - 978 - 5570</a>
        </nav>
      </div>
      <hr className="w-[1550px] mt-6 mx-auto" />
      <div className="mx-auto container text-white flex justify-between items-center mt-6">
        <p>@2024 CareerHub. All Rights Reserved</p>
        <p>Powered by CareerHub</p>
      </div>
    </footer>
  );
};

export default Footer;
