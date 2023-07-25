import Starship from "src/GangOfFour/Starship";

export default class StarDestroyerStarship extends Starship{
    attack(target: Starship){
        return (`attack ${target.name}`)
    }
}