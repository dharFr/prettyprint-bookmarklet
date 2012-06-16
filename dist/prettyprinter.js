/*! PrettyPrinter Bookmarklet - v0.1.0 - 2012-06-16
* http://github.com/dharFr/prettyprint-bookmarklet
* Copyright (c) 2012 Olivier Audard; Licensed MIT */

javascript:

(function prettyprinter(){
	var s, l;

	// Adding 'prettyprint' class to any 'pre' element
	Array.prototype.forEach.call(document.querySelectorAll('pre'), function(n){	
		n.className = 'prettyprint'; 
	});

	// Loading google's prettyfy.js
	s=document.createElement('script');
	s.onload=function(){ 
		/*global prettyPrint:true */
		prettyPrint(); 
	};
	s.src='http://cdnjs.cloudflare.com/ajax/libs/prettify/188.0.0/prettify.js';
	document.body.appendChild(s);

	// Loading google's prettyfy.css
	l=document.createElement('link');
	l.href='http://google-code-prettify.googlecode.com/svn/trunk/src/prettify.css';
	l.setAttribute('rel', "stylesheet");
	document.body.appendChild(l);
}());
