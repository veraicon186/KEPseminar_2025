module.exports = function(eleventyConfig) {

 

  /* --------------------------------------------------
     Passthrough copy
  -------------------------------------------------- */
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/includes");
  eleventyConfig.addPassthroughCopy({ "src/scripts": "scripts" });


  /* --------------------------------------------------
     Watch
  -------------------------------------------------- */
  eleventyConfig.addWatchTarget("src/styles/");


  /* --------------------------------------------------
     Directories
  -------------------------------------------------- */
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site",
    },
  };
};
