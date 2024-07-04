import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/Button";
import { Headings } from "../ui/Headings";
import { TableBuilder, TableData, TableHead, TableRow } from "../ui/Table";
import { RiCustomerServiceFill } from "react-icons/ri";
import { logout } from "../reducers/loginUserSlice";
import { useNavigate } from "react-router-dom";
import { dateparser } from "./../helper/dateParser";

export default function Orders() {
  const allOrders = useSelector((state) => state.order.allorder);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout);
    navigate("/");
  };
  console.log(allOrders);

  return (
    <div className="orders">
      <div className="trans">
        <Headings>Previous Orders</Headings>
        <TableBuilder size="normal">
          <TableHead col="three">
            <TableData>Date</TableData>
            <TableData style={{ justifySelf: "left" }}>Details</TableData>
            <TableData>Amount</TableData>
          </TableHead>
          {allOrders.map((e) => {
            return (
              <>
                <TableRow col="three">
                  <TableData>{e.date}</TableData>
                  <TableData style={{ justifySelf: "left" }}> Total {e.itemc} item was ordered</TableData>
                  <TableData>&#8377; {e.price}  </TableData>
                </TableRow>
              </>
            );
          })}
        </TableBuilder>
      </div>
      <div className="support">
        <Headings type="h2" colorvar="primary">
          <RiCustomerServiceFill size={25} /> Technical Support{" "}
        </Headings>
        <Headings>
          Mobile: <a href="tel:+91 986537829">+91 986537829</a>{" "}
        </Headings>
        <Headings>
          Email: <a href="mailto:suport@eatme.com">mailto:suport@eatme.com</a>{" "}
        </Headings>
      </div>
      <Button varient="primary" size="m" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  );
}
