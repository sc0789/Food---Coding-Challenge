// importing the file system module.
var fs = require('fs');

// reading the file names from files directory
fs.readdir('./files', function(err, fileNames) {
	console.info(fileNames);

// Looping through all the filenames
// use let so that value of i is not accessed outside of for loop.
for(let i=0; i<fileNames.length; i++) {
 
 // getting date
var time = new Date();

// generating time in hh:mm format.
var hhmm = time.toTimeString().split(' ')[0];

// generating date in mm:dd:yyyy format.
var mmddyyyy =time.getDate()+'-'+time.getMonth()+'-'+time.getFullYear();

// generating the filename string required to rename.
var filename = fileNames[i]+'_EDITED_'+mmddyyyy+'_'+hhmm+'.txt';
	
// renaming the files in files directory with the above generated filename.
fs.rename('./files/'+fileNames[i],filename, function(err){
	if(err){
		console.error(err);
	}
});

// generating the content to be appended to the file.
var myText = 'old filename is '+fileNames[i]+' \n'+'new filename is '+filename;

// appending the content to the renamed files.
fs.appendFile('./files/'+filename,myText, function(err){
			console.error(err);
		});
	}
});