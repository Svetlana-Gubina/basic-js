const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (arguments.length === 0) {
    return false;
  }

  if (typeof sampleActivity !== "string") {
    return false;
  }

  let sampleActivityNum = Number(sampleActivity);

  if (isNaN(sampleActivityNum) || sampleActivityNum <= 0 || sampleActivityNum > MODERN_ACTIVITY) {
    return false;
  }

  let k = LN / HALF_LIFE_PERIOD;
  let sampleApproximateAge = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
  return parseInt(Math.ceil(sampleApproximateAge));
};
