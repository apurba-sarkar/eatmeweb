import { Box } from "../ui/Box";
import { Button } from "../ui/Button";
import { Headings } from "../ui/Headings";
import { Input } from "../ui/Input";
import { TableBuilder, TableData, TableHead, TableRow } from "../ui/Table";

export default function OrderSummary() {
  return (
    <div>
       {/* <Box color="none" type="support">
      <Headings type="h2">Coupon Apply</Headings>
      <Input varient="input" placeholder="enter here"/>
      <Button varient="primary">Apply</Button>
      </Box> */}
      <Button varient="primary" size="m">Continue</Button>
      <Headings>ORDER SUMMARY</Headings>
      <Headings type="label" >Total item in cart</Headings>
      <TableBuilder size="special">
        <TableHead col="four">
          <TableData>image</TableData>
          <TableData style={{ justifySelf: "left" }}>description</TableData>
          <TableData>price</TableData>
          <TableData>Qnt</TableData>
        </TableHead>
        <TableRow col="four">
          <TableData>dasd</TableData>
          <TableData style={{ justifySelf: "left" }}>dasd</TableData>
          <TableData>dasd</TableData>
          <TableData>
            <div>
              {/* <Button varient="none">+</Button>
              <span>sd</span>
              <Button varient="none">-</Button> */}
              <select>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option value={num} key={num}>
                    {num}
                    
                  </option>
                ))}
              </select>
            </div>
          </TableData>
        </TableRow>
      </TableBuilder>
      
     
    </div>
  );
}
