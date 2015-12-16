<style scoped lang="stylus">
.reset::hover
  cursor pointer

.tabmp
  margin 4px
  width 100%
  height 600px
  overflow scroll

</style>

<template lang="jade">
loadmp(:mpdata.sync="mpdata",:totalscat.sync="totalscat")
.ui.grid
<<<<<<< HEAD
  .sixteen.wide.column
    div.small.ui.buttons#topbuttons
      button.ui.button.teal(@click="setfilter('405')",:class="{'active':filter==='405'}", v-model="filter") Resinas   
        count-category(:total="total", :selected="selected")
      button.ui.button.teal(@click="setfilter('430')",:class="{'active':filter==='430'}", v-model="filter") Lubrificantes
        count-category(:total="total", :selected="selected")
      button.ui.button.teal(@click="setfilter('410')",:class="{'active':filter==='410'}", v-model="filter") Antichoques
        count-category(:total="total", :selected="selected")
      button.ui.button.teal(@click="setfilter('415')",:class="{'active':filter==='415'}", v-model="filter") Estabilizantes
        count-category(:total="total", :selected="selected")
      button.ui.button.teal(@click="setfilter('425')",:class="{'active':filter==='425'}", v-model="filter") Plastificantes
        count-category(:total="total", :selected="selected")
      button.ui.button.teal(@click="setfilter('420')",:class="{'active':filter==='420'}", v-model="filter") Auxiliares
        count-category(:total="total", :selected="selected")
      button.ui.button.teal(@click="setfilter('440')",:class="{'active':filter==='440'}", v-model="filter") Pigmentos
        count-category(:total="total", :selected="selected")
      button.ui.button.teal(@click="setfilter('455')",:class="{'active':filter==='455'}", v-model="filter") Cargas
        count-category(:total="total", :selected="selected")
      button.ui.button.teal(@click="setfilter('4')",:class="{'active':filter==='4'}", v-model="filter") Todos
        count-category(:total="total", :selected="selected")
      button.ui.button.teal(@click="setfilter('true')",:class="{'active':filter=='true'}", v-model="filter") Selecionados
        count-category(:total="total", :selected="selected")
  .ten.wide.column
    div.tabmp
        .ui.top.attached.tabular.menu
          a.item(data-tab='resinas') Resinas 
          a.item(data-tab='lubrificantes') Lubrificantes
          a.item.active(data-tab='antichoques') Antichoques
          a.item.active(data-tab='plastificantes') Plastificantes
          a.item.active(data-tab='estabilizantes') Estabilizantes
          a.item.active(data-tab='auxiliares') Auxiliares
          a.item.active(data-tab='pigmentos') Pigmentos
          a.item.active(data-tab='cargas') Cargas
          a.item.active(data-tab='seleccionados') Seleccionados
        .ui.bottom.attached.tab.segment(data-tab='resinas')
          table-mp(:filter="405",:mpdata.sync="mpdata")
        .ui.bottom.attached.tab.segment(data-tab='lubrificantes')
         table-mp(:filter="430",:mpdata.sync="mpdata")
        .ui.bottom.attached.tab.segment.active(data-tab='antichoques')
         table-mp(:filter="410",:mpdata.sync="mpdata")
        .ui.bottom.attached.tab.segment.active(data-tab='estabilizantes')
         table-mp(:filter="415",:mpdata.sync="mpdata")
        .ui.bottom.attached.tab.segment.active(data-tab='plastificantes')
         table-mp(:filter="425",:mpdata.sync="mpdata")
        .ui.bottom.attached.tab.segment.active(data-tab='auxiliares')
         table-mp(:filter="420",:mpdata.sync="mpdata")
        .ui.bottom.attached.tab.segment.active(data-tab='pigmentos')
         table-mp(:filter="440",:mpdata.sync="mpdata")
        .ui.bottom.attached.tab.segment.active(data-tab='cargas')
         table-mp(:filter="455",:mpdata.sync="mpdata")
        .ui.bottom.attached.tab.segment.active(data-tab='seleccionados')
         selected-mp(:mpdata.sync="mpdata")

    
