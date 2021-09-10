class playerTest{
    constructor(){
        this.player = 0;
    }

    position(){
        return this.player
    }
    addPosition(position){
        this.player += position;
    }
    newPosition(position){
        this.player = position;
    }
}

