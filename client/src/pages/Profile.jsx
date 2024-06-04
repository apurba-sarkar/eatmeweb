import { Headings } from "../ui/Headings";
import ProfileDetails from "../Components/ProfileDetails";
import Wallet from "../Components/Wallet";
import Orders from "../Components/Orders";

export default function Profile() {
  return (
    <div className="profile">
      {/* <div>CusProfile</div> */}
      <div>
        <Headings type="h2" colorvar="primary">
          {" "}
          Profile Details
        </Headings>{" "}
        <ProfileDetails />
      </div>
      <div>
        <Headings type="h2" colorvar="primary">
          Wallet Balance
        </Headings>
        <Wallet />
      </div>
      <div>
        <Headings type="h2" colorvar="primary">
          Orders
        </Headings>
        <Orders />
      </div>
    </div>
  );
}
