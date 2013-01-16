/*
 * @category Design Pattern Tutorial
 * @package Decorator Sample
 * @author Dmitry Sheiko <me@dsheiko.com>
 * @licence MIT
 */
(function () {

    "use strict";
    /*global console:false */
    
    // Object to be decorated
var MacbookAir = function() {
    },
    // Decorator MacbookRamExtended, that represents 
    // Macbook configuration with extended RAM
    ExtendedRam = function( macbookAir ) {
        macbookAir.price += 100;
        macbookAir.ram += 4;
        return macbookAir;
    }, 
    // Decorator MacbookSddExtended, that represents 
    // Macbook configuration with extended SDD
    ExtendedSdd = function( macbookAir ) {
        macbookAir.price += 200;
        macbookAir.sdd += 128;
        return macbookAir;
    };
    
MacbookAir.prototype = {
    ram: 4,
    sdd: 128,
    price: 1199,

    getPrice: function() {
        return "$" + this.price;
    },
    getSpec: function() {
        return "13-inch MacBook Air\nRAM: " + this.ram + "\nSDD: " + this.sdd;
    }
}

/**
 * Usage
 */ 
 // Let's get maximum extended configuration
 var myMacbook = new ExtendedSdd( new ExtendedRam(new MacbookAir()) );
 console.log( myMacbook.getSpec() );
 console.log( "Price: " + myMacbook.getPrice() );
 console.log( "Is myMacbook instance of MacbookAir: ", myMacbook instanceof MacbookAir );
/**
 * Output
 */
// 13-inch MacBook Air
// RAM: 8
// SDD: 256
// Price: $1499
// Is myMacbook instance of MacbookAir:  true

}());