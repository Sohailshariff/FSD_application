const m1=require('mongoose')

const s1=new m1.Schema(
{
name:
{
    type:String,
    required:true
},
tech:
{
    type:String,
    required:true
},

section:
{
    type:String,
    required:true
}

})

module.exports=m1.model('schema1',s1)