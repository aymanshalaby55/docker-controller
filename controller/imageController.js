const docker = require('dockerode')();

// Function to list all images
async function listImages(req, res) {
  try {
    const images = await docker.listImages();
    res.json(images);
  } catch (error) {
    console.error('Error listing images:', error);
    res.status(500).send('Failed to list images');
  }
}

// Function to create an image by name
async function createImage(req, res) {
  const imageName = req.body.name;
  try {
    const image = await docker.getImage(imageName);
    res.send(`Image ${imageName} created successfully`);
  } catch (error) {
    console.error(`Error creating image ${imageName}:`, error);
    res.status(500).send(`Failed to create image ${imageName}`);
  }
}

// Function to start an image by name
async function startImage(req, res) {
  const imageName = req.params.name;
  try {
    const container = await docker.run(imageName);
    res.send(`Image ${imageName} started successfully`);
  } catch (error) {
    console.error(`Error starting image ${imageName}:`, error);
    res.status(500).send(`Failed to start image ${imageName}`);
  }
}

// Function to stop an image by name
async function stopImage(req, res) {
  const imageName = req.params.name;
  try {
    const container = docker.getContainer(imageName);
    await container.stop();
    res.send(`Image ${imageName} stopped successfully`);
  } catch (error) {
    console.error(`Error stopping image ${imageName}:`, error);
    res.status(500).send(`Failed to stop image ${imageName}`);
  }
}

// Function to inspect an image by name
async function inspectImage(req, res) {
  const imageName = req.params.name;
  try {
    const image = docker.getImage(imageName);
    const info = await image.inspect();
    res.json(info);
  } catch (error) {
    console.error(`Error inspecting image ${imageName}:`, error);
    res.status(500).send(`Failed to inspect image ${imageName}`);
  }
}

async function deleteImage(req, res) {
    const imageName = req.params.name;
    try {
      const image = docker.getImage(imageName);
      await image.remove();
      res.send(`Image ${imageName} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting image ${imageName}:`, error);
      res.status(500).send(`Failed to delete image ${imageName}`);
    }
  }

module.exports = { listImages, createImage, startImage, stopImage, inspectImage,deleteImage };



