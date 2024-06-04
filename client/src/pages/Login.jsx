import { Button } from "../ui/Button";
import { Headings } from "../ui/Headings";
import { Input } from "../ui/Input";

export default function Login() {
  return (
    <div className="login">
      <div className="login-head">
        <Headings type="h1" colorvar="primary">
          Login Page
        </Headings>
      </div>
      <div className="login-card">
        <div className="login-photo">photo</div>
        <div className="login-data">
          <Input placeholder="email" type="email" varient="input" />
          <Input placeholder="password" type="password" varient="input"/>
          <Button varient="primary" size="m"> Submit</Button>
          <h2>New in this website? <Button varient="register" size="other">Register</Button>here </h2>
        </div>
       
      </div>
    
    </div>
  );
}
