/**
 * @author Koji
 */
//$('<div></div>').text("sample").appendTo('#KANBAN');
window.alert("sample");

var DomController = function(content){
	this.content = content;
	this.setDom = function(){
	  return $('<div></div>').text(this.content);	
	};
//	
	this.sampledom = function(){
		return this.content;
	};
	
	this.createDoms = function(){
		var contentStrArr = [];
		var parseContent = eval("(" + content + ")");
		for (var i in parseContent){
//			contentStrArr = parseContent[i].taskName + "\n<br/>" 
//						   + parseContent[i].estimatedStartTime;

//			contentStrArr =$('<div></div>').text(parseContent[i].taskName + "\n<br/>" 
//			   + parseContent[i].estimatedStartTime);
			
//			contentStrArr.push($('<div></div>').text(parseContent[i].estimatedStartTime));
		
			contentStrArr.push($('<div></div>').text(parseContent[i].taskName + "\n<br/>" 
					   + parseContent[i].estimatedStartTime));
		}
		return contentStrArr;
	};
};
//$('<div></div>').text('dataTmp').appendTo('#KANBAN');	
