<style scoped lang="stylus">
.reset::hover
  cursor pointer

.tabmp
  margin 4px


</style>

<template lang="jade">
loadmp(:mpdata.sync="mpdata",:totalscat.sync="totalscat")
.ui.grid
  .sixteen.wide.column
    div.tabmp
        .ui.top.attached.tabular.menu
          a.item.active(data-tab='resinas') Resinas 
            count-category(:total="totalscat['405']", :selected="resinas")
          a.item(data-tab='lubrificantes') Lubrificantes
            count-category(:total="totalscat['430']", :selected="lubrificantes")
          a.item(data-tab='antichoques') Antichoques
            count-category(:total="totalscat['410']", :selected="antichoques")
          a.item(data-tab='plastificantes') Plastificantes
            count-category(:total="totalscat['415']", :selected="plastificantes")
          a.item(data-tab='estabilizantes') Estabilizantes
            count-category(:total="totalscat['425']", :selected="estabilizantes")
          a.item(data-tab='auxiliares') Auxiliares
            count-category(:total="totalscat['420']", :selected="auxiliares")
          a.item(data-tab='pigmentos') Pigmentos
            count-category(:total="totalscat['440']", :selected="pigmentos")
          a.item(data-tab='cargas') Cargas
            count-category(:total="totalscat['455']", :selected="cargas")
          a.item(data-tab='seleccionados') Seleccionados
        .ui.bottom.attached.tab.segment.active(data-tab='resinas')
          table-mp(:filter="405",:mpdata.sync="mpdata")
        .ui.bottom.attached.tab.segment(data-tab='lubrificantes')
         table-mp(:filter="430",:mpdata.sync="mpdata")
        .ui.bottom.attached.tab.segment(data-tab='antichoques')
         table-mp(:filter="410",:mpdata.sync="mpdata")
        .ui.bottom.attached.tab.segment(data-tab='estabilizantes')
         table-mp(:filter="415",:mpdata.sync="mpdata")
        .ui.bottom.attached.tab.segment(data-tab='plastificantes')
         table-mp(:filter="425",:mpdata.sync="mpdata")
        .ui.bottom.attached.tab.segment(data-tab='auxiliares')
         table-mp(:filter="420",:mpdata.sync="mpdata")
        .ui.bottom.attached.tab.segment(data-tab='pigmentos')
         table-mp(:filter="440",:mpdata.sync="mpdata")
        .ui.bottom.attached.tab.segment(data-tab='cargas')
         table-mp(:filter="455",:mpdata.sync="mpdata")
        .ui.bottom.attached.tab.segment(data-tab='seleccionados')
         selected-mp(:mpdata.sync="mpdata")
      
  
</template>

<script>
import mp from './formlab/mp.vue'
import loadmp from './loadmp.vue'
import countCategory from './formlab/countcategory.vue'
import tableMp from './formlab/tablemp.vue'
import selectedMp from './formlab/selectedmp.vue'
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
