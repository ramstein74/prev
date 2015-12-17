
<template lang="jade">


div.ui.left.vertical.inverted.labeled.sidebar.menu
  a.item
    i.home.icon
    | In&#237;cio
  a.item
    i.lab.icon
    | Receita laboratório
  a.item
    i.world.icon
    | Receita Fabril
  a.item
    i.calendar.icon
    | Programa Produção
  a.item
    i.database.icon
    | Reservatórios
  a.item
    i.line.chart.icon
    | Resinas
  a.item
    i.line.chart.icon
    | Consumos
.pusher
  app



</template>

<script>
props:[];
import app from './app.vue'
export default {
components:{
    app
},    
ready(){
    $('.ui.sidebar').sidebar({
        // context: $('.emptySegment'),
        dimPage: true,
         
        transition: 'scale down'
    }).sidebar('attach events', 'button');
  }
}
</script>
