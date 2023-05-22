interface IPosition {
  x: number;
  y: number;
}
export interface IGameEntityMapper {
  id: string;
  gameEntityType: string;
  position: IPosition;
  anim?: string | undefined;
  direction?: string;
  staticgroup?: Phaser.Physics.Arcade.StaticGroup[];
  playerName ? : string;
}
