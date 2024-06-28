import { Button } from "../ui/Button";
import { Headings } from "../ui/Headings";
import { Input, InputArea } from "../ui/Input";
import { IoMdSend } from "react-icons/io";
export default function Contactus() {
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
        <Input placeholder="name:" varient="input" />
        <Input placeholder="email:" varient="input" />
        <Input placeholder="phone" varient="input" />
        <InputArea placeholder="feedback" />
        <Button varient="primary" size="m">
          Send<IoMdSend size="1rem" />
        </Button>
      
      </form>
    </div>
  );
}
