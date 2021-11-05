let eyeDropper = new EyeDropper();
let icon          = document.getElementById("image");
let selectedColor = document.getElementById("selectedColor");

icon.addEventListener('click', event => {
    eyeDropper.open()
    .then(colorSelectionResult => {
        // Returns hex color value (#RRGGBB) of the selected pixel.
        selectedColor.innerHTML = colorSelectionResult.sRGBHex;
    })
    .catch(error => {
        // handle the user choosing to exit 
        // eyedropper mode without a selection.
    });
});