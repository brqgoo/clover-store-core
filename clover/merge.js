var fs=require('fs');
var path = require('path');
var searchFileFolder="./src";//搜索的文件夹
var searchFileNameIncludeString = ".ts";//搜索的文件名包含的字符串
var searchFileNameExcludeString = ".js.map";//搜索的文件名不包含的字符
var outputPlace = "./src/game.ts";

var fileList  = [];
var timeStart = new Date();
var filePath = path.resolve(searchFileFolder);

var startMerge = function(files){
	var arr=[];
	files.forEach(function (f) {//回调函数中的f对应每一个文件名
	var info=fs.statSync(f);//fs.stat() 检查一个文件是否存在
	if(info.mode==33206){
	    arr.push({file:f});
	}
	});
	var content='';
	arr.forEach(function (f) {
	    // console.log(f);
	    var c= fs.readFileSync(f.file);
	     content+=c.toString()+'\n';
	});
	/*
	'flag': 'a' //追加内容不覆盖
	'flag': 'w' //默认会覆盖之前的内容
	'encoding':'utf-8'
	'mode':'438'
	*/
	fs.writeFile(outputPlace,content,{'encoding':'utf-8','flag':'w','mode':438},function(err){
		console.log("写入结束",err);
	});
}

var startSearchFileSecond = function(searchPath,downCallBack){
	var readdir = promisify(fs.readdir);
	var stat = promisify(fs.stat);
	var readFile = promisify(fs.readFile);
	 
	// 简单实现一个promisify
	function promisify(fn) {
	  return function() {
	    var args = arguments;
	    return new Promise(function(resolve, reject) {
	      [].push.call(args, function(err, result) {
	        if(err) {
	          console.log(err)
	          reject(err);
	        }else {
	          resolve(result);
	        }
	      });
	      fn.apply(null, args);
	    });
	  }
	}
	 
	function readDirRecur(file, callback) {
	  return readdir(file).then((files) => {
	    files = files.map((item) => {
	      var fullPath = file + '/' + item;
	 
	      return stat(fullPath).then((stats) => {
	          if (stats.isDirectory()) {
	              return readDirRecur(fullPath, callback);
	          } else {
	            /*not use ignore files*/
	            if(item[0] == '.'){
	              //console.log(item + ' is a hide file.');
	            } 
	            else 
	            {
	             if(item.indexOf(searchFileNameIncludeString)>=0&&(searchFileNameExcludeString==""||item.indexOf(searchFileNameExcludeString)<0))
	              callback && callback(fullPath)
	            }
	          }
	        })
	    });
	    return Promise.all(files);
	  });
	}
	 
	 
	readDirRecur(searchPath, function(filePath) {
	  fileList.push(filePath)
	}).then(function() {
	  console.log('done', new Date() - timeStart); //done 3.3
	  console.log("一共找到文件数目:",fileList.length); //打印出目录下的所有文件
	  console.log("开始写入");
	  if(downCallBack)downCallBack(fileList);
	}).catch(function(err) {
	  console.log(err);
	});

}

var startSearchFileFirst = function(searchPath,downCallBack){
	function readDirRecur(folder, callback) {
	  fs.readdir(folder, function(err, files) {
	    var count = 0
	    var checkEnd = function() {
	      ++count == files.length && callback()
	    }
	    files.forEach(function(file) {
	      var fullPath = folder + '/' + file;
	 
	      fs.stat(fullPath, function(err, stats) {
	        if (stats.isDirectory()) {
	            return readDirRecur(fullPath, checkEnd);
	        } 
	        else 
	        {
	          /*not use ignore files*/
	          if(file[0]=='.')
	          {

	          }
	          else if(file.indexOf(searchFileNameIncludeString)>=0&&(searchFileNameExcludeString==""||file.indexOf(searchFileNameExcludeString)<0))
	          {
	               fileList.push(fullPath) 
	          } 
	          checkEnd()
	        }
	      })
	    })
	    //为空时直接回调
	    files.length === 0 && callback()
	  })
	}

	readDirRecur(searchPath, function(filePath) {
	    console.log('done', new Date() - timeStart);//done 3
	    console.log("一共找到文件数目:",fileList.length); //打印出目录下的所有文件
	    console.log("开始写入");
	    if(downCallBack)downCallBack(fileList);
    })

}

startSearchFileFirst(filePath,startMerge);