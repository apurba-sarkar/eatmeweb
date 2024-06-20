import { Button } from "../ui/Button";
import { Headings } from "../ui/Headings";
import { TableBuilder, TableData, TableHead, TableRow } from "../ui/Table";
import { RiCustomerServiceFill } from "react-icons/ri";

export default function Orders() {
  return (
    <div className="orders">
      {" "}
      <div className="trans">
        <Headings>Previous Orders</Headings>
        <TableBuilder size="normal">
          <TableHead col="three">
            <TableData>Date</TableData>
            <TableData style={{ justifySelf: "left" }}>Details</TableData>
            <TableData>Amount</TableData>
          </TableHead>
          <TableRow col="three">
            <TableData>sada</TableData>
            <TableData style={{ justifySelf: "left" }}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow col="three">
            <TableData>sada</TableData>
            <TableData style={{ justifySelf: "left" }}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{ justifySelf: "left" }}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{ justifySelf: "left" }}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{ justifySelf: "left" }}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{ justifySelf: "left" }}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{ justifySelf: "left" }}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{ justifySelf: "left" }}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{ justifySelf: "left" }}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{ justifySelf: "left" }}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{ justifySelf: "left" }}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{ justifySelf: "left" }}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
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
      <Button varient="primary" size="m">
        Log out
      </Button>
    </div>
  );
}
