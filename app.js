const express = require('express');
const Docker = require("dockerode");
const port = 9000;

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// Use the Windows named pipe
const docker = new Docker({ socketPath: "//./pipe/docker_engine" }); // connect docker

// Import routes
const imageRoutes = require('./routes/ImageRoutes');
const containerRoutes = require('./routes/containerRoutes');

// Use routes
app.use('/images', imageRoutes);
app.use('/containers', containerRoutes);

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);