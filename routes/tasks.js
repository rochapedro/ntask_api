module.exports = app => {
    const Tasks = app.models.tasks;
    app.get('/tasks', (req, res) => {
        res.json({
            tasks: [
                {title: 'Fazer compras'},
                {title: 'Consertar o pc'},
            ]
        });
    });
};