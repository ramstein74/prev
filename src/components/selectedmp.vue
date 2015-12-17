<style scoped lang="stylus">
margin:0px
.tabela
  cellspacing: "10"

.row
  margin 14px

hr
  border-top 1px dashed #0f6d92

/* Zebra striping */

tr:hover
  cursor:pointer



</style>

<template lang="jade">

.ui.top.attached.tabular.menu
  a.item.active(data-tab="first") 
    i.check.circle.icon
  a.item(data-tab="second") 
    i.align.justify.icon 
.ui.bottom.attached.tab.segment.active(data-tab="first")
  .ui.one.column.grid

    .column
      .ui.raised.segment


        a.ui.ribbon.label Resinas
          
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
            |Resinas
        
        span
          table.tabela.row
            thead
              tr
                th phr
                th %
                th Custo/Ton


            tbody
              tr(is="new-mp" ,v-for="mp in mpdata| filterBy '405' |filterBy true", :mp.sync="mp")
        
        hr
        a.ui.ribbon.label Lubrificantes
        span
          a.ui.tag.label 
            |€ 100.00
        
        span
          table.tabela.row
            thead
              tr
                th phr
                th %
                th Custo/Ton

            tbody
              tr(is="new-mp" ,v-for="mp in mpdata| filterBy '430' |filterBy true", :mp.sync="mp")
        hr
        a.ui.ribbon.label Antichoques
        span
          a.ui.tag.label 
            |€ 100.00
        span
          table.tabela.row
            thead
              tr
                th phr
                th %
                th Custo/Ton

            tbody
              tr(is="new-mp" ,v-for="mp in mpdata| filterBy '410' |filterBy true", :mp.sync="mp")
        hr
        a.ui.ribbon.label Plastificantes
        span
          a.ui.tag.label 
            |€ 100.00
        span
          table.tabela.row
            thead
              tr
                th phr
                th %
                th Custo/Ton

            tbody
              tr(is="new-mp" ,v-for="mp in mpdata| filterBy '425' |filterBy true", :mp.sync="mp")
        hr
        a.ui.ribbon.label Estabilizantes
        span
          a.ui.tag.label 
            |€ 100.00
        span
          table.tabela.row
            thead
              tr
                th phr
                th %
                th Custo/Ton

            tbody
              tr(is="new-mp" ,v-for="mp in mpdata| filterBy '415' |filterBy true", :mp.sync="mp")
        hr
        a.ui.ribbon.label Auxiliares
        span
          a.ui.tag.label 
            |€ 100.00
        span
          table.tabela.row
            thead
              tr
                th phr
                th %
                th Custo/Ton

            tbody
              tr(is="new-mp" ,v-for="mp in mpdata| filterBy '420' |filterBy true", :mp.sync="mp")
        hr
        a.ui.ribbon.label Pigmentos
        span
          a.ui.tag.label 
            |€ 100.00
        span
          table.tabela.row
            thead
              tr
                th phr
                th %
                th Custo/Ton

            tbody
              tr(is="new-mp" ,v-for="mp in mpdata| filterBy '440' |filterBy true", :mp.sync="mp")
   
        a.ui.ribbon.label Cargas
        span
          a.ui.tag.label 
            |€ 100.00
        span
          table.tabela.row
            tbody
              tr(is="new-mp" ,v-for="mp in mpdata| filterBy '455' |filterBy true", :mp.sync="mp")

        a.ui.red.ribbon.label Total
        span
          a.ui.red.tag.label 
            |€ 100.00
        
.ui.bottom.attached.tab.segment(data-tab="second")
  | Second




</template>

<script>
import newMp from './newmp.vue'
import details from './details.vue'
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
    newMp,
    details
  }
  }
</script>