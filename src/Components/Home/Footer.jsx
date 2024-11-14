const Footer = () => {
    return (
        <div className="bg-[#FFFFFF] p-16 border-2 shadow-2xl ">
            <div className="text-center ">
                <h1 className="font-bold text-3xl">Gadget Heaven</h1>
                <p className="mt-2">Leading the way in cutting-edge technology and innovation.</p>
            </div>

            <footer className=" grid grid-cols-1 gap-6 sm:grid-cols-3 justify-items-center mt-10  ">
                <nav className="flex flex-col" >
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Careers</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    )
}

export default Footer
