import Starship from "src/GangOfFour/Starship";
import CorvetteStarship from "src/GangOfFour/CorvetteStarship";
import StarDestroyerStarship from "src/GangOfFour/StarDestroyerStarship";

export default class StarshipFactory{
    private static starship: Starship;

    static make(params: string){
        if(params == "corvette"){
            return this.starship = new CorvetteStarship("XU5800", 200)
        } else if(params == "destroyer"){
            return this.starship = new StarDestroyerStarship("SUPER DESTROYER")
        }
    }

}