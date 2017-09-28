/**
 * Created by suece_000 on 2017-09-24.
 */
const express = require('express')
const app = express()
const db = require('./database')

app.get('/', function (req, res) {
    var ref = db.firebase.database().ref('messages')
    ref.on('value', function(snapshot){
        var all_greetings = []
        snapshot.forEach(function(item){
            all_greetings.push(item.key)
        })
        res.send(all_greetings)
    })
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
    var ref = db.firebase.database().ref('messages/' + 'another')
    ref.set('hello')
})