<style scoped >

.tabela { 
  width: 100%; 

  border-collapse: collapse; 
}
/* Zebra striping */
tr:nth-of-type(odd) { 
  background: #eee; 
}
tr:hover{
  cursor:pointer;
}
th { 
  background: #00b5ad; 
  color: white; 
  font-weight: bold; 
}
.tabela td, th { 
  padding: 6px !important;
  border: 1px solid #ccc; 
  text-align: left; 
}

</style>

<template lang="jade">
div#tabgeral

  table.tabela
    thead
      tr
        th Código
        th Descrição
        th Cust méd/Ton
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


</template>

<script>
import mp from './mp.vue'
// import countCategory from './countcategory.vue'
export default {
  props: ['mpdata','filter'],
  data () {
    return {
    }
  },
  methods:{
          reset:function(){
          console.log("resetting");
          this.mpdata.forEach(item =>{
            if ((item.cod).substring(0,3)==this.filter){
              item.checked='';
              item.phr=0;
            }
          });
        }
  },
  computed:{

	},
    components: {
    mp,
    // countCategory
  }
  }
</script>