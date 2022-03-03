const Person = require('./models/person')

exports.personReg = async (req,res)=>{
    const newPerson = await new Person({...req.body})
    const email = newPerson.email
    try {
        const person = await Person.find({email})
        if (person)  return res.status(400).send({ message: "email is Used" });
        newPerson.save()
    } catch (error) {
        res.status(401).json({msh:'error occured',error:error})
    }
}
exports.findAll = async (req,res)=>{
    
    try {
        const search = await Person.find()
        res.status(201).json('found the person',search)
    } catch (error) {
        res.status(401).json({msg:'The is no match',error})
        
    }
}

exports.findById = async (req,res)=>{
    try {
        const search = await Person.findOne({_id:req.params.id})
        res.status(201).json({search:search})
    } catch (error) {
        res.status(401).json({msg:'The is no match',error:error})

    }
}
exports.UpdatePerson = async (req, res) => {
  try {
    const updated = await Contact.updateOne({ _id: req.params.id },{ $set: { ...req.body } }
    );
 res.status(200).json({msg:'updated',updated:updated})
  } catch (error) {
    res.status(400).send({ message: "not updated" ,error:error});
  }
};

exports.DeletePerson = async (req, res) => {
    try {
        const search = await Person.deleteOne({_id: req.params.id});
        res.status(200).json({msg:'Deleted successfully'})
        
    } catch (error) {
        res.status(401).json({msg:'Cant delete ',error:error})
    }
};
