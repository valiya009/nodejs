 const fs = require('fs')
 const path = require('path')
 const dirpath = path.join(__dirname,File)
 for(let i=0 ;i<5; i++)
 {
    fs = fs.writeFileSync(dirpath+"hello"+i+".txt","sample file");
 }
 fs = fs.readFile(dirpath,(err,item))
 files.array.forEach((item) => {
    console.log("file is item");
    
    
 });