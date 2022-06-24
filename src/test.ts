import { Order } from "./models/order.model";

Order.createOrder('62b4a1b1539d1fc76cca547f')
    .then(cart => console.log(cart))
    .catch(error => console.error(error))