<style scoped lang="stylus">
.searchClient {
  cursor: pointer;
  border-radius: 6px;
  color: white;
  font-size: 9px;
  padding: 10px;
  width: 220px;
  /*float: left;*/
  display: inline-block;
  background-color: #16A085;
  margin: 0 0 10px 10px;
  overflow: auto;
}
.searchAplica {
  cursor: pointer;
  border-radius: 6px;
  color: white;
  font-size: 10px;
  padding: 10px;
  width: 120px;
  /*float: left;*/
  display: inline-block;
  background-color: #2ECC71;
  margin: 0 0 10px 10px;
  overflow:auto;
}
.searchFormula {
  cursor: pointer;
  border-radius: 6px;
  color: white;
  font-size: 10px;
  padding: 10px;
  width: 120px;
  /*float: left;*/
  display: inline-block;
  background-color: #C0392B;
  margin: 0 0 10px 10px;
  overflow: auto;
}
</style>

<template lang="jade">
load-clientes(:clientes.sync="clientes")
.ui.grid
  div.nine.wide.column
    .ui.form
      .field
        label(placeholder="observações") Observações
        textarea
      .fields
        .field
          label Fórmula
          input(type="text", placeholder="formula",style="width:400px;",v-model="formula")
        .field
          label Cliente
          input(type="text", placeholder="Cliente",style="width:300px;",v-model="cliente")
      .fields
        .field
          label Data
          input(type="date", placeholder="data")
        .field
          label Aplicação
          input(type="text", placeholder="Aplicação",v-model="aplicacao")
        .field
          label Dev
          input(type="text", placeholder="dev")
        .field
          label Pedido
          input(type="text", placeholder="Pedido")
  div.seven.wide.column
    
    span.searchClient(@click="setCliente(cli)", v-for="cli in clientes|filterBy cliente|first 6")
      div|{{cli.nome}}
    
    span.searchAplica(@click="setAplicacao(aplica)",v-for="aplica in aplicacoes|filterBy aplicacao")
      |{{aplica}}

    span.searchFormula(@click="setFormula(cor)",    v-for="cor in cores|filterBy formula")
      |{{cor}}
    






</template>

<script>
import loadClientes from './loadclients.vue'
export default {
  props: ['mp'],
  components:{
    loadClientes
  },
  data () {
    return {
        cliente:'',
        subconta:'',
        aplicacao:'',
        cliente:'',
        formula:'',
        aplicacoes:['Perfis Rígidos','Perfis Flexíveis','Mangueira','Estores','Garrafas','Perfis Porta-preços',
            'Vedantes','Injecção plastificada','Fittings','Tubagem Saneamento','Tubagem Pressão'
      ],
    cores:[
        'AMARELO',        'AZUL',            'BEGE',        'BORDEAUX',
        'BRANCO',         'CARAMELO',        'CARVALHO',    'CASTANHO',
        'CINZENTO',       'CREME',           'CRISTAL',     'FAIA',
        'LARANJA',        'MOGNO',           'NATURAL ',    'NEGRO',
        'OURO',           'PRETO',           'ROSA',        'SALMÃO',
        'VERDE ',         'VERMELHO ',        'VIOLETA'
      ],
      clientes:[]
    }
  },
  methods:{

  toggle:function(){
          console.log(this.mp.checked);
          this.mp.checked=!this.mp.checked;
        }
  


  },
  computed:{

	},
    filters:{
    first:function(value,stop){
      return value.slice(0,stop);
    },
    numbergroup: {
     read: function (text) {
        text = text.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
        var t = text ;
        return t;
      } 
    },
    percgroup:{  
      read:function(text){
        return (text*100).toFixed(6);
      }

    }
  },
  methods:{
      setCliente(cli){

          if (this.cliente==cli.nome){
            this.cliente='';
            this.subconta='';
          }
          else{
            this.cliente=cli.nome;
            this.subconta=cli.subconta;
          }
      },
      setFormula(formula){
        this.formula==formula? this.formula="":this.formula=formula;
      },
      setAplicacao(aplica){
        this.aplicacao==aplica? this.aplicacao="":this.aplicacao=aplica;
      }
  }
  }
</script>