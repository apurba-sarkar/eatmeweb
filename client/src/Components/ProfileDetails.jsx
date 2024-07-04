import { useSelector } from "react-redux";
import { Button } from "../ui/Button";
import { Headings } from "../ui/Headings";
import { Input } from "../ui/Input";

export default function ProfileDetails() {
  const activeUserData = useSelector((state) => state.loginUser.activeUser);
  return (
    <div className="pd">
      {/* <img src="" alt="" srcset="" /> */}
      <img src="./profile.jpg" className="profilelogo" />
      <Headings type="label" colorvar="primary">
        Full Name
      </Headings>
      <Input value={activeUserData.fullname} varient="input" disabled />
      <Headings type="label" colorvar="primary">
        Pincode
      </Headings>
      <Input placeholder="sda" varient="input" 
      value={activeUserData.pincode}
      disabled />
      <Headings type="label" colorvar="primary">
        Mobile
      </Headings>
      <Input placeholder="sda" varient="input" 
      value={activeUserData.mobile}
      disabled />
      <Headings type="label" colorvar="primary">
        Email address
      </Headings>
      <Input placeholder="sda" varient="input"
      value={activeUserData.email}
      disabled />
      <Headings type="label" colorvar="primary">
        Password

      </Headings>
      <Input placeholder="sda" varient="input" 
      value="**********"
      disabled />

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
