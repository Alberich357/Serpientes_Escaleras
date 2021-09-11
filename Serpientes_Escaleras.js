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
         this.newBoard[30] = 26;
         
        //Stairs 
        this.newBoard[3] = 10;
        this.newBoard[5] = 35;
        this.newBoard[18] = 39;
        this.newBoard[30] = 53;
        this.newBoard[59] = 83;
        this.newBoard[67] = 77;
        this.newBoard[70] = 89;
        this.newBoard[20] = 40;
        
        console.log(this.match());

    }

    dice(){
        let dice = Math.floor(Math.random()*6)+1;
        return dice
    }
    match(){
        let player1 = new playerTest();
        let player2 = new playerTest();

        while(player1.position()<100 && player2.position()<100){
            player1.addPosition(this.dice());
            player1.newPosition(this.newBoard[player1.position()]);
            console.log(player1.position());
            player2.addPosition(this.dice());
            player2.newPosition(this.newBoard[player2.position()]);
            console.log(player2.position());
        }

        if(player1.position() > player2.position()){
            return "player1 WINS!"
        }
        else{
            return "player2 WINS!"
        }
    }
}
new Board;

