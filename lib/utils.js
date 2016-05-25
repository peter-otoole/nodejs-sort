/**
 * nodejs-sort
 *
 * Copyright Peter O'Toole 2016
 *
 * Created by Peter on 21/05/2016.
 */
"use strict"

const is = require( "is" )

module.exports.toArray = function ( suspect ) {
	
	var suspectAsArray
	
	if ( is.string( suspect ) ) {
		
		suspectAsArray = suspect.split( "" )
		
	} else if ( is.array( suspect ) ) {
		
		suspectAsArray = suspect.slice()
		
	} else if ( is.object( suspect ) ) {
		
		suspectAsArray = Object.keys( suspect )
		
	} else {
		
		throw new TypeError( "Suspect should be of types [string,object,array]" )
	}
	
	return suspectAsArray
}

module.exports.arrayToObject = function ( array, data ) {
	
	var result = {}
	
	array.forEach( function ( key ) {
		
		result[ key ] = data[ key ]
	} )
	
	return result
}