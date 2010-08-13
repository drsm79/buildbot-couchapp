function(head, req) {
  var row;
  start({
    "headers": {
      "Content-Type": "text/html"
     }
  });
  send("<html>\n\t<head>\n");
  send("\t\t<style>\n");
  send("\t\t\tul {display:inline;}\n");
  send("\t\t\tli {display:inline;}\n");
  send("\t\t</style>\n");
  send("\t</head>\n");
  send("\t<body>\n");  
  send("\t\t<h1>The following tests have failures:</h1>\n");
  send("\t\t<dl>\n");
  key = "";
  while(row = getRow()) {
    if (key == row.key) {
      send("\t\t\t\t<li>" + row.value + "</li>");
    } else {
      if (key != "") {
        send("\t\t\t</ul></dd>\n");
      }
      send("\t\t\t<dt><b>" + row.key + "</b></dt>\n");
      send("\t\t\t<dd>Failed Builders:<ul>\n");
      send("\t\t\t\t<li>" + row.value + "</li>");
      key = row.key;
    }
  }
  send("\t\t\t</ol></dd>\n");
  send("\t\t</dl>\n");
  send("\t</body>\n</html>");
  
}