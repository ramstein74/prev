
<template lang="jade">
div.ui.left.vertical.inverted.labeled.sidebar.menu
  a.item
    i.home.icon
    | In&#237;cio
  a.item
    i.lab.icon
    | Receita laborat&#243;rio
  a.item
    i.world.icon
    | Receita Fabril
  a.item
    i.calendar.icon
    | Programa Produ&#231;&#227;o
  a.item
    i.database.icon
    | Reservat&#243;rios
  a.item
    i.line.chart.icon
    | Resinas
  a.item
    i.line.chart.icon
    | Consumos
.pusher
  app

.emptySegment
  p
    | Lorem Ipsum ashdlsajdhljasdjlask ashdgashdgsadgh asdgjasdjgasdsaghjhasdgjhsdgsjadgsajdgasjasghdjas
br
button click me  

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
        context: $('.emptySegment'),
        dimPage: true,
         context: $('#app-container'),
        transition: 'scale down'
    }).sidebar('attach events', 'button');
  }
}
</script>
