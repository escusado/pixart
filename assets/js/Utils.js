Class('Utils')({
    getZeroesArray : function getZeroesArray(size){
        var array = [];

        for(var i = 0; i < size; i+=1){
            array.push(0);
        }

        return array;
    }
});