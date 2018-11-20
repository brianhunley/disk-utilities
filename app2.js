const files = require("./lib/files");

const run = async () => {
  const base = await files.getCurrentDirectoryBase();
  console.log('1', base);

  const dirExists = await files.directoryExists('./zipfiles');
  console.log('2', dirExists);

  const fileExists = await files.fileExists('./zipfiles/fonts-test.zip');
  console.log('3', fileExists);

  const remove = await files.remove('./removeThisFolder/fonts-test.1.zip');
  console.log('4', remove);
};

run();