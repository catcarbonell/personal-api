const db = require('./models');
const projects = [
    {
        title: "Thx 4 the Memeries" ,
        demoUrl: "https://catcarbonell.github.io/thx4memeries/",
        previewImg: "https://github.com/catcarbonell/thx4memeries/blob/master/assets/ss-thx4memeries.png" ,
        description: `
        I utilized HTML5, CSS3 (Flexbox), jQuery, AJAX, the GIPHY API to construct this search engine. 
        I thought of mobile-first development, so the layout is flexible. The URL can be highlighted on one
        click/tap for ease of copy-sharing.
        `,
        technologies: ["HTML5", "CSS3 (Flexbox)", "jQuery", "AJAX", "GIPHY API"],
    },

]

db.Project.deleteMany({}, function(err, projects){
    if(err) {
      console.log('Error occurred in remove', err);
    } else {
      console.log('removed all books');
  
    db.Project.create(projects, function(err, projects){
        if (err) { return console.log('err', err); }
        console.log("created", projects.length, "books");
        process.exit();
    });
    }
});

