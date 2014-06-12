Class('GridController').includes(CustomEventSupport)({
    prototype : {
        size : 0,
        grid : [],

        init : function init(config){

            this.size = config.size;

            this.grid = this._setupGrid(this.size);

        },

        _setupGrid : function _setupGrid(size){
            var grid = [];

            Utils.getZeroesArray(size).forEach(function(){
                grid.push(Utils.getZeroesArray(size));
            });

            return grid;
        },

        update : function update(){

            this._updateSprite(this.grid);

            this.dispatch('update', {data : this.grid});
        },

        _updateSprite : function _updateSprite(grid){
            var gridController = this,
                biggerHalfGrid = {
                    w : Math.ceil(grid.length / 2),
                    h : (grid.length-1)
                };


            this.addPixel(0,0, '#333');
            this.addPixel(9,0, '#333');

            for(var y = 0; y < biggerHalfGrid.h; y+=1){
                for(var x = 0; x < biggerHalfGrid.w; x+=1){

                    if(y===4 || x===2){
                        gridController.addPixel(x, y, '#333');
                    }

                    console.log('x:%d, y:%d', x, y);
                }
            }

        },

        addPixel : function addPixel(x, y, color){
            var left = {
                    x : x,
                    y : y
                },

                right = {
                    x : (this.grid.length-1) - x,
                    y : y
                };

                this.grid[left.x][left.y] = color;
                console.log('pix[%d][%d]: %s', left.x, left.y, color);
                this.grid[right.x][right.y] = color;
                console.log('pix[%d][%d]: %s', right.x, right.y, color);
        }
    }
});