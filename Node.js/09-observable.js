/*
const timeout = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

timeout(1000)
  .then(() => {
    console.log('1s promise');
    return timeout(1000);
  })
  .then(() => {
    console.log('2s promise');
  });

(async () => {
  await timeout(1000);
  console.log('1s await');
  await timeout(1000);
  console.log('2s await');
})();
*/

/*
const interval = (delay) => {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve();
      console.log('interval');
    }, delay);
  });
};

interval(1000)
  .then(() => {
    console.log('1s promise');
  });
*/

const Observable = require('rxjs').Observable;

Observable.interval(1000)
  .subscribe(() => {
    console.log('1s observable');
  });
