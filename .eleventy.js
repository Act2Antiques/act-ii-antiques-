module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("admin");

    // URL-encode image paths to handle spaces in filenames
    eleventyConfig.addFilter("encodeUri", function(uri) {
      return uri ? encodeURI(uri) : uri;
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
