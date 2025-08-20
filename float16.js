const numVertices = 1000000;
const totalCoordinates = numVertices * 3;

const vertexDataBefore = new Float32Array(totalCoordinates);
console.log(
  `Before (Float32Array) memory usage: ${
    vertexDataBefore.byteLength / (1024 * 1024)
  } MB`
); // Output: 12 MB (for 3 million floats)

// bad code

function roundToFloat16Before(value) {
  // هذا سيكون تقريب تقريبي أو يتطلب مكتبة خارجية
  return parseFloat(value.toPrecision(3)); // مثال بسيط وغير دقيق لتقريب Float16
}
const largeValue = 123.456789;
console.log(
  "Before (Manual Float16 Rounding):",
  roundToFloat16Before(largeValue)
); // Output: Before (Manual Float16 Rounding): 123

// modern code

// كل رقم Float16 بيحتاج 2 بايت
const vertexDataAfter = new Float16Array(totalCoordinates);
console.log(
  `After (Float16Array) memory usage: ${
    vertexDataAfter.byteLength / (1024 * 1024)
  } MB`
); // Output: 6 MB (for 3 million floats)

// استخدام Math.f16round() لتقريب القيم لـ Float16
const highPrecisionValue = 123.4567890123;
const roundedToF16 = Math.f16round(highPrecisionValue);
console.log("After (Math.f16round):", roundedToF16); // Output: After (Math.f16round): 123.4
