const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());
app.use(middleware);
app.use(logger);

let courses=[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
];

app.get('/courses', (req, res)=>{
    res.json(courses);
});

app.post('/courses', (req, res)=>{
    console.log(req.body);
    const course = {
       id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);
});

app.put('/courses/:id', (req, res)=>{
    try{
        let singleCourses = courses.find(c => c.id === parseInt(req.params.id));
        if(!singleCourses){
            return res.status(404).send('The course with the given ID was not found');
        }
        singleCourses.name = req.body.name;
        res.send(singleCourses);
    }
    catch(err){
        console.log(err);
    }


});


app.delete('/courses/:id', (req, res)=>{
    try{
        let singleCourses = courses.find(c => c.id === parseInt(req.params.id));
        if(!singleCourses){
            return res.status(404).send('The course with the given ID was not found');
        }
        const index = courses.indexOf(singleCourses);
        courses.splice(index, 1);
        res.send(singleCourses);
    }
    catch(err){
        console.log(err);
    }
});

function middleware(req, res, next){
    console.log('Middleware is working');
    next();

}
function logger(req, res, next){
    console.log('Logging...');
    console.log(req.method,req.ip, req.hostname,  req.url, new Date()   );
    next();
}


app.listen(port, ()=>{
    console.log(`Server is Listening {http://localhost:${port}} `)
});


