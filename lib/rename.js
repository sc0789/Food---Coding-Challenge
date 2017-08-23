var fs = require('fs');

fs.readdir('./files', function(err, fileNames){
console.info(fileNames);
for(let i=0; i<fileNames.length; i++){
 
var time = new Date();

var hhmm = time.toTimeString().split(' ')[0];
var mmddyyyy =time.getDate()+'-'+time.getMonth()+'-'+time.getFullYear();
var filename = fileNames[i]+'_EDITED_'+mmddyyyy+'_'+hhmm+'.txt';
console.info(filename);
fs.rename('./files/'+fileNames[i],filename, function(err){
	if(err){
		console.error(err);
	}
});
var myText = 'old filename is '+fileNames[i]+' \n'+'new filename is '+filename;
fs.appendFile('./files/'+filename,myText, function(err){
console.error(err);
})
}


});