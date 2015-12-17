<style scoped lang="stylus">
.ui.icon.input input
  padding-right 0 !important
  width 95px
  text-align right 
  vertical-align middle
  background-color #78FA89
  margin 7px
td
  font-size 20px
  padding-right 10px
  color #0f6d92
  border-spacing 2px 2px

</style>

div
  textarea(name="observacoes", style="width: 600px; height: 100px;display:block;", placeholder="Observações", v-model="observ")
  input(type="text", v-model="formula", style="width:300px;", placeholder="Formula")
  input(type="text", v-model="cliente", style="width:300px;", placeholder="Cliente")
  input(type="date", style="width:145px;", v-model="dataf")
  input(type="text", v-model="aplicacao", placeholder="Aplicação")
  input(type="text", v-model="dev", placeholder="Dev")
  input(type="text", v-model="pedido", style="width:50px;", placeholder="Pedido")
  br
  span.searchClient(v-on="click:setCliente(cli)", v-repeat="cli:clientes | filterBy cliente | first 5")
    | (%cli.nome%)
  span.searchAplica(v-on="click:setAplicacao(aplica)", v-repeat="aplica: aplicacoes |filterBy aplicacao| first 5")
    | (%aplica%)
  span.searchFormula(v-on="click:setFormula(cor)", v-repeat="cor: cores |filterBy formula |first 5")
    | (%cor%)

</template>

<script>
export default {
  props: ['mp'],
  data () {
    return {
    }
  },
  methods:{

  toggle:function(){
          console.log(this.mp.checked);
          this.mp.checked=!this.mp.checked;
        }
  


  },
  computed:{

	}
  }
</script>