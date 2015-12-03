<template>
</template>
<script>
export default {
    props:['mpdata'],
    data () {
    return {
    }
  },
  ready:function(){
    console.log("load ready");
    this.$http.get('http://localhost/Vue/default/getStocks.json', (data, status, request) =>{
      data.forEach((d)=>{
        // console.log(d);
        this.mpdata.push({
          cod:d.cod,
          desc:d.desc,
          cume:d.cume,
          exist:d.exist,
          unidade:d.unidade,
          name: d.desc,
          quantity: 0});
        // console.log(d);
      });  
      }).error(function (data, status, request) {
          console.log("erro",data,status,request);
      }).then(function(){
        console.log("end loading");
      })
  }
  }
</script>