
import { Headings } from "../ui/Headings";
import { TableBuilder, TableData, TableHead, TableRow } from "../ui/Table";

export default function Wallet() {
  
  return (
    <div>
      <figure>
        {/* <div className="card-data"> */}
        <div className="card-data">
          <di className="card-number">
            <span className="">8900 8320 3840 </span>
            <span>0233</span>
          </di>
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
          <TableHead>
            <TableData>Date</TableData>
            <TableData style={{justifySelf:"left"}}>Details</TableData>
            <TableData>Amount</TableData>
          </TableHead>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{justifySelf:"left"}}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{justifySelf:"left"}}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{justifySelf:"left"}}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{justifySelf:"left"}}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{justifySelf:"left"}}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{justifySelf:"left"}}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{justifySelf:"left"}}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{justifySelf:"left"}}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{justifySelf:"left"}}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{justifySelf:"left"}}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{justifySelf:"left"}}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
          <TableRow>
            <TableData>sada</TableData>
            <TableData style={{justifySelf:"left"}}>sada</TableData>
            <TableData>sada</TableData>
          </TableRow>
        </TableBuilder>
      </div>
    </div>
  );
}
