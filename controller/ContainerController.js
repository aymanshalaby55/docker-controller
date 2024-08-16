const docker = require("dockerode")();

// Function to list all containers
async function listContainers(req, res) {
  try {
    const containers = await docker.listContainers({ all: true });
    res.json(containers);
  } catch (error) {
    console.error("Error listing containers:", error);
    res.status(500).send("Failed to list containers");
  }
}

// Function to start a container by ID
async function startContainer(req, res) {
  const containerId = req.params.id;
  try {
    const container = docker.getContainer(containerId);
    await container.start();
    res.send(`Container ${containerId} started successfully`);
  } catch (error) {
    console.error(`Error starting container ${containerId}:`, error);
    res.status(500).send(`Failed to start container ${containerId}`);
  }
}

// Function to stop a container by ID
async function stopContainer(req, res) {
  const containerId = req.params.id;
  try {
    const container = docker.getContainer(containerId);
    await container.stop();
    res.send(`Container ${containerId} stopped successfully`);
  } catch (error) {
    console.error(`Error stopping container ${containerId}:`, error);
    res.status(500).send(`Failed to stop container ${containerId}`);
  }
}

// Function to inspect a container by ID
async function inspectContainer(req, res) {
  const containerId = req.params.id;
  try {
    const container = docker.getContainer(containerId);
    const info = await container.inspect();
    res.json(info);
  } catch (error) {
    console.error(`Error inspecting container ${containerId}:`, error);
    res.status(500).send(`Failed to inspect container ${containerId}`);
  }
}

async function deleteContainer(req, res) {
  const containerId = req.params.id;
  try {
    const container = docker.getContainer(containerId);
    await container.stop();
    await container.remove();
    res.send(`Container ${containerId} deleted successfully`);
  } catch (error) {
    console.error(`Error deleting container ${containerId}:`, error);
    res.status(500).send(`Failed to delete container ${containerId}`);
  }
}

module.exports = {
  listContainers,
  startContainer,
  stopContainer,
  inspectContainer,
  deleteContainer,
};
