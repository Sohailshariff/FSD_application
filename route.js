const exp=require('express')

const router=exp.Router()
const s2=require('../model/model')


router.get('/', async(req,res)=>{

try{
    const data= await s2.find()
    res.json(data)
}catch(err){
res.send("error"+err)
}

})


router.get('/:id', async(req,res)=>{

    try{
        const data= await s2.findById(req.params.id)
        res.json(data)
    }catch(err){
    res.send("error"+err)
    }
    
    })
    router.patch('/:id', async(req,res)=>{

        try{
            const data= await s2.findById(req.params.id)
            data.section=req.body.section
            const a2=await data.save()
            res.json(a2)
        }catch(err){
            res.send("error"+err)
            }

    })

router.post('/', async(req,res)=>{

          const a2=new s2(
            {
                name: req.body.name,
                tech: req.body.tech,
                section: req.body.section
            })

            

        try{
            const a1=await a2.save()
            res.json(a1)
    }catch(err){
    res.send("error"+err)
    }
    
    })


module.exports=router