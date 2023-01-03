import { PlayerShip1Lvl1, PlayerShip1Lvl2, PlayerShip1Lvl3, PlayerShip1Lvl4, PlayerShip1Lvl5, PlayerShip1Lvl6, PlayerShip1Lvl7 } from './type1';
import { PlayerShip2Lvl1, PlayerShip2Lvl2, PlayerShip2Lvl3, PlayerShip2Lvl4, PlayerShip2Lvl5, PlayerShip2Lvl6, PlayerShip2Lvl7 } from './type2';
import { PlayerShip3Lvl1, PlayerShip3Lvl2, PlayerShip3Lvl3, PlayerShip3Lvl4, PlayerShip3Lvl5, PlayerShip3Lvl6, PlayerShip3Lvl7 } from './type3';
const PlayerShip1Templates = [PlayerShip1Lvl1, PlayerShip1Lvl2, PlayerShip1Lvl3, PlayerShip1Lvl4, PlayerShip1Lvl5, PlayerShip1Lvl6, PlayerShip1Lvl7];
const PlayerShip2Templates = [PlayerShip2Lvl1, PlayerShip2Lvl2, PlayerShip2Lvl3, PlayerShip2Lvl4, PlayerShip2Lvl5, PlayerShip2Lvl6, PlayerShip2Lvl7];
const PlayerShip3Templates = [PlayerShip3Lvl1, PlayerShip3Lvl2, PlayerShip3Lvl3, PlayerShip3Lvl4, PlayerShip3Lvl5, PlayerShip3Lvl6, PlayerShip3Lvl7];
const PlayerTypeTemplates = [PlayerShip1Templates, PlayerShip2Templates, PlayerShip3Templates];
export default PlayerTypeTemplates;
export { default as PlayerTemplate } from './PlayerTemplate';