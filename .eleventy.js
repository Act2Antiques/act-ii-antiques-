module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("admin");

    // URL-encode image paths to handle spaces in filenames
    eleventyConfig.addFilter("encodeUri", function(uri) {
      if (!uri) return '';
      // Handle if uri is an object with image property
      if (typeof uri === 'object' && uri.image) {
        return encodeURI(uri.image);
      }
      return encodeURI(String(uri));
    });

    eleventyConfig.addCollection("products", function(collectionApi) {                            
      return collectionApi.getFilteredByGlob("_products/*.md").sort((a, b) => {                   
        return (a.data.order || 10) - (b.data.order || 10);                                       
      });                                                                                         
    });                                                                                           
                                                                                                  
    return {                                                                                      
      dir: {                                                                                      
        input: ".",                                                                               
        output: "_site",                                                                          
        includes: "_includes"                                                                     
      },                                                                                          
      templateFormats: ["md", "njk", "html"],                                                     
      markdownTemplateEngine: "njk",                                                              
      htmlTemplateEngine: "njk"                                                                   
    };                                                                                            
  };
