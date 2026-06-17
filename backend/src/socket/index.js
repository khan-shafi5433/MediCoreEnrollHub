const initializeSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Join room based on user role
    socket.on('join-room', (room) => {
      socket.join(room);
      console.log(`User ${socket.id} joined room: ${room}`);
    });

    // Leave room
    socket.on('leave-room', (room) => {
      socket.leave(room);
      console.log(`User ${socket.id} left room: ${room}`);
    });

    // Real-time notifications
    socket.on('send-notification', (data) => {
      io.to(data.room).emit('notification', data);
    });

    // Application status updates
    socket.on('application-update', (data) => {
      io.to(data.userId).emit('application-status', data);
    });

    // Chat messages (if needed)
    socket.on('send-message', (data) => {
      io.to(data.room).emit('receive-message', data);
    });

    // Disconnect
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};

export default initializeSocket;
