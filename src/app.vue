<style>

</style>

<template lang="jade">
div#app
  loadmp(:mpdata.sync="mpdata")
  br  
  div.small.ui.buttons
    button.ui.button.teal(@click="setfilter('405')",:class="{'active':filter==='405'}", v-model="filter") Resinas
    button.ui.button.teal(@click="setfilter('430')",:class="{'active':filter==='430'}", v-model="filter") Lubrificantes
    button.ui.button.teal(@click="setfilter('410')",:class="{'active':filter==='410'}", v-model="filter") Antichoques
    button.ui.button.teal(@click="setfilter('415')",:class="{'active':filter==='415'}", v-model="filter") Estabilizantes
    button.ui.button.teal(@click="setfilter('425')",:class="{'active':filter==='425'}", v-model="filter") Plastificantes
    button.ui.button.teal(@click="setfilter('420')",:class="{'active':filter==='420'}", v-model="filter") Auxiliares
    button.ui.button.teal(@click="setfilter('440')",:class="{'active':filter==='440'}", v-model="filter") Pigmentos
    button.ui.button.teal(@click="setfilter('455')",:class="{'active':filter==='455'}", v-model="filter") Cargas
    button.ui.button.teal(@click="setfilter('4')",:class="{'active':filter==='4'}", v-model="filter") Todos
    button.ui.button.teal(@click="setfilter('selected')",:class="{'active':filter==='selected'}", v-model="filter") Selecionados
  <h1>{{selected}}</h1>
  table.ui.celled.table
    thead
      tr
        th Código
        th Descrição
        th Custo médio
        th Existência
        th Unidade
        th phr
        th %
        th CustoTon
        th X
    tbody
      tr(is="mp" v-for="mp in mpdata | filterBy filter " , :cod="mp.cod",:desc="mp.desc",:cume="mp.cume",:exist="mp.exist",:unidade="mp.unidade", :quantity.sync="mp.quantity", :total="total")
</template>

<script>
import mp from './components/mp.vue'
import loadmp from './components/loadmp.vue'
export default {
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
      total() {
          return this.mpdata.reduce(function(acc, item) {
              return acc + parseInt(item.quantity)
            }, 0)
      },
          
      selected() {
            return this.mpdata.filter(mp => mp.selected);
        }
  },
  components: {
    mp,
    loadmp
  }
}
</script>
