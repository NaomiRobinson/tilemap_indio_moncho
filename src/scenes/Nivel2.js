export default class Juego extends Phaser.Scene {
  constructor() {
    super("nivel2");
  }

  init(data) {
    this.nivel = 2;
    this.cantidadEstrellas = data.cantidadEstrellas || 0;
    
  }

  create() {
 
    const map = this.make.tilemap({ key: "map2" });


    const capaFondo = map.addTilesetImage("sky", "tilesFondo");
    const capaPlataformas = map.addTilesetImage("platform", "tilesPlataforma");


    const fondoLayer = map.createLayer("fondo", capaFondo, 0, 0);
    const plataformaLayer = map.createLayer(
      "plataformas",
      capaPlataformas,
      0,
      0
    );
    const objectosLayer = map.getObjectLayer("objetos");

    plataformaLayer.setCollisionByProperty({ colision: true });

    console.log("spawn point player", objectosLayer);

    
    let spawnPoint = map.findObject("objetos", (obj) => obj.name === "jugador");
    console.log(spawnPoint);

    this.jugador = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "dude");


    this.jugador.setBounce(0.1);
    this.jugador.setCollideWorldBounds(true);

    spawnPoint = map.findObject("objetos", (obj) => obj.name === "salida");
    console.log("spawn point salida ", spawnPoint);
    this.salida = this.physics.add
      .sprite(spawnPoint.x, spawnPoint.y, "salida")
      .setScale(0.2);

 
    this.cursors = this.input.keyboard.createCursorKeys();


    this.estrellas = this.physics.add.group();

    objectosLayer.objects.forEach((objData) => {


      const { x = 0, y = 0, name } = objData;
      switch (name) {
        case "estrella": {
 
          const star = this.estrellas.create(x, y, "star");
          break;
        }
      }
    });

    this.physics.add.collider(this.jugador, plataformaLayer);
    this.physics.add.collider(this.estrellas, plataformaLayer);
    this.physics.add.collider(
      this.jugador,
      this.estrellas,
      this.recolectarEstrella,
      null,
      this
    );
    this.physics.add.collider(this.salida, plataformaLayer);
    this.physics.add.overlap(
      this.jugador,
      this.salida,
      this.esVencedor,
      () => this.cantidadEstrellas >= 10, // condicion de ejecucion
      this
    );


    this.cantidadEstrellasTexto = this.add.text(
      15,
      15,
      "Nivel: " +
        this.nivel +
        " / Estrellas recolectadas: " +
        this.cantidadEstrellas.toString(),
      { fontSize: "15px", fill: "#FFFFFF" }
    );
  }

  update() {

    if (this.cursors.left.isDown) {
      this.jugador.setVelocityX(-160);
      this.jugador.anims.play("left", true);
    }
    //move right
    else if (this.cursors.right.isDown) {
      this.jugador.setVelocityX(160);
      this.jugador.anims.play("right", true);
    }
    //stop
    else {
      this.jugador.setVelocityX(0);
      this.jugador.anims.play("turn");
    }

    //jump
    if (this.cursors.up.isDown && this.jugador.body.blocked.down) {
      this.jugador.setVelocityY(-330);
    }
  }

  recolectarEstrella(jugador, estrella) {
    estrella.disableBody(true, true);

  
    this.cantidadEstrellas++;

    this.cantidadEstrellasTexto.setText(
      "Nivel: " +
        this.nivel +
        " / Estrellas recolectadas: " +
        this.cantidadEstrellas.toString()
    );
  }

  esVencedor(jugador, salida) {
   
    console.log("estrellas recolectadas", this.cantidadEstrellas);

    this.scene.start("nivel3", {
      cantidadEstrellas: this.cantidadEstrellas,
    });
  }
}

