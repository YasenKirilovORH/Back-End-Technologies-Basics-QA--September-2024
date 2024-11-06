function arrayRotation(arr, rotatitons)
{
    let effectiveRotations = rotatitons % arr.length;

    let rotatedPart = arr.slice(effectiveRotations);
    let rotatedFinalPart = arr.slice(0, effectiveRotations);

    return rotatedPart.concat(rotatedFinalPart).join(' ');
    
}

console.log(arrayRotation([51, 47, 32, 61, 21], 2))