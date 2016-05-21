/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

Detector = {

	canvas : !! window.CanvasRenderingContext2D,
	webgl : ( function () { try { return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' ); } catch( e ) { return false; } } )(),
	workers : !! window.Worker,
	fileapi : window.File && window.FileReader && window.FileList && window.Blob,

	getWebGLErrorMessage : function () {

		var domElement = document.createElement( 'div' );

		domElement.style.fontFamily = 'sans-serif';
		domElement.style.fontSize = '14px';
		domElement.style.textAlign = 'center';
		//domElement.style.background = '#eee';
		domElement.style.color = '#ffffff';
		domElement.style.padding = '1em';
		domElement.style.width = '475px';
		domElement.style.margin = '5em auto 0';

		if ( ! this.webgl ) {

			domElement.innerHTML = window.WebGLRenderingContext ? [
				'You need a modern browser that supports <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a>.<br /><a href="http://www.google.com/landing/chrome/beta/" target="_blank">Google Chrome 9+</a> or <a href="http://www.mozilla.com/firefox/beta/" target="_blank">Firefox 4+</a> is recommended.<br />',
				'Find out <a href="http://get.webgl.org/"target="_blank">more</a>.'
			].join( '\n' ) : [
				'You need a modern browser that supports WebGL<a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a>.<br /><a href="http://www.google.com/landing/chrome/beta/" target="_blank">Google Chrome 9+</a> or <a href="http://www.mozilla.com/firefox/beta/" target="_blank">Firefox 4+</a> is recommended.<br />',
				'Find out <a href="http://get.webgl.org/"target="_blank">more</a>.'
			].join( '\n' );

		}

		return domElement;

	},

	addGetWebGLMessage : function ( parameters ) {

		var parent, id, domElement;

		parameters = parameters || {};

		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';

		domElement = Detector.getWebGLErrorMessage();
		domElement.id = id;

		parent.appendChild( domElement );

	}

};
