const express = require('express')
const cors = require('cors')
const uuid = require('uuid')

const app = express()
app.use(express.json())
app.use(cors())

var friends = [
  { id: uuid(), fname: 'Blake', lname: 'Lower', married: false },
  { id: uuid(), fname: 'Amin', lname: 'Hasan', married: false },
  { id: uuid(), fname: 'Annette', lname: 'Odingo', married: false },
]

app.get('/api/friends', (req, res) => {
  setTimeout(() => {
    res.json(friends)
  }, 1100)
})

app.post('/api/friends', (req, res) => {
  if (req.body.fname && req.body.lname && (typeof req.body.married === 'boolean')) {
    const newFriend = { id: uuid(), ...req.body }
    friends.push(newFriend)
    setTimeout(() => {
      res.json(newFriend)
    }, 1100)
  } else {
    res.status(500).json({ message: 'There is something wrong with your new friend' })
  }
})

app.put('/api/friends/:id', (req, res) => {
  if (req.body.fname && req.body.lname && (typeof req.body.married === 'boolean')) {
    if (friends.find(fr => fr.id === req.params.id)) {
      friends = friends.map(fr => {
        if (fr.id === req.params.id) {
          return { id: fr.id, ...req.body }
        }
        return fr
      })
      setTimeout(() => {
        res.json(friends.find(fr => fr.id === req.params.id))
      }, 1100)
    } else {
      res.status(500).json({ message: 'No friend with that id' })
    }
  } else {
    res.status(500).json({ message: 'There is something wrong with your updated friend' })
  }
})

app.get('*', (req, res) => {
  res.status(404).json({ message: 'no such endpoint' })
})

app.listen(4000, () => {
  console.log('listening on 4000')
})
