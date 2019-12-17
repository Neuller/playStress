new Vue({

    el: '#vue-app',

    data: {
        hp: 100,
        fim: false
    },

    methods: {

        socar:function(){
            this.hp -= 10;
            if ( this.hp <= 0 ){
                this.fim = true;
            }
        },

        resetar:function(){
            this.hp = 100;
            this.fim = false;
        },

        health:function(){
            if(this.hp >40){
                return true
            }
            return false;
        },

        barraHealth:function(){
            if(this.hp >40){
                return true
            }
            return false;
        }

}

});