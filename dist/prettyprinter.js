/*! PrettyPrinter Bookmarklet - v0.1.0 - 2012-07-16
* http://github.com/dharFr/prettyprint-bookmarklet
* Copyright (c) 2012 Olivier Audard; Licensed MIT */

javascript:

(function prettyprinter(){
	var scriptNode, cssNode;

	// Adding 'prettyprint' class to any 'pre' element
	Array.prototype.forEach.call(document.querySelectorAll('pre'), function(n){	
		n.className = 'prettyprint'; 
	});

	// Loading google's prettyfy.js
	scriptNode = document.createElement('script');
	scriptNode.onload = function(){ 
		/*global prettyPrint:true */
		prettyPrint(); 
	};
	scriptNode.src='http://cdnjs.cloudflare.com/ajax/libs/prettify/188.0.0/prettify.js';
	document.body.appendChild(scriptNode);

	// Loading google's prettyfy.css
	cssNode=document.createElement('link');
	cssNode.href='http://google-code-prettify.googlecode.com/svn/trunk/src/prettify.css';
	cssNode.setAttribute('rel', 'stylesheet');
	document.body.appendChild(cssNode);
}());
