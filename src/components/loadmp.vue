<template>
</template>
<script>
export default {
    props:['mpdata','totalscat'],
    data () {
    return {
    }
  },
  ready:function(){
    console.log("load ready");
    this.$http.get('http://localhost/Vue/default/getStocks.json', (data, status, request) =>{
      this.mpdata=[];
      data.forEach((d)=>{
        this.totalscat[(d.cod).substring(0,3)]+=1;
        let temp={
          cod:d.cod,
          checked:false,
          desc:d.desc,
          cume:d.cume,
          exist:d.exist,
          unidade:d.unidade,
          name: d.desc,
          quantity: 0
        }
        this.mpdata.push(temp);

      });  
      }).error(function (data, status, request) {
          console.log("erro",data,status,request);
      }).then(function(){
        console.log("end loading");
        toastr.info("matérias primas carregadas");
      })
  }
  }
</script>