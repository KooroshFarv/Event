const mongoose=require('mongoose')




mongoose.connect("mongodb+srv://farvardinkoorosh:welcome1@cluster0.xqqgrql.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log('Success Mongodb connection')
}).catch(err => {
    console.log('Error Mongodb connection')
    process.exit()
});

const PORT = process.env.PORT || 8081;
const express_server=app.listen(PORT, () => { console.log('Server is running...') });
