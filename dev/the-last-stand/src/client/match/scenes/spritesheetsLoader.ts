import { IHeroesSpritePaths } from '../../../typescript/interfaces/IHeroesSpritesPaths';

const spriteSheetsLoader: IHeroesSpritePaths[] = [
  {
    heroName: 'chuck',
    spriteSheets: [
      {
        key: 'idle',
        path: '/assets/heroes/chuck/spritesheets/chuck_idle.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 3,
        frameRate: 8,
        repeat: -1,
      },
      {
        key: 'run',
        path: '/assets/heroes/chuck/spritesheets/chuck_run.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 5,
        frameRate: 10,
        repeat: -1,
      },
      {
        key: 'jump',
        path: '/assets/heroes/chuck/spritesheets/chuck_jump.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 3,
        frameRate: 4,
        repeat: 0,
      },
      {
        key: 'doubleJump',
        path: '/assets/heroes/chuck/spritesheets/chuck_doublejump.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 5,
        frameRate: 4,
        repeat: 0,
      },
      {
        key: 'fall',
        path: '/assets/heroes/chuck/spritesheets/chuck_jump.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 3,
        endFrame: 3,
        frameRate: 8,
        repeat: 0,
      },
      {
        key: 'attack1',
        path: '/assets/heroes/chuck/spritesheets/chuck_attack_1.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 5,
        frameRate: 16,
        repeat: 0,
      },
      {
        key: 'attack2',
        path: '/assets/heroes/chuck/spritesheets/chuck_attack_2.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 7,
        frameRate: 16,
        repeat: 0,
        frameEvents: [4, 7],
      },
      {
        key: 'attack3',
        path: '/assets/heroes/chuck/spritesheets/chuck_attack_3.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 7,
        frameRate: 16,
        repeat: 0,
      },
      {
        key: 'climb',
        path: '/assets/heroes/chuck/spritesheets/chuck_climb.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 5,
        frameRate: 10,
        repeat: -1,
      },
      {
        key: 'death',
        path: '/assets/heroes/chuck/spritesheets/chuck_death.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 5,
        frameRate: 10,
        repeat: 0,
      },
      {
        key: 'hurt',
        path: '/assets/heroes/chuck/spritesheets/chuck_hurt.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 1,
        frameRate: 4,
        repeat: 1,
      },
      {
        key: 'kick',
        path: '/assets/heroes/chuck/spritesheets/chuck_kick.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 5,
        frameRate: 10,
        repeat: 0,
      },
      {
        key: 'runAttack',
        path: '/assets/heroes/chuck/spritesheets/chuck_run_attack.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 5,
        frameRate: 10,
        repeat: 0,
      },
    ],
  },
  {
    heroName: 'solana',
    spriteSheets: [
      {
        key: 'idle',
        path: '/assets/heroes/solana/spritesheets/solana_idle.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 3,
        frameRate: 8,
        repeat: -1,
      },
      {
        key: 'run',
        path: '/assets/heroes/solana/spritesheets/solana_run.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 5,
        frameRate: 10,
        repeat: -1,
      },
      {
        key: 'jump',
        path: '/assets/heroes/solana/spritesheets/solana_jump.png',
        frameWidth: 29,
        frameHeight: 36,
        startFrame: 0,
        endFrame: 3,
        frameRate: 4,
        repeat: 0,
      },
      {
        key: 'doubleJump',
        path: '/assets/heroes/solana/spritesheets/solana_doublejump.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 5,
        frameRate: 4,
        repeat: 0,
      },
      {
        key: 'fall',
        path: '/assets/heroes/solana/spritesheets/solana_jump.png',
        frameWidth: 29,
        frameHeight: 36,
        startFrame: 3,
        endFrame: 3,
        frameRate: 8,
        repeat: 0,
      },
      {
        key: 'attack1',
        path: '/assets/heroes/solana/spritesheets/solana_attack_1.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 5,
        frameRate: 8,
        repeat: 0,
      },
      {
        key: 'attack2',
        path: '/assets/heroes/solana/spritesheets/solana_attack_2.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 7,
        frameRate: 8,
        repeat: 0,
        frameEvents: [4, 7],
      },
      {
        key: 'attack3',
        path: '/assets/heroes/solana/spritesheets/solana_attack_3.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 7,
        frameRate: 8,
        repeat: 0,
      },
      {
        key: 'climb',
        path: '/assets/heroes/solana/spritesheets/solana_climb.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 5,
        frameRate: 10,
        repeat: -1,
      },
      {
        key: 'death',
        path: '/assets/heroes/solana/spritesheets/solana_death.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 5,
        frameRate: 10,
        repeat: 0,
      },
      {
        key: 'hurt',
        path: '/assets/heroes/solana/spritesheets/solana_hurt.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 1,
        frameRate: 4,
        repeat: 1,
      },
      {
        key: 'kick',
        path: '/assets/heroes/solana/spritesheets/solana_kick.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 5,
        frameRate: 10,
        repeat: 0,
      },
      {
        key: 'runAttack',
        path: '/assets/heroes/solana/spritesheets/solana_run_attack.png',
        frameWidth: 20,
        frameHeight: 35,
        startFrame: 0,
        endFrame: 5,
        frameRate: 10,
        repeat: 0,
      },
    ],
  },
];
export default spriteSheetsLoader;
