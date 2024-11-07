const express = require ('express');
const app = express ();
const port = 8000;

let list = [
    {id: 1, task: 'bangun tidur', completed: false},
    {id: 2, task: 'sarapan', completed: false},
    {id: 3, task: 'tidur', completed: false}
];

app.use (express.json ());

app.get ('/', (req, res) => {
    res.send ('Helowww everyone')
})
app.get ('/list', (req, res) => {
    res.json(list)
})

app.put ('/list/:id', (req, res) => {
    const id = parseInt (req.params.id);
    const {task, completed} = req.body;

    const todo= list.find (t=> t.id === id);
    if (!todo) {
        return res. status (404).json ({messange: "todo gaada"})
    }

    if (task) todo.task = task;
    if (typeof completed === 'boolean') todo.completed=completed; 
    res.json ({messange: 'todo uda di update', todo});
})

app.listen (port, () => {
    console.log (`aplikasi telah berjalann pada http://localhost:${port}`)
})

app.delete ('/list/:id', (req, res) => {
    const id = parseInt (req.params.id);
    const index=list.findindex (t=>t.id === id);

    if (index ===-1){
        return res.status (404). json ({messange: "todo gaada"})
    }

    list.splice (index,1);

    res.json (todo);
})

app.get ('/list/:id', (req, res) => {
    const id = parseInt (req.params.id); 
    const todo = list.find (t=>t.id ===id);

    if (!todo) {
        return res. status (404).json ({messange: "todo gaada"})
    }

    res.json (todo)
    })

    app.delete ('/',(req,res)=> {
    res.send ('kamu dihapus')
    })

    app.listen (port,()=>{
        console.log (`aplikasi telah berjalan pada http://localhost:${port}`)
    })



