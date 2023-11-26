import { Router } from 'express';
import https from 'https';
import mysql from 'mysql';

var router = Router();
var source = "mysql://boon:abcd1234@127.0.0.1/platform";

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/profile', (req, res) => {
    if (!req.oidc.isAuthenticated()) {
        return res.redirect('/');
    }
    res.render('profile', { user: req.oidc.user });
});

// List all users
router.get('/users', async (req, res) => {
    if(req.oidc.isAuthenticated()){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        res.json(users);
    }else{
        return res.redirect('/');
    }

/* // Integrate with a SQL Server (MySQL)
    if(req.oidc.isAuthenticated()){
        try{
            var sql = "select * from users"
            var connection = mysql.createConnection(source);
            var result = await new Promise( function executor(resolve){
                connection.query(sql, function show(e, data) {
                    connection.end();
                    resolve(data);
                });
            });
            res.json(result);
        }catch(e){
            console.error("Database query error:", e);
            res.status(500).send('Error executing the query');
        }
    }else{
        return res.redirect('/');
    }
*/    

});

// List all posts
router.get('/posts', async (req, res) => {
    if(req.oidc.isAuthenticated()){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const users = await response.json();
        res.json(users);
    }else{
        return res.redirect('/');
    }

/* // Integrate with a SQL Server (MySQL)
    if(req.oidc.isAuthenticated()){
        try{
            var sql = "select * from posts"
            var connection = mysql.createConnection(source);
            var result = await new Promise( function executor(resolve){
                connection.query(sql, function show(e, data) {
                    connection.end();
                    resolve(data);
                });
            });
            res.json(result);
        }catch(e){
            console.error("Database query error:", e);
            res.status(500).send('Error executing the query');
        }
    }else{
        return res.redirect('/');
    }
*/    

});

