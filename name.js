const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;
// CREATE FILE
fs.writeFileSync(filePath,"This is samplefile");
// READ FILE
 fs.readFile(filePath,'utf8',(err,item)=>{
 console.log(item);
})
// UPDATE FILE
fs.appendFile(filePath,'updatedcontent',(err)=>{
 if(!err) console.log("file is updated");
})
// RENAME FILE
//
fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
  if(!err)console.log("file nameupdated");
 })
// DELETE FILE
//  fs.unlinkSync(`${dirPath}/fruit.txt`);