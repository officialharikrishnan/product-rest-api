export default (dependencies)=>{
    const search =async (req,res)=>{
        const {useCase:{getSearchProductUseCase}}=dependencies
        const data = req.query.data
        const product = await getSearchProductUseCase(dependencies).execute(data) 
        if(product !== []){
            res.status(200).send(product)
        }else{
            res.status(400).send("product not found")
        }
    }
    return search
}