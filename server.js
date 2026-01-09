const { format } = require('date-fns')
const  {v4: uuid } = require('uuid')

const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')


const logEvents = async (message) =>{
  const dataTime =`${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`
  const logItem = `${dataTime}\t${uuid()}\t${message}`
  console.log(logItem)
  try{
    await fsPromises.appendFile(path.join(__dirname,'logs',eventLog.txt))
  }catch(err){
    console.log(err)
  }
}
//console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'))

module.exports = logEvents