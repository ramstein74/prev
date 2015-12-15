<style scoped>
margin:4px;
.tabela { 

  cellspacing: "10";

}
/* Zebra striping */

tr:hover{
  cursor:pointer;
}


</style>

<template lang="jade">
a.ui.label.green
  i.mail.icon
  |Save
a.ui.label
  i.mail.icon
  |Save



.ui.one.column.grid

  .column
    .ui.raised.segment


      a.ui.blue.ribbon.label Resinas
        
      span
        a.ui.tag.label 
          |€ 100.00
      span
        a.ui.tag.label 
          |€ 100.00
      span
        a.ui.tag.label 
          |€ 100.00
      span
        a.ui.tag.red.label 
          |€ 100.00
      span
        new-mp(v-for="mp in mpdata| filterBy '405' |filterBy true", :mp.sync="mp")
      
      a.ui.blue.ribbon.label Lubrificantes
      span
        a.ui.tag.label 
          |€ 100.00
      span 
        new-mp(v-for="mp in mpdata| filterBy '430' |filterBy true", :mp.sync="mp")
      
      a.ui.blue.ribbon.label Antichoques
      span
        a.ui.tag.label 
          |€ 100.00
      span
        table.tabela
          tbody
            tr(is="new-mp" ,v-for="mp in mpdata| filterBy '410' |filterBy true", :mp.sync="mp")

      a.ui.blue.ribbon.label Plastificantes
      span
        a.ui.tag.label 
          |€ 100.00
      span 
        new-mp(v-for="mp in mpdata| filterBy '425' |filterBy true", :mp.sync="mp")
      
      a.ui.blue.ribbon.label Estabilizantes
      span
        a.ui.tag.label 
          |€ 100.00
      span 
        new-mp(v-for="mp in mpdata| filterBy '415' |filterBy true", :mp.sync="mp")
      
      a.ui.blue.ribbon.label Auxiliares
      span
        a.ui.tag.label 
          |€ 100.00
      span 
        new-mp(v-for="mp in mpdata| filterBy '420' |filterBy true", :mp.sync="mp")
      
      a.ui.blue.ribbon.label Pigmentos
      span
        a.ui.tag.label 
          |€ 100.00
      span 
        new-mp(v-for="mp in mpdata| filterBy '440' |filterBy true", :mp.sync="mp")
      
      a.ui.blue.ribbon.label Cargas
      span
        a.ui.tag.label 
          |€ 100.00
      span 
        new-mp(v-for="mp in mpdata| filterBy '455' |filterBy true", :mp.sync="mp")
      a.ui.red.ribbon.label Total
      span
        a.ui.red.tag.label 
          |€ 100.00
      

</template>

<script>
import newMp from './newmp.vue'
export default {
  props: ['mpdata'],
  data () {
    return {
    }
  },
  methods:{

  },
  computed:{

	},
  components:{
    newMp
  }
  }
</script>