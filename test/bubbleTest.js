/**
 * nodejs-sort
 *
 * Copyright Peter O'Toole 2016
 *
 * Created by Peter on 21/05/2016.
 */

"use strict"

var bubble = require( "../lib/bubble" )
var assert = require( "assert" )

suite( "bubble", function () {
	
	test( "Sort string", function ( done ) {
		
		var sorted = bubble( "hdj;vjknsd dslvhbvvbPSDbwy3q0t9gah[prvnp9agnvb#pvib#vln#av" )
		assert.strictEqual( sorted, " ###0399;DPS[aaabbbbbdddgghhhijjkllnnnnpppqrsstvvvvvvvvvwy" )
		done()
	} )
	
	test( "Sort array", function ( done ) {
		
		var sorted = bubble( [ 1, 2, 3, 4, 5, 6, 5, 4, 3, 6, 7, 4, 9, 156, 334, 5, 2, 5, 6, 7 ] )
		assert.deepEqual( sorted, [ 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 9, 156, 334 ] )
		done()
	} )
	
	test( "Sort object", function ( done ) {
		
		var data = {
			"John":    "accounts",
			"Adrian":  "sales",
			"Michael": "marketing",
			"James":   "sales"
		}
		
		var sorted = bubble( data )
		assert.deepEqual( sorted, data )
		assert.deepEqual( Object.keys( sorted ), [ "Adrian", "James", "John", "Michael" ] )
		
		done()
	} )
	
	test( "Sort undefined - gives error", function ( done ) {
		
		try {
			
			bubble()
		} catch ( error ) {
			
			assert.strictEqual( error.message, "Unsorted data should be of types [string,object,array]" )
			assert.strictEqual( error.name, "TypeError" )
			done()
		}
	} )
	
	test( "Sort null - gives error", function ( done ) {
		
		try {
			
			bubble( null )
		} catch ( error ) {
			
			assert.strictEqual( error.message, "Unsorted data should be of types [string,object,array]" )
			assert.strictEqual( error.name, "TypeError" )
			done()
		}
	} )
	test( "Sort function - gives error", function ( done ) {
		
		try {
			
			bubble( function () {} )
		} catch ( error ) {
			
			assert.strictEqual( error.message, "Unsorted data should be of types [string,object,array]" )
			assert.strictEqual( error.name, "TypeError" )
			done()
		}
	} )
	test( "Sort number - gives error", function ( done ) {
		
		try {
			
			bubble( 1 )
		} catch ( error ) {
			
			assert.strictEqual( error.message, "Unsorted data should be of types [string,object,array]" )
			assert.strictEqual( error.name, "TypeError" )
			done()
		}
	} )
	
	test( "Sort boolean - gives error", function ( done ) {
		
		try {
			
			bubble( true )
		} catch ( error ) {
			
			assert.strictEqual( error.message, "Unsorted data should be of types [string,object,array]" )
			assert.strictEqual( error.name, "TypeError" )
			done()
		}
	} )
	
	
} )