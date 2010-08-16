/* vsdoc for OpenLayers/BaseTypes.js */

(function (window) {
    window.OpenLayers = window.OpenLayers || {};

    window.OpenLayers.String = {
        /// <summary>Contains convenience functions for string manipulation.</summary>
        /// <field name="tokenRegEx" static="true" type="String">Used to find tokens in a string.</field>
        /// <field name="numberRegEx" type="String">Used to test strings as numbers.</field>
        __class: true,

        tokenRegEx: "",
        numberRegEx: "",

        startsWith: function (str, sub) {
            /// <summary>
            /// Test whether a string starts with another string.
            /// </summary>
            /// <param name="str" type="String">The string to test.</param>
            /// <param name="sub" type="String">The substring to look for.</param>
            /// <returns type="Boolean">The first string starts with the second.</returns>
        }
    };

})(this);