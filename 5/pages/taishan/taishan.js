// pages/taishan/taishan.js
Page({
  data:{
    flag1:true,
    flag2:true,
    flag3:true
  },
  zhaopian:function(){
    this.setData({
      flag1:false,
      flag2:true,
      flag3:true
    })
  },
  wenhua:function(){
    this.setData({
      flag1:true,
      flag2:false,
      flag3:true
    })
  },
  luxian:function(){
    this.setData({
      flag1:true,
      flag2:true,
      flag3:false
    })
  }

})