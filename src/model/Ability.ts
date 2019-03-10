import bomb from '../images/bomb.svg';
import cutter from '../images/cutter.svg';
import burn from '../images/burn.svg';
import ice from '../images/ice.svg';
import needle from '../images/needle.svg';
import spark from '../images/spark.svg';
import stone from '../images/stone.svg';

const values: Ability[] = [];

export class Ability {
  private constructor(public readonly icon: string) {
    values.push(this);

    // preload the image
    const img = new Image();
    img.src = icon;
  }

  static values() {
    return values;
  }

  public static BOMB = new Ability(bomb);
  public static CUTTER = new Ability(cutter);
  public static BURN = new Ability(burn);
  public static ICE = new Ability(ice);
  public static NEEDLE = new Ability(needle);
  public static SPARK = new Ability(spark);
  public static STONE = new Ability(stone);
}
