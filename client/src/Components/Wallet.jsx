import { useSelector } from "react-redux";
import { Headings } from "../ui/Headings";
import { TableBuilder, TableData, TableHead, TableRow } from "../ui/Table";

export default function Wallet() {
  const allTrans = useSelector((state) => state.tran.alltran);
  // console.log(allTrans);
  return (
    <div>
      <figure>
        {/* <div className="card-data"> */}
        <div className="card-data">
          <div className="card-number">
            <span className="">8900 8320 3840 </span>
            <span>0233</span>
          </div>
          <div className="last-details">
            <div className="other-details">
              <div>01/29</div>
              <div>RICKY SARKAR</div>
            </div>
            <div className="balance">
              <span>₹</span> 500
            </div>
          </div>
        </div>
        {/* </div> */}
      </figure>
      <div className="trans">
        <Headings>Previous Transaction</Headings>
        <TableBuilder size="normal">
          <TableHead col="three">
            <TableData>Date</TableData>
            <TableData style={{ justifySelf: "left" }}>Details</TableData>
            <TableData>Amount</TableData>
          </TableHead>
          {allTrans.map((e) => {
            return (
              <div key={e.key}>
                <TableRow col="three">
                  <TableData>{e.date}</TableData>
                  <TableData style={{ justifySelf: "left" }}>
                    {e.type==="add"? "payment":"dedeucted"}
                    
                    </TableData>
                  <TableData>&#8377; {e.price}</TableData>
                </TableRow>
              </div>
            );
          })}
        </TableBuilder>
      </div>
    </div>
  );
}
