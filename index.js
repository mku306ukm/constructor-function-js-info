var fees = new Object();
//var fees = {};
fees.Rahul = 100;
fees.Sumit = 200;
fees.Rohan = 300;
fees.total = function () {
  return fees.Rahul + 200 + 300;
};
document.write(fees.total());
