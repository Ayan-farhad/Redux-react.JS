import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaRegCirclePlay } from "react-icons/fa6";
import { LiaInstagram } from "react-icons/lia";

function Footer() {
    return (
        <>
            <footer className="footer" >
                <div className="div-style">
                    <ul className="ul-syle">
                        <span className="span">POPULAR CATEGORIES</span>
                        <li className="li-font">Cars</li>
                        <li className="li-font">Flats for rent</li>
                        <li className="li-font">Mobile Phones</li>
                        <li className="li-font">Jobs</li>
                    </ul>
                </div>
                <div className="div-style2">
                    <ul className="ul-syle">
                        <span className="span">TRENDING SEARCHES</span>
                        <li className="li-font">Bikes</li>
                        <li className="li-font">Watches</li>
                        <li className="li-font">Books</li>
                        <li className="li-font">Dogs</li>
                    </ul>
                </div>
                <div className="div-style3">
                    <ul className="ul-syle">
                        <span className="span">ABOUT US</span>
                        <li className="li-font">About Dubizzle Group</li>
                        <li className="li-font">OLX Blog</li>
                        <li className="li-font">Contact Us</li>
                        <li className="li-font">OLX for Businesses</li>
                    </ul>
                </div>
                <div className="div-style4">
                    <ul className="ul-syle">
                        <span className="span">OLX</span>
                        <li className="li-font">Help</li>
                        <li className="li-font">Sitemap</li>
                        <li className="li-font">Terms of use</li>
                        <li className="li-font">Privacy policy</li>
                    </ul>
                </div>

                <div className="div-5">
                    <h3>Follow us</h3>
                    <div className="icon">
                        <AiFillTwitterCircle />
                        <TiSocialFacebookCircular />
                        <FaRegCirclePlay />
                        <LiaInstagram />
                    </div>
                    <div className="div-images">
                        <img src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" width={90} />
                        <img src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" width={90} />
                        <img src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" width={90} />
                    </div>
                </div>
            </footer>
            <footer className="footer2">
                <span className="span-2">Free Classifieds in Pakistan . © 2006-2024 OLX</span>
            </footer>
        </>
    )
}

export default Footer;