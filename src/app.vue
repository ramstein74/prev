<style scoped lang="stylus">
body.pushable 
  background #0085AD
.ui.inverted.menu
  background #0085AD
</style>
<template lang="jade">
layout
  menu(title="Início",icon="home",component="formlab",@new-view="setView")
  menu(title="Receita laboratório",icon="lab",component="formlab",@new-view="setView")
  menu(title="Receita Fabril",icon="world",component="formind",@new-view="setView")
  menu(title="Programa Produção",icon="calendar",component="progprod",@newview="setView")
  menu(title="Reservatórios",icon="database",component="reserva",@new-view="setView")
  menu(title="Resinas",icon="signal",component="resinas",@new-view="setView")
  menu(title="Consumos",icon="signal",component="consumos",@new-view="setView")
  menu(title="Utilizador",icon="user",component="user",@new-view="setView")
.pusher#pusher
  component(:is="currentView" keep-alive)
</template>

<script>
props:[];
import formlab from './components/formlab.vue'
import formind from './components/formind.vue'
import consumos from './components/consumos.vue'
import menu from './components/menu.vue'
import layout from './components/layout.vue'
import user from './components/user.vue'
export default {
    data(){
        return {
            currentView:'consumos'
        }
    },
    methods:{
      'setView':function(newView){
      this.currentView=newView;
      $('#sidebar').sidebar('toggle');
    }
    },
components:{
    formlab,
    formind,
    consumos,
    menu,
    layout,
    user
},    
ready(){
    $('.ui.sidebar').sidebar({
        dimPage: true,
        transition: 'scale down'
    }).sidebar('attach events', 'button');
  }
}
</script>
