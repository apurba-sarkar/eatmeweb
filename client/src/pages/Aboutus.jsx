import { Headings } from "../ui/Headings";

export default function Aboutus() {
  return (
    <div className="aboutus">
      <img src="./ot.jpg" alt="" />
      <div className="aboutus-main">
        <img src="./mainlogo.jpg" alt="" />
        <div className="abtus-cnt">
          <p>
            Here, ancient customs and future trends coexist, and the intricacies
            of African culture blend seamlessly together over an
            Ethiopian-brewed coffee, or a bowl of Senegalese black-eyed pea stew
            and a side of spicy Ghanaian plantains. Inspired by our Co-Founder
            and Executive Chef Pierre Thiam’s mission to share African culture
            through food, Teranga reflects the depth, richness, and vibrancy of
            Africa’s diverse culinary traditions in a modern, fast-casual
            setting.
          </p>
          <Headings type="h3" colorvar="primary">WELCOME HOME.</Headings>
        </div>
      </div>
    </div>
  );
}
