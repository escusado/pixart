Class('GridView').inherits(Widget)({
    ELEMENT_CLASS : 'grid-view',
    prototype : {

        pixelTmpl : '<div data-coords="{{x}},{{y}}" class="pixel" style="background-color : {{color}};"></div>',

        init : function init(config){
            Widget.prototype.init.call(this, config);


        },

        update : function update(grid){
            var gridView = this,
                gridSize = grid.data.length;

            this.element.html();

            Utils.getZeroesArray(gridSize).forEach(function(item, i){
                Utils.getZeroesArray(gridSize).forEach(function(item, j){
                    var pixel = gridView.pixelTmpl.replace('{{color}}', grid.data[j][i] );
                    pixel = pixel.replace('{{x}}', j);
                    pixel = pixel.replace('{{y}}', i);
                    gridView.element.append(pixel);
                });
            });

        }
    }
});