// Get a single user
router.get('/users/:id', async (req, res) => {
    if(req.oidc.isAuthenticated()){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${req.params.id}`);
        const user = await response.json();
        res.json(user);
    }else{
        return res.redirect('/');
    }

/* // Integrate with a SQL Server (MySQL)
    if(req.oidc.isAuthenticated()){
        try{
            var sql = 'select * from users where id = ?';
            var connection = mysql.createConnection(source);
            var result = await new Promise( function executor(resolve){
                connection.query(sql, function show(e, data) {
                    connection.end();
                    resolve(data);
                });
            });
            res.json(result);
        }catch(e){
            console.error("Database query error:", e);
            res.status(500).send('Error executing the query');
        }
    }else{
        return res.redirect('/');
    }
*/

});

// Get a single post
router.get('/posts/:id', async (req, res) => {
    if(req.oidc.isAuthenticated()){
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
        const user = await response.json();
        res.json(user);
    }else{
        return res.redirect('/');
    }

/* // Integrate with a SQL Server (MySQL)
    if(req.oidc.isAuthenticated()){
        try{
            var sql = 'select * from posts where id = ?';
            var connection = mysql.createConnection(source);
            var result = await new Promise( function executor(resolve){
                connection.query(sql, function show(e, data) {
                    connection.end();
                    resolve(data);
                });
            });
            res.json(result);
        }catch(e){
            console.error("Database query error:", e);
            res.status(500).send('Error executing the query');
        }
    }else{
        return res.redirect('/');
    }
*/

});

// Create a user
router.post('/users', async (req, res) => {
    if(req.oidc.isAuthenticated()){
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
        const user = await response.json();
        res.json(user);
    }else{
        return res.redirect('/');
    }

/* // Integrate with a SQL Server (MySQL)
    if(req.oidc.isAuthenticated()){
        try{
            var { id, name, username, email, address, phone, website, company } = req.body;
            var sql = 'INSERT INTO users(id, name, username, email, address, phone, website, company) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            var connection = mysql.createConnection(source);
            const result = await new Promise( function executor(resolve){
                connection.query(sql, [id, name, username, email, address, phone, website, company],function show(e, data) {
                    connection.end();
                    resolve(data);
                });
            });
            
            res.status(201).json({ id, name, username, email, address, phone, website, company });
        }catch(e){
            console.error("Database query error:", e);
            res.status(500).send('Error executing the query');
        }
    }else{
        return res.redirect('/');
    }
*/
    
});

// Create a post
router.post('/posts', async (req, res) => {
    if(req.oidc.isAuthenticated()){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
        const user = await response.json();
        res.json(user);
    }else{
        return res.redirect('/');
    }

/* // Integrate with a SQL Server (MySQL)
    if(req.oidc.isAuthenticated()){
        try{
            var { userId, id, title, body } = req.body;
            var sql = 'INSERT INTO users(userId, id, title, body) VALUES (?, ?, ?, ?)';
            var connection = mysql.createConnection(source);
            const result = await new Promise( function executor(resolve){
                connection.query(sql, [userId, id, title, body],function show(e, data) {
                    connection.end();
                    resolve(data);
                });
            });
            
            res.status(201).json({ userId, id, title, body });
        }catch(e){
            console.error("Database query error:", e);
            res.status(500).send('Error executing the query');
        }
    }else{
        return res.redirect('/');
    }
*/
    
});

// Update a user
router.put('/users/:id', async (req, res) => {
    if(req.oidc.isAuthenticated()){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${req.params.id}`, {
            method: 'PUT',
            body: JSON.stringify(req.body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const user = await response.json();
        res.json(user);
    }else{
        return res.redirect('/');
    }

/*// Integrate with a SQL Server (MySQL)
    if(req.oidc.isAuthenticated()){
        try{
            var { name, username, email, address, phone, website, company } = req.body;
            var userId = req.params.id;
            var sql = 'UPDATE users SET name = ?, username = ? , email = ?, address = ?, phone = ?, website = ?, company = ? WHERE id = ?';
            var connection = mysql.createConnection(source);
            const result = await new Promise( function executor(resolve){
                connection.query(sql, [name, username, email, address, phone, website, company, userId],function show(e, data) {
                    connection.end();
                    resolve(data);
                });
            });
            res.json({ userId, name, username, email, address, phone, website, company });
        }catch(e){
            console.error("Database query error:", e);
            res.status(500).send('Error executing the query');
        }
    }else{
        return res.redirect('/');
    }
*/
    
});

// Update a post
router.put('/posts/:id', async (req, res) => {
    if(req.oidc.isAuthenticated()){
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, {
            method: 'PUT',
            body: JSON.stringify(req.body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const user = await response.json();
        res.json(user);
    }else{
        return res.redirect('/');
    }

/*// Integrate with a SQL Server (MySQL)
    if(req.oidc.isAuthenticated()){
        try{
            var { id, title, body } = req.body;
            var postId = req.params.id;
            var sql = 'UPDATE posts SET userId = ?, title = ? , body = ? WHERE id = ?';
            var connection = mysql.createConnection(source);
            const result = await new Promise( function executor(resolve){
                connection.query(sql, [id, title, body, postId],function show(e, data) {
                    connection.end();
                    resolve(data);
                });
            });
            res.json({ postId, id, title, body });
        }catch(e){
            console.error("Database query error:", e);
            res.status(500).send('Error executing the query');
        }
    }else{
        return res.redirect('/');
    }
*/

});

// Patch a user
router.patch('/users/:id', async (req, res) => {
    if(req.oidc.isAuthenticated()){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${req.params.id}`, {
            method: 'PATCH',
            body: JSON.stringify(req.body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const user = await response.json();
        res.json(user);
    }else{
        return res.redirect('/');
    }

/*// Integrate with a SQL Server (MySQL)
    if(req.oidc.isAuthenticated()){
        try{
            var userId = req.params.id;
            var updates = req.body;
            var updateFields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
            var sql = `UPDATE users SET ${updateFields} WHERE id = ?`;
            var connection = mysql.createConnection(source);
            const result = await new Promise( function executor(resolve){
                connection.query(sql, [...Object.values(updates), userId],function show(e, data) {
                    connection.end();
                    resolve(data);
                });
            });
            res.json({ userId, updates });
        }catch(e){
            console.error("Database query error:", e);
            res.status(500).send('Error executing the query');
        }
    }else{
        return res.redirect('/');
    }
*/
});

// Patch a post
router.patch('/posts/:id', async (req, res) => {
    if(req.oidc.isAuthenticated()){
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, {
            method: 'PATCH',
            body: JSON.stringify(req.body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const user = await response.json();
        res.json(user);
    }else{
        return res.redirect('/');
    }

/*// Integrate with a SQL Server (MySQL)
    if(req.oidc.isAuthenticated()){
        try{
            var postId = req.params.id;
            var updates = req.body;
            var updateFields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
            var sql = `UPDATE posts SET ${updateFields} WHERE id = ?`;
            var connection = mysql.createConnection(source);
            const result = await new Promise( function executor(resolve){
                connection.query(sql, [...Object.values(updates), postId],function show(e, data) {
                    connection.end();
                    resolve(data);
                });
            });
            res.json({ postId, updates });
        }catch(e){
            console.error("Database query error:", e);
            res.status(500).send('Error executing the query');
        }
    }else{
        return res.redirect('/');
    }
*/

});

// Delete a user
router.delete('/users/:id', async (req, res) => {
    if(req.oidc.isAuthenticated()){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${req.params.id}`, {
            method: 'DELETE',
        });
        res.status(204).send(); 
    }else{
        return res.redirect('/');
    }

/*// Integrate with a SQL Server (MySQL)
    if(req.oidc.isAuthenticated()){
        try{
            var userId = req.params.id;
            var sql = 'DELETE FROM users WHERE id = ?';
            var connection = mysql.createConnection(source);
            const result = await new Promise( function executor(resolve){
                connection.query(sql, [userId],function show(e, data) {
                    connection.end();
                    resolve(data);
                });
            });
            res.status(204).send();
        }catch(e){
            console.error("Database query error:", e);
            res.status(500).send('Error executing the query');
        }
    }else{
        return res.redirect('/');
    }
*/
});

// Delete a post
router.delete('/posts/:id', async (req, res) => {
    if(req.oidc.isAuthenticated()){
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, {
            method: 'DELETE',
        });
        res.status(204).send(); 
    }else{
        return res.redirect('/');
    }

/*// Integrate with a SQL Server (MySQL)
    if(req.oidc.isAuthenticated()){
        try{
            var postId = req.params.id;
            var sql = 'DELETE FROM posts WHERE id = ?';
            var connection = mysql.createConnection(source);
            const result = await new Promise( function executor(resolve){
                connection.query(sql, [postId],function show(e, data) {
                    connection.end();
                    resolve(data);
                });
            });
            res.status(204).send();
        }catch(e){
            console.error("Database query error:", e);
            res.status(500).send('Error executing the query');
        }
    }else{
        return res.redirect('/');
    }
*/

});

// Filter posts
router.get('/post', async (req, res ) => {
    if(req.oidc.isAuthenticated()){
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${req.query.userId}`);
        const users = await response.json();
        res.json(users);
    }else{
        return res.redirect('/');
    }

/*// Integrate with a SQL Server (MySQL)
    if(req.oidc.isAuthenticated()){
        try{
            var userId = req.query.userId;
            var sql = 'SELECT * FROM posts WHERE userId = ?';
            var connection = mysql.createConnection(source);
            const result = await new Promise( function executor(resolve){
                connection.query(sql, [userId], function show(e, data) {
                    connection.end();
                    resolve(data);
                });
            });
            res.json(result);
        }catch(e){
            console.error("Database query error:", e);
            res.status(500).send('Error executing the query');
        }
    }else{
        return res.redirect('/');
    }
*/
    
});

export default router;
