exports.ms = function (dur) {
  let totalSeconds = (dur / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
  let obama = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  return obama;
}
