const fs = require('fs');
const path =require('path');
const dirpath = path.join(__dirname,"crud");
const filepath =`${dirPath}/test.txt`;

for(let i=0; i<3; i++)
{
    fs.writefileSync(filepath,"this is file path");
}
