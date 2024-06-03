import { Button } from "../ui/Button";
import { Headings } from "../ui/Headings";

export default function Login() {
  return (
    <div>
      <div>photo</div>
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="phone number" />
        <input type="password" placeholder="password" />
        <Headings type="h1">hello</Headings>
        <Button type="secondary">Other</Button>
        <Button type="primary">login</Button>
      </div>
    </div>
  );
}
