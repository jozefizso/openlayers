/* vsdoc for OpenLayers/BaseTypes/Pixel.js */

(function (window) {
    window.OpenLayers = window.OpenLayers || {};

    window.OpenLayers.Pixel = function (x, y) {
        /// <summary>This class represents a screen coordinate, in x and y coordinates</summary>
        /// <param name="x" type="Number">The x coordinate (param)</param>
        /// <param name="y" type="Number">The y coordinate (param)</param>
        /// <field name="x" type="Number">The x coordinate</field>
        /// <field name="y" type="Number">The y coordinate</field>
        /// <returns type="OpenLayers.Pixel"/>
    };

    var $p = window.OpenLayers.Pixel;
    $p.prototype = {
        x: 0,
        y: 0,

        toString: function () {
            /// <summary>Cast this object into a string</summary>
            /// <returns type="String">The string representation of Pixel. ex: "x=200.4,y=242.2"</returns>
        },

        clone: function () {
            /// <summary>Return a clone of this pixel object</summary>
            /// <returns type="OpenLayers.Pixel">A clone pixel</returns>
        },

        equals:function(px) {
            /// <summary>Determine whether one pixel is equivalent to another</summary>
            /// <param name="px" type="OpenLayers.Pixel"></param>
            /// <returns type="Boolean">The point passed in as parameter is equal to this. Note that
            ///     if px passed in is null, returns false.</returns>
        },

        add:function(x, y) {
            /// <summary> </summary>
            /// <param name="x" type="Number"></param>
            /// <param name="y" type="Number"></param>
            /// <returns type="OpenLayers.Pixel">A new Pixel with this pixel's x&y augmented by the values passed in.</returns>
        },

        offset:function(px) {
            /// <summary> </summary>
            /// <param name="px" type="OpenLayers.Pixel"></param>
            /// <returns type="OpenLayers.Pixel">A new Pixel with this pixel's x&y augmented by the x&y values of the pixel passed in.</returns>
        },
    };

    $p.__class = true;
    $p.__typeName = "OpenLayers.Pixel";

})(this);