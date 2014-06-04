$(function(){
  var name = $("#name");
  var email = $("#email");
  var taskName = $("#taskName");
  var estimatedStartTime = $("#estimatedStartTime");
  var estimatedFinishTime = $("#estimatedFinishTime");
  var startTime = $("#startTime");
  var finishTime = $("#finishTime");
  var fileName =$("#fileName");
  var filePath = $("#filePath");
  var status = $("#status");
  nameKoji = "koji";
  emailKoji = "kojimail";
  $("#dialog-form").dialog({
    autoOpen:false,
    height:300,
    width:350,
    modal:true,
    buttons:{
      "OK":function(){
// //       name.val()
//        var data = {request : "kojikojo"};
//    	var data = {request : name.text()};

        $.ajax({
         type:"POST",
         url:"http://localhost:8080/register3.rb",
         dataType:'text',
         cache: false,
//         data:{request : name.val()},
         data:{name : name.val(),
			   email : email.val(),
			   taskName : taskName.val(),
			   estimatedStartTime : estimatedStartTime.val(),
			   estimatedFinishTime : estimatedFinishTime.val(),
			   startTime : startTime.val(),
			   finishTime : finishTime.val(),
			   fileName : fileName.val(),
			   filePath : filePath.val(),
			   status : status.val()},
         //data:"kojiajax",
         //data: data,
          success:function(dataTmp){
            window.alert(dataTmp);
            $('<div></div>').text(dataTmp).appendTo('#KANBAN');
          }
//          );
//     }
//   }
//   });
//         //var PARENT = document.getElementById("KANBAN");
//         //PARENT.appendChild(kanbanArray[i].taskName);
//
//
        });
//        $(this).dialog("close");
      },
      "Cancel":function(){
        $(this).dialog("close");
      }
    }
////  buttons:[{text:"OK",click: function() {$(this).dialog("close");}
////    }]
    });

    $("#create-user")
    .button()
    .click(function(){
      $("#dialog-form").dialog("open");

    });
  });
////$(function(){
////  $("#dialog").dialog();
////});

var data = { "foo":'abc', "bar":100 };


function initialize(){
//  window.alert("aaa");
  var url = "http://localhost:8080/content.json"
  var xhr = new XMLHttpRequest();
  xhr.open('GET',url,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
       var result = xhr.responseText;
       window.alert("一回目");
       window.alert(result);
       var tmp = eval("(" +result+ ")")
       window.alert(tmp[1].taskName);
       window.alert(tmp[1].estimatedStartTime);
       window.alert(tmp[1].estimatedFinishTime);

       var kanbanArray = [];
       var propertyArray = [];

       var Member = function(){
         this.taskName = document.createElement("p");
         this.estimatedStartTime = document.createElement("p");
         this.estimatedFinishTime = document.createElement("p");
         this.startTime = document.createElement("p");
         this.finishTime = document.createElement("p");
         this.fileName = document.createElement("p");
         this.filePath = document.createElement("p");
         this.status = document.createElement("p");

         this.setInnerHtml = function(taskName,estimatedStartTime,estimatedFinishTime,startTime,finishTime,fileName,filePath,status){
           this.taskName.innerHTML = taskName;
           this.estimatedStartTime.innerHTML = estimatedStartTime;
           this.estimatedFinishTime.innerHTML = startTime;
           this.startTime.innerHTML = startTime;
           this.finishTime.innerHTML = finishTime;
           this.fileName.innerHTML = fileName;
           this.filePath.innerHTML = filePath;
           this.status.innerHTML = status;
         }
       };
       for (i=0; i<tmp.length; i = i+1){
         kanbanArray.push(new Member());
         kanbanArray[i].setInnerHtml(tmp[i].taskName,tmp[i].estimatedStartTime,tmp[i].estimatedFinishTime,tmp[i].startTime,tmp[i].finishTime,tmp[i].fileName,tmp[i].filePath,tmp[i].status);
         var PARENT = document.getElementById("KANBAN");
         PARENT.appendChild(kanbanArray[i].taskName);
         PARENT.appendChild(kanbanArray[i].estimatedStartTime);
         PARENT.appendChild(kanbanArray[i].estimatedFinishTime);
         PARENT.appendChild(kanbanArray[i].startTime);
         PARENT.appendChild(kanbanArray[i].finishTime);
         PARENT.appendChild(kanbanArray[i].fileName);
         PARENT.appendChild(kanbanArray[i].filePath);
         PARENT.appendChild(kanbanArray[i].status);
      }
    }
  };
  xhr.setRequestHeader("Content-Type","text/plain");
  xhr.send(null);
}

function filesSelected(files) {
//  for (var i = 0; i < files.length; i++) {
//  alert("ファイル名:" + files[i].name + "\n ファイルサイズ:" + files[i].size + "\n ファイルタイプ:" + files[i].type);
//  var url = "http://localhost:8080/register2.rb"
//  var xhr = new XMLHttpRequest();
//  xhr.open('POST',url,true);
//  xhr.onreadystatechange = function(){
//    var result = xhr.responseText;
//    window.alert(result);
//  };
//  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
//  window.alert("def");
//  xhr.send(EncodeHTMLForm( data ));
//  window.alert("jij");
//}
      $("#dialog-form").dialog("open");
}

function DragOver(e) {
e.preventDefault();
}

function Drop(e) {
e.preventDefault();
filesSelected(e.dataTransfer.files);
}

function EncodeHTMLForm( data )
{
    var params = [];

    for( var name in data )
    {
        var value = data[ name ];
        var param = encodeURIComponent( name ).replace( /%20/g, '+' )
            + '=' + encodeURIComponent( value ).replace( /%20/g, '+' );

        params.push( param );
    }

    return params.join( '&' );
}
