module.exports = function(eleventyConfig) {                                                     
    eleventyConfig.addPassthroughCopy("css");                                                     
    eleventyConfig.addPassthroughCopy("fonts");                                                   
    eleventyConfig.addPassthroughCopy("images");                                                  
    eleventyConfig.addPassthroughCopy("admin");                                                   
    eleventyConfig.addPassthroughCopy("about.html");                                              
    eleventyConfig.addPassthroughCopy("contact.html");                                            
                                                                                                  
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
