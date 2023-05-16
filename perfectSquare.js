function perfectSquare(num){
    let square = Math.sqrt(num)
    
    if(Math.ceil(square) === square ){
        return ++square ** 2
        //return square * square
    } else {
        return -1
    }
}

console.log(perfectSquare(9));