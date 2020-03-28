const audioOptions = {
  clownfull: "airhorn_clownfull.wav",
  clownshort: "airhorn_clownshort.wav",
  truck: "airhorn_truck.wav",
  default: "airhorn_default.wav",
  echo: "airhorn_echo.wav",
  spam: "airhorn_spam.wav",
  cow_herd: "cow_herd.wav",
  cow_moo: "cow_moo.wav",
  jc: "jc_airhorn.wav"
};

const airhornCommand = "!airhorn";

const isValidAirhornCommand = message => {
  const { content } = message;
  const messageParams = content.split(" ");
  if (messageParams.length !== 2) {
    return false;
  }

  const [command, audioOption] = messageParams;

  if (command !== airhornCommand) {
    return false;
  }

  return true;
};

const getAirhornParam = message => {
  return message.content.split(" ")[1];
};

const getAudio = message => {
  if (!isValidAirhornCommand(message)) {
    return null;
  }

  return audioOptions[getAirhornParam(message)];
};

const isListCommand = message => {
  return isValidAirhornCommand(message) && getAirhornParam(message) === "list";
};

const listCommands = message => {
  if (!isValidAirhornCommand(message) || !isListCommand(message)) {
    return null;
  }

  const options = Object.keys(audioOptions);

  message.reply(`Here's the list \n ${options.join("\n")}`);
  return Object.keys(audioOptions);
};

module.exports = {
  getAudio,
  isListCommand,
  listCommands
};
