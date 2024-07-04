import { useSelector } from "react-redux";
// import { Box } from "../ui/Box";
import { Headings } from "../ui/Headings";
import { Input } from "../ui/Input";

export default function Shipping() {
  const activeUserData = useSelector((state) => state.loginUser.activeUser);
  const { fullname, address, pincode, mobile } = activeUserData;
  console.log(activeUserData);
  return (
    <div>
      <div>
        <Headings>SHIPPING</Headings>
        <Headings type="label">Full Name</Headings>
        <Input placeholder="" disabled value={fullname} />
        <Headings type="label">Address</Headings>
        <Input placeholder="" disabled value={address} />
        <Headings type="label">Country</Headings>
        <Input placeholder="" value="india" disabled />
        {/* <Headings type="label">City</Headings>
        <Input placeholder="" /> */}
        <Headings type="label">Pincode</Headings>
        <Input placeholder="" disabled value={pincode} />
        <Headings type="label">Phone Number</Headings>
        <Input placeholder="" disabled value={mobile} />
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
