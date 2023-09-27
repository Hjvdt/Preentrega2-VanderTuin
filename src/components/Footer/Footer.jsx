import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return <footer>
        <div className="footer-div">
            <p>Copyright &#169; {year} HJVDT. All right reserved</p>
        </div>
    </footer>
}

export default Footer;