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

class Board{
    constructor(){
        this.newBoard = new Array();
        for(let i=0;i<110;i++){
            this.newBoard.push(i);
        }
        console.log(this.newBoard);
         //Snakes
         this.newBoard[6] = 2;
         this.newBoard[24] = 13;
         this.newBoard[57] = 33;
         this.newBoard[86] = 38;
         this.newBoard[88] = 51;
         this.newBoard[97] = 61;
         this.newBoard[87] = 85;
         
        //Stairs 
        this.newBoard[3] = 10;
        this.newBoard[5] = 35;
        this.newBoard[18] = 39;
        this.newBoard[30] = 53;
        this.newBoard[59] = 83;
        this.newBoard[67] = 77;
        this.newBoard[70] = 89;
        
        console.log(this.match());

    }

    dice(){
        let dice = Math.floor(Math.random()*6)+1;
        return dice
    }
}

