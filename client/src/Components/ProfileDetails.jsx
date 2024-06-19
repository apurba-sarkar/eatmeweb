import { Button } from "../ui/Button";
import { Headings } from "../ui/Headings";
import { Input } from "../ui/Input";

export default function ProfileDetails() {
  return (
    <div className="pd">
      {/* <img src="" alt="" srcset="" /> */}
      <img src="./profile.jpg" className="profilelogo" />
      <Headings type="label" colorvar="primary">
        Full Name
      </Headings>
      <Input value="ricky sarkar" varient="input" disabled />
      <Headings type="label" colorvar="primary">
        Pincode
      </Headings>
      <Input placeholder="sda" varient="input" disabled />
      <Headings type="label" colorvar="primary">
        Mobile
      </Headings>
      <Input placeholder="sda" varient="input" disabled />
      <Headings type="label" colorvar="primary">
        Email address
      </Headings>
      <Input placeholder="sda" varient="input" disabled />
      <Headings type="label" colorvar="primary">
        Password
      </Headings>
      <Input placeholder="sda" varient="input" disabled />

      <div style={{ display: "flex", gap: "1rem", paddingTop: "1.5em" }}>
        <Button varient="secondary" size="m">
          Edit
        </Button>
        <Button varient="primary" size="m">
          Save
        </Button>
      </div>
    </div>
  );
}
