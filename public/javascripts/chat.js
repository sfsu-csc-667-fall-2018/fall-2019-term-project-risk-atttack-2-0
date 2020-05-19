const chatForm = document.getElementById('chat-form');
const chatMessage = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

const useName = document.getElementById('nameHack');
const nameHolder = document.getElementById('playerHolder');

// Get username and room from URL
//todo: link db user, lobbynum to username, room
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true
});


const socket = io();

// Join chatroom
socket.emit('joinRoom', { username, room });

// Get room and users
socket.on('roomUsers', ({ room, users }) => {
  // outputRoomName(room);
  // outputPlayer(playerName);
  // outputUsers(users);
});


//Message from server
socket.on('message',message => {
  console.log(message);
  outputMessage(message);

  //scroll down
  chatMessage.scrollTop = chatMessage.scrollHeight;
});

//message submit
chatForm.addEventListener('submit',(e) =>{
  e.preventDefault();

  const msg = e.target.elements.msg.value;

  //Emit message to server
  socket.emit('chatMessage',msg);

  //clear input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
});

function outputMessage(message){
  var name = useName.innerHTML;

  const div = document.createElement('p');
  div.classList.add('message');
  div.innerHTML = `${name} - ${message.time}
        <br/>  ${message.text}`;
  document.querySelector('.chat-messages').appendChild(div);
}

//output message to DOM
// function outputMessage(message){
//   const div = document.createElement('p');
//   div.classList.add('message');
//   div.innerHTML = `${message.username} - ${message.time}
//         <br/>  ${message.text}`;
//   document.querySelector('.chat-messages').appendChild(div);
// }


function outputPlayer(player) {
  var name = useName.innerHTML;
  console.log(useName.innerHTML);
  nameHolder.innerHTML = `Current Player: ${name}`
  // playerName.innerHTML = `
  //   ${users.map(user => `<li>${user.username}</li>`).join('')}
  // `;
}


// Add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
}

// Add users to DOM
function outputUsers(users) {
  userList.innerHTML = `
    ${users.map(user => ` - ${user.username}`).join('')}
  `;
}
