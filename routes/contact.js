const express = require('express')
const { addContact, getContacts, getOneContact, deleteContact, updateContact } = require('../Controllers/Contact')

contactRouter = express.Router()

contactRouter.post('/addContact',addContact)

contactRouter.get('/getContacts',getContacts)

contactRouter.get('/getOneContact/:id',getOneContact)

contactRouter.delete('/deleteContact/:id',deleteContact)

contactRouter.put('/updateContact/:id',updateContact)


module.exports = contactRouter

contactRouter.get('/getContacts', async(req,Res)=>{
    try {
       const contacts = await contact.find()
        res.status(200).send({msg:'users list', contacts})
    } catch (error) {
        Res.status(500).send('users not found')
        
    }
})

contactRouter.get('/getContact/:id', async(req,res)=>{
    try {
        const {id} = req.params
        const found =await contact.findById(id)
        res.status(200).send({msg:'users list', found})


        
    } catch (error) {
        Res.status(500).send('users not found')
        
    }
})
contactRouter.delete('/delelteContact/is', async(req,res)=>{
    try {
        const {id} = req.params
        await contact.findByIdAndDelete(id)
        res.status(200).send('user deleted')
    } catch (error) {
        Res.status(500).send('users not deleted')
    }
})




module.exports = contactRouter 