export const betPeriod = ({
  initialPool = 20,
  minBet = 5,
  lives = 4,
  days = 60,
  winProbability = 0.7,
  oddMin = 1.6,
  oddMax = 1.9
} = {}) => {

  let pool = initialPool;

  const randomOdd = () =>
    Math.random() * (oddMax - oddMin) + oddMin;

  const didWin = () =>
    Math.random() < winProbability;

  
  const getBetValue = (pool) => {
    let level = 0;
    let threshold = initialPool * 3;

    while (pool >= threshold) {
      level++;
      threshold *= 2;
    }

    return minBet * (2 ** level);
  };

  for (let day = 1; day <= days; day++) {

    if (pool <= 0) break;

    const odd = randomOdd();
    const win = didWin();
    const bet = getBetValue(pool);

    const payoff = win ? bet * odd : 0;

    pool = pool - bet + payoff;
  }

  return pool;
};
