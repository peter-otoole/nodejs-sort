/**
 * nodejs-sort
 *
 * Copyright Peter O'Toole 2016
 *
 * Created by Peter on 21/05/2016.
 */
"use strict"

const is = require( "is" )

module.exports.stringDefault = function ( first, second ) {
	
	return first > second
}

module.exports.sortBy = function () {
	
	var args = arguments.length
		? [ arguments[ 0 ] ]
		: Array.apply( null, arguments )
	
	args.map( function ( suspect ) {
		
		if ( !is.string( suspect ) ) {
			throw new TypeError( "The sortBy function only supports string keys" )
		}
	} )
	
	return function ( first, second ) {
		
		for ( var ith = 0; ith < args.length; ith++ ) {
			
			if ( first > second ) {
				return true
			}
		}
		
		return false
	}
}