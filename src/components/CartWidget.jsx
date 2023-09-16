import CartIcon from "./CartIcon";
import CartItems from "./CartItem";

const CartWidget = () => {
    return (
    <div className="rounded-circle p-3 position-relative">
        <CartIcon color="black"/>
        <CartItems count={9} />
    </div>
    )
}

export default CartWidget;