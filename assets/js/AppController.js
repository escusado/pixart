Class('AppController').inherits(Widget)({
    prototype : {
        setup : function setup(options){

            this.gridController = new GridController({
                size : 19
            });

            this.gridView = new GridView();
            this.gridView.render(this.element);

            this._bindEvents();

            this.gridController.update();

            return true;
        },

        _bindEvents : function _bindEvents(){
            this.gridController.bind('update', this._updateGridView.bind(this));
        },

        _updateGridView : function _updateGridView(ev){
            console.log('>', ev);
            this.gridView.update({
                data : ev.data
            });
        }
    }
});