<style scoped lang="stylus">
.reset::hover
  cursor pointer


</style>

<template lang="jade">
div#app
  loadmp(:mpdata.sync="mpdata")
  div.tabmp
    .ui.top.attached.tabular.menu
      a.item(data-tab='first') Resinas
      a.item(data-tab='second') Lubrificantes
      a.item.active(data-tab='third') Antichoques
    .ui.bottom.attached.tab.segment(data-tab='first')
      div#tabgeral
          table.ui.celled.table
            thead
              tr
                th Código
                th Descrição
                th Custo médio
                th Existência
                th Unidade
                template(v-if="filter=='selected'")
                  th phr
                  th %
                th CustoTon
                th
                  span.reset(@click="reset") &#10007
            tbody
              tr(is="mp" v-for="mp in mpdata | filterBy filter " , :cod="mp.cod",:desc="mp.desc",:cume="mp.cume",:exist="mp.exist",:unidade="mp.unidade", :quantity.sync="mp.quantity", :total="total",:checked.sync="mp.checked")
        div#mapa
          p aqui vai
          {{resinas}}
    .ui.bottom.attached.tab.segment(data-tab='second')
      | Second
    .ui.bottom.attached.tab.segment.active(data-tab='third')
      | Third

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

  
</template>

<script>
import mp from './components/mp.vue'
import loadmp from './components/loadmp.vue'
import countCategory from './components/countcategory.vue'
import tableMp from './components/tablemp.vue'
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
      },
      reset:function(){
          console.log("resetting");
          this.mpdata.forEach(function(item){
            item.checked='';
            item.phr=0;
          });
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
    tableMp
  }
}
</script>