=======
  //- .sixteen.wide.column
  //-   div.tiny.ui.buttons#topbuttons
  //-     button.ui.button.teal(@click="setfilter('405')",:class="{'active':filter==='405'}", v-model="filter") Resinas   
  //-       count-category(:total="totalscat['405']", :selected="resinas")
  //-     button.ui.button.teal(@click="setfilter('430')",:class="{'active':filter==='430'}", v-model="filter") Lubrificantes
  //-       count-category(:total="totalscat['430']", :selected="lubrificantes")
  //-     button.ui.button.teal(@click="setfilter('410')",:class="{'active':filter==='410'}", v-model="filter") Antichoques
  //-       count-category(:total="totalscat['410']", :selected="antichoques")
  //-     button.ui.button.teal(@click="setfilter('415')",:class="{'active':filter==='415'}", v-model="filter") Estabilizantes
  //-       count-category(:total="totalscat['415']", :selected="estabilizantes")
  //-     button.ui.button.teal(@click="setfilter('425')",:class="{'active':filter==='425'}", v-model="filter") Plastificantes
  //-       count-category(:total="totalscat['425']", :selected="plastificantes")
  //-     button.ui.button.teal(@click="setfilter('420')",:class="{'active':filter==='420'}", v-model="filter") Auxiliares
  //-       count-category(:total="totalscat['420']", :selected="auxiliares")
  //-     button.ui.button.teal(@click="setfilter('440')",:class="{'active':filter==='440'}", v-model="filter") Pigmentos
  //-       count-category(:total="totalscat['440']", :selected="pigmentos")
  //-     button.ui.button.teal(@click="setfilter('455')",:class="{'active':filter==='455'}", v-model="filter") Cargas
  //-       count-category(:total="totalscat['455']", :selected="cargas")
>>>>>>> master

  .nine.wide.column
    div.tabmp
      .ui.bottom.attached.tab.segment.active
          table-mp(:filter="filter",:mpdata.sync="mpdata")

  .seven.wide.column
    selected-mp(:mpdata.sync="mpdata")
  
</template>

<script>
import mp from './components/mp.vue'
import loadmp from './components/loadmp.vue'
import countCategory from './components/countcategory.vue'
import tableMp from './components/tablemp.vue'
import selectedMp from './components/selectedmp.vue'
export default {
  ready(){
    console.log("ready");
    $('.menu .item')
   .tab();
;
  },
  data() {
    return {
      totalscat:{
        '405':0,
        '430':0,
        '410':0,
        '415':0,
        '425':0,
        '420':0,
        '440':0,
        '455':0,
        '435':0,
        '445':0,
        '460':0,
        '450':0
      },
      filter:'405',
      mpdata: []        
    }
  },
  methods:{

      setfilter:function(to){
          // console.log(to);
          this.filter=to;
      },
      gettotal:function(cat){
        let temp= this.mpdata.filter(d => (d.checked==true)&(d.cod.substr(0,3)===cat));
            return temp.reduce(function(acc, item) {
              return acc + 1
            }, 0)
      }
      
  },
  computed: {
      resinas() {
            return this.gettotal("405");
        },
      lubrificantes() {
            return this.gettotal("430");
        },
      antichoques() {
            return this.gettotal("410");
        },
      estabilizantes() {
            return this.gettotal("415");
        },
      plastificantes() {
            return this.gettotal("425");
        },
      auxiliares() {
            return this.gettotal("420");
        },
      pigmentos() {
            return this.gettotal("440");
        },
      cargas() {
            return this.gettotal("455");
        },

      total() {
          return this.mpdata.reduce(function(acc, item) {
              return acc + 1
            }, 0)
      },
          
        selected() {
            console.log("selecting");
            let temp= this.mpdata.filter(d => d.checked==true);
            return temp.reduce((total, user) => {
              return total + 1;    
            }, 0);
        }

  },
  components: {
    mp,
    loadmp,
    countCategory,
    tableMp,
    selectedMp
  }
}
</script>
