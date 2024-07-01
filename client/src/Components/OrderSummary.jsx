import { useNavigate } from "react-router-dom";
import { Box } from "../ui/Box";
import { Button } from "../ui/Button";
import { Headings } from "../ui/Headings";
import { Input } from "../ui/Input";
import { TableBuilder, TableData, TableHead, TableRow } from "../ui/Table";
import { useDispatch, useSelector } from "react-redux";
import { removeDish } from "../reducers/dishSlice";
export default function OrderSummary() {
  const addedDishes = useSelector((state) => state.dish.allDishes);
  console.log(addedDishes);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <Button varient="primary" size="m" onClick={() => navigate("/checkout")}>
        Continue
      </Button>
      <Headings>ORDER SUMMARY</Headings>
      <Headings type="label">Total item in cart</Headings>
      <TableBuilder size="special">
        <TableHead col="five">
          <TableData>image</TableData>
          <TableData style={{ justifySelf: "left" }}>description</TableData>
          <TableData>price</TableData>
          <TableData>Qnt</TableData>
        </TableHead>
        {addedDishes.map((e) => {
          return (
            <div key={e.id}>
              <TableRow col="five">
                <TableData>X</TableData>
                <TableData style={{ justifySelf: "left" }}>{e.item}</TableData>
                <TableData>{e.price}</TableData>
                <TableData>
                  <div>
                    {/* <Button varient="none">+</Button>
                <span>sd</span>
                <Button varient="none">-</Button> */}
                    <select>
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(
                        (num) => (
                          <option value={num} key={num}>
                            {num}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </TableData>
                <TableData>
                  <Button
                    size="s"
                    varient="none"
                    onClick={()=>dispatch(removeDish(e.id))}
                  >
                    Remove
                  </Button>
                </TableData>
              </TableRow>
            </div>
          );
        })}
      </TableBuilder>
    </div>
  );
}
