/**
 * nodejs-sort
 *
 * Copyright Peter O'Toole 2016
 *
 * Created by Peter on 21/05/2016.
 */
"use strict"

const comparators = require( "./comparators" )
const is          = require( "is" )
const utils       = require( "./utils" )


/**
 * Uses an implementation of bubble sort to sort
 *
 * @param data {string},{array},{object}
 * @param comparator {function}
 *
 * @returns {*}
 */
module.exports = function bubble( data, comparator ) {
	
	if ( !( is.string( data ) || is.array( data ) || is.object( data ) ) ) {
		
		throw new new TypeError( "Unsorted data should be of types [string,object,array]" )
	}
	
	if ( !( is.function( comparator ) || is.undefined( comparator ) ) ) {
		
		throw new new TypeError( "Comparator should be of type [function]" )
	}
	
	var comparatorFunction = comparator || comparators.stringDefault
	var dataArray          = utils.toArray( data )
	var sortedArray        = bubbleSort( dataArray, comparatorFunction )
	var result
	
	if ( is.string( data ) ) {
		
		result = data.join( "" )
		
	} else if ( is.object( data ) ) {
		
		result = utils.arrayToObject( sortedArray, data )
	}
	
	return result
}


function bubbleSort( dataArray, comparator ) {
	
	var comparisonsMade = true
	
	while ( comparisonsMade ) {
		
		comparisonsMade = false
		
		for ( var ith = 0; ith < dataArray.length; ith++ ) {
			
			if ( ith < dataArray.length && comparator( dataArray[ ith ], dataArray[ ith + 1 ] ) ) {
				
				var temp             = dataArray[ ith ]
				dataArray[ ith ]     = dataArray[ ith + 1 ]
				dataArray[ ith + 1 ] = temp
				
				comparisonsMade = true
			}
		}
	}
	
	return dataArray
}