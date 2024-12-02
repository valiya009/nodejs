const fs = require('fs');
 const path = require('path');
 const dirpath = path.join(__dirname,'crud')
 for(let i=0 ;i<5; i++)
 {
    fs.writeFileSync(dirpath+"/hello"+i+".txt","sample file");
 }
fs.readdir(dirpath,(err,files)=>{
    files.forEach((item) => {
        console.log("file is ",item); 
     })
})


 