const drivelist = require("drivelist");

drivelist.list((error, drives) => {
  if (error) {
    throw error;
  }

  drives.forEach(drive => {
    if (drive.isUSB && drive.isRemovable === true) {
      // console.log(drive);
      console.log(drive.mountpoints);
    }
  });
});
