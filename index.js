let driver = {};
function updateDriverWithKeyAndValue(driver, label, value){
  const newDriver = Object.assign({[label]: value}, driver)
  return newDriver;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]  = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  let newObj = Object.assign({}, driver)
  delete newObj[key]
  return newObj
}
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
