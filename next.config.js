module.exports = {
    experimental: {
      // Remove the 'images' property if it's causing the warning
      // List only the allowed properties here
      appDocumentPreloading: true,
      adjustFontFallbacks: true,
      adjustFontFallbacksWithSizeAdjust: true,
      allowedRevalidateHeaderKeys: [],
      amp: {
        skipValidation: true,
      },
      // Add other experimental properties if needed
    },
    // Add the 'output' property for 'next export' to work with App Router
    // Set it to 'export' instead of using 'next export' command
    output: 'export',
};  