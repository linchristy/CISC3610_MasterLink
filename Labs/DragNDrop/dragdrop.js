var config = {
    type: Phaser.AUTO,
    width: 700,
    height: 450,
    backgroundColor: '#F5F5DC',
    parent: 'game',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload(){
    // basket for the fruits to be dragged there
    this.load.image('basket','images/basket.png');

    // images of fruits loaded
    this.load.image('banana','images/banana.png');
    this.load.image('coconut','images/coconut.png');
    this.load.image('grape','images/grape.png');
    this.load.image('orange','images/orange.png');
    this.load.image('pear','images/pear.png');
    this.load.image('watermelon','images/watermelon.png');
}

function create(){
    // position of the sprite
    this.add.sprite(380,300,'basket');
    var banana = this.add.sprite(100,100,'banana').setInteractive();
    var coconut = this.add.sprite(200,100,'coconut').setInteractive();
    var grape = this.add.sprite(300,100,'grape').setInteractive();
    var orange = this.add.sprite(400,100,'orange').setInteractive();
    var pear = this.add.sprite(500,100,'pear').setInteractive();
    var watermelon = this.add.sprite(600,100,'watermelon').setInteractive();

    // sprite that you can move around
    this.input.setDraggable(banana);
    this.input.setDraggable(coconut);
    this.input.setDraggable(grape);
    this.input.setDraggable(orange);
    this.input.setDraggable(pear);
    this.input.setDraggable(watermelon);

    this.input.on('drag', function(pointer, gameObject, dragX, dragY){
        gameObject.x = dragX;
        gameObject.y = dragY;
    });
} 