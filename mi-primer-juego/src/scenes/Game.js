import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        this.load.setPath('assets');
        
        this.load.image('background', 'bg.png');
        this.load.image('logo', 'logo.png');

        this.load.image('sky', 'sky.png');
        this.load.image('ground', 'platform.png');
        this.load.image('star', 'star.png');
        this.load.image('bomb', 'bomb.png');
        
       // this.load.spritesheet('dude', 'dude.png', { frameWidth: 32, frameHeight: 48 });


        this.load.spritesheet('cr7sprite', 'cr7spritesheet.png', { frameWidth: 80, frameHeight: 155 });

        // espacios
        
    }

    create ()
    {
       
        this.add.image(400, 300, 'sky');

        this.suelos=this.physics.add.staticGroup();

        this.suelos.create(400, 568, 'ground').setScale(2).refreshBody();
        
        this.suelos.create(600, 400, 'ground');
        this.suelos.create(50, 250, 'ground');
        this.suelos.create(750, 220, 'ground');


        this.player = this.physics.add.sprite(100, 450, 'cr7sprite');

        // this.player = this.physics.add.sprite(100, 450, 'dude');

        this.player.setBounce(1.1);
        this.player.setCollideWorldBounds(true);

    }
}
