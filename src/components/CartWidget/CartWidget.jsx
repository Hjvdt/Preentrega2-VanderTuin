import styles from "./CartWidget.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const CartWidget = () => {
    return (
        <div className={styles.cartContainer}>
            <FontAwesomeIcon icon={faCartShopping} />
            <strong> 2 </strong>
        </div>
    );
};

export default CartWidget;