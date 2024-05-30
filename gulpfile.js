const { parallel, series } = require('gulp');

// task a
const a = async (done) => {
  setTimeout(() => {
    console.log('Task a is complete!');
    done();
  }, 1000);
};

// task b
const b = async (done) => {
  setTimeout(() => {
    console.log('Task b is complete!');
    done();
  }, 1000);
};

// task c
const c = async (done) => {
  setTimeout(() => {
    console.log('Task c is complete!');
    done();
  }, 1000);
};

// －－　默认任务
exports.default = series;
// －－　串行方式执行任务，先执行a， 然后执行b， 然后执行c
exports.series = series(a, b, c);
// －－　并行方式执行任务，同时执行a，b，c
exports.parallel = parallel(a, b, c);
