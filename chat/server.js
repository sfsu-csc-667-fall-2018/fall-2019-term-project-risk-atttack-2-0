const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const botName = 'Bot';

  //Run when client connects
  //listen for 'connection' events and take socket as parameter
  io.on('connection', socket => {

    socket.on('joinRoom',({username,room})=> {
      const user = userJoin(socket.id, username, room);

      socket.join(user.room);

      //Welcome current user
      // socket.emit('message', formatMessage(botName, 'Welcome to the chat!'));
      // console.log('new WS connection...');


      //Broadcast when a user connects
      socket.broadcast
          .to(user.room)
          .emit('message', formatMessage(botName,`${user.username} joined the chat`));

      //Send users and room info
      io.to(user.room).emit('roomUsers',{
        room: user.room,
        users: getRoomUsers(user.room)
      });
    });



  // Listen for chatMessage
  socket.on('chatMessage', msg => {
    const user = getCurrentUser(socket.id);


    // console.log(msg);
    io.to(user.room).emit('message', formatMessage(user.username, msg));

  });


  //run when client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if(user){
      io.to(user.room).emit('message',
          formatMessage(botName,`${user.username} left the chat`));

      //send users and room info
      io.to(user.room).emit('roomUsers',{
        room: user.room,
        users: getRoomUsers(user.room)
      });
    }
  });

  });

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
