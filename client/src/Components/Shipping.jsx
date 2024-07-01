import { Box } from "../ui/Box";
import { Headings } from "../ui/Headings";
import { Input } from "../ui/Input";

export default function Shipping() {
  return (
    <div>
      <div>
        <Headings>SHIPPING</Headings>
        <Headings type="label">Full Name</Headings>
        <Input placeholder="" />
        <Headings type="label">Address</Headings>
        <Input placeholder="" />
        <Headings type="label">Country</Headings>
        <Input placeholder="" />
        <Headings type="label">City</Headings>
        <Input placeholder="" />
        <Headings type="label">Pincode</Headings>
        <Input placeholder="" />
        <Headings type="label">Phone Number</Headings>
        <Input placeholder="" />
        <Headings type="label" colorvar="danger">
          My billing and shipping address are the same
        </Headings>
      </div>
      {/* <div>
        <Headings>SHIPPING METHODS</Headings>
        <div>
          <Box color="primary" type="box">
            <div className="cart-express">
              <input type="radio" id="express" checked={false} />
              <div style={{fontWeight:"bold"}}>Express Delivery</div>
              <Headings type="side">Rs 120 (additional)</Headings>
            </div>
          </Box>
        </div>
      </div> */}
    </div>
  );
}
