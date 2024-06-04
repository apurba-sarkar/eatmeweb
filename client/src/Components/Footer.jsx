import { Headings } from "../ui/Headings";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        alignItems:"center",
        justifyContent: "center",
        height: "20rem",
        
        // backgroundColor: "red",
      }}
    >
      <Headings type="h3" colorvar="primary">
        © {new Date().getFullYear()} eatme. All Rights Reserved.
      </Headings>{" "}
    </footer>
  );
}
