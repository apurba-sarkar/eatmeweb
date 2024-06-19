import { Headings } from "../ui/Headings";
import { Input } from "../ui/Input";

export default function Shipping() {
  return (
    <div>
      <div>
        <Headings>Shipping</Headings>
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
      <div>
        <Headings>Shipping Methods</Headings>
      </div>
    </div>
  );
}
