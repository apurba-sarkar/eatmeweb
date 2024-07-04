import { useSelector } from "react-redux";
import { Button } from "../ui/Button";
import { Headings } from "../ui/Headings";
import { Input, InputArea } from "../ui/Input";
import { IoMdSend } from "react-icons/io";
export default function Contactus() {
  const activeUserData = useSelector((state) => state.loginUser.activeUser);
  const { fullname, email, mobile } = activeUserData;
  return (
    <div>
      <div className="contactus">
        <img src="./cbbnr.jpg" style={{ width: "99vw" }} />
      </div>
      <div className="form">
        <Headings type="h1" colorvar="primary">
          Contact Us
        </Headings>
      </div>
      <form>
        <Input placeholder="name:" varient="input" value={fullname} disabled />
        <Input placeholder="email:" varient="input" value={email} disabled />
        <Input placeholder="phone" varient="input" value={mobile} disabled />
        <InputArea placeholder="feedback" />
        <Button varient="primary" size="m">
          Send
          <IoMdSend size="1rem" />
        </Button>
      </form>
    </div>
  );
}
