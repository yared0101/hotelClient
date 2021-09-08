import DetailOfVictuals from "../components/DetailOfVictuals";
import TopVictualMenu from "../components/TopVictualMenu";
import Location from "../components/Location";
import Footer from "../components/Footer";

export const FoodDrink = () => {
  return (
    <div>
      <DetailOfVictuals
        imageLocation="/victuals/poke.png"
        title="Try out new"
        name="Cheezy Bluster"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis possimus minima repellendus unde aliquam iste vel, nam cumque soluta aut blanditiis quis, veniam amet ipsa excepturi cum laborum veritatis."
        price="321"
        time="28 min"
      />
      <TopVictualMenu />
      <Location />
      <Footer />
    </div>
  );
};

export default FoodDrink;
