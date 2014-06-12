Class('AppController').inherits(Widget)({
    prototype : {
        setup : function setup(options){

            this.gridController = new GridController();
            this.gridView = new GridView();

            this._bindEvents();

            return true;
        },

        _bindEvents : function _bindEvents(){
            this.gridController.bind('data-update', this._updateGridView.bind(this));
        },

        _updateGridView : function _updateGridView(ev){
            this.gridView.render({
                data : ev.data
            });
        }
    }
});