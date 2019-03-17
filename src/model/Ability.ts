import bomb from '../images/bomb.svg';
import cutter from '../images/cutter.svg';
import burn from '../images/burn.svg';
import ice from '../images/ice.svg';
import needle from '../images/needle.svg';
import spark from '../images/spark.svg';
import stone from '../images/stone.svg';

const values: Ability[] = [];

export class Ability {
  private constructor(
    public readonly name: string,
    public readonly icon: string,
  ) {
    values.push(this);

    // preload the image
    const img = new Image();
    img.src = icon;
  }

  static values() {
    return values;
  }

  public static BOMB = new Ability('bomb', bomb);
  public static CUTTER = new Ability('cutter', cutter);
  public static BURN = new Ability('burn', burn);
  public static ICE = new Ability('ice', ice);
  public static NEEDLE = new Ability('needle', needle);
  public static SPARK = new Ability('spark', spark);
  public static STONE = new Ability('stone', stone);
}

export type AbilitySet = [Ability | undefined, Ability | undefined];
