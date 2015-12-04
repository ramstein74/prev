<style scoped lang="stylus">
.reset::hover
  cursor pointer

.tabmp
  margin 4px

</style>

<template lang="jade">
loadmp(:mpdata.sync="mpdata")
.ui.grid
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
  .five.wide.column
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
      filter:'',
      mpdata: []        
    }
  },
  methods:{

      setfilter:function(to){
          // console.log(to);
          this.filter=to;
      }
      
  },
  computed: {
      resinas() {
            let temp= this.mpdata.filter(d => (d.checked==true)&(d.cod.substr(0,3)==="425"));
            return temp
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
