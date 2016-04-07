var user = function User(name) {
  var vm = this;
  vm.name = name;

  vm.save = function (callback) {
    callback();
    // throw new Error('test throw error');
  };
};
module.exports = user;
