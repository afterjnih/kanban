/**
 * @author Koji
 */
//$('<div></div>').text("sample").appendTo('#KANBAN');
window.alert("sample");

var DomController = function(text){
	this.text = text;
	this.setDom = function(){
	  return $('<div></div>').text('aaaaaa');	
	};
//	
	this.sampledom = function(){
		return this.text;
	};
};
//$('<div></div>').text('dataTmp').appendTo('#KANBAN');	
