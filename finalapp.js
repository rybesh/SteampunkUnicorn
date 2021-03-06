// This is a sample application which you can use as a starting point for your
// project. The only parts you should *need* to change are indicated with `TODO`
// below. However, you are welcome to change more if you wish.

////////////////////////////////////////////////////////////////////////////////

var USER_OR_GROUP_NAME = 'SteampunkUnicorn'; // TODO: Insert GitHub username or group name.

////////////////////////////////////////////////////////////////////////////////

if (! USER_OR_GROUP_NAME) { 
  throw new Error(
    'You must set your GitHub username or group name in the app.js file'); 
}

// Import some utility functions.
var utils = require('./utils');

// Create a new web application.
var app = utils.initializeWebApp();

// Connect to your database.
var db = utils.connectToDatabase(USER_OR_GROUP_NAME);

// TODO: Start defining your resource handlers. You may just need to modify the
// examples below, or you may need to add additional handlers by copying,
// pasting, and modifying these examples.

////////////////////////////////////////////////////////////////////////////////
// Example of handling PUT to create or update a resource. /////////////////////
// Here we create or update an item using the ID specified in the URI. /////////
////////////////////////////////////////////////////////////////////////////////
/* app.put('artists/albums/:id',      // TODO: change to suit your URI design.
  function(req, res) {
  
    // Get the item ID from the URI.
    var item_id = req.params.id;

    // Get the item info that was PUT from the input form.
    // See the form in `views/list-parties.ejs`.
    var item = req.body.item;
    
    item.type = 'album'; // TODO: change to the type of item you want

    // Save the new item to the database, specifying the ID.
    db.save(item_id, item, function(err) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 
      
      // Otherwise, redirect back to the URI from which the form was submitted.
      else { res.redirect('back' ); }
    });
  }
);

*/

////////////////////////////////////////////////////////////////////////////////
// Example of handling POST to create an artist. //////////////////////////////
// Here we create an item and allow the ID to be created automatically. ////////
////////////////////////////////////////////////////////////////////////////////
app.post('/artists/', // TODO: change to suit your URI design.
  function(req, res) {
  
    // Get the item info that was POSTed from the input form.
    // See the form in `views/one-party.ejs`.
    var item = req.body.item;

    item.type = 'artist'; // TODO: change to the type of item you want

    // Save the new item to the database. (No ID specified, it will be created.)
    db.save(item, function(err) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 
      
      // Otherwise, redirect back to the URI from which the form was submitted.
      else { res.redirect('back' ); }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// Example of handling POST to create an album. //////////////////////////////
// Here we create an item and allow the ID to be created automatically. ////////
////////////////////////////////////////////////////////////////////////////////
app.post('/albums/', // TODO: change to suit your URI design.
  function(req, res) {
  
    // Get the item info that was POSTed from the input form.
    // See the form in `views/one-party.ejs`.
    var item = req.body.item;

    item.type = 'album'; // TODO: change to the type of item you want

    // Save the new item to the database. (No ID specified, it will be created.)
    db.save(item, function(err) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 
      
      // Otherwise, redirect back to the URI from which the form was submitted.
      else { res.redirect('back' ); }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// Example of handling POST to create a song. //////////////////////////////
// Here we create an item and allow the ID to be created automatically. ////////
////////////////////////////////////////////////////////////////////////////////
app.post('/songs/', // TODO: change to suit your URI design.
  function(req, res) {
  
    // Get the item info that was POSTed from the input form.
    // See the form in `views/one-party.ejs`.
    var item = req.body.item;

    item.type = 'song'; // TODO: change to the type of item you want

    // Save the new item to the database. (No ID specified, it will be created.)
    db.save(item, function(err) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 
      
      // Otherwise, redirect back to the URI from which the form was submitted.
      else { res.redirect('back' ); }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// Another example of handling PUT to update a resource. ///////////////////////
// Here we update an item using the ID specified in the URI. ///////////////////
////////////////////////////////////////////////////////////////////////////////
app.put('/artists/:id', // TODO: change to suit your URI design.
  function(req, res) {
  
    // Get the item ID from the URI.
    var item_id = req.params.id;

    // Get the item info that was PUT from the input form.
    // See the form in `views/one-candidate.ejs`.
    var item = req.body.item;

    item.type = 'artist'; // TODO: change to the type of item you want

    // Save the new item to the database, specifying the ID.
    db.save(item_id, item, function(err) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 
      
      // Otherwise, redirect back to the URI from which the form was submitted.
      else { res.redirect('back' ); }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// Another example of handling PUT to update a resource. ///////////////////////
// Here we update an item using the ID specified in the URI. ///////////////////
////////////////////////////////////////////////////////////////////////////////
app.put('/albums/:id', // TODO: change to suit your URI design.
  function(req, res) {
  
    // Get the item ID from the URI.
    var item_id = req.params.id;

    // Get the item info that was PUT from the input form.
    // See the form in `views/one-candidate.ejs`.
    var item = req.body.item;

    item.type = 'album'; // TODO: change to the type of item you want

    // Save the new item to the database, specifying the ID.
    db.save(item_id, item, function(err) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 
      
      // Otherwise, redirect back to the URI from which the form was submitted.
      else { res.redirect('back' ); }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// Another example of handling PUT to update a resource. ///////////////////////
// Here we update an item using the ID specified in the URI. ///////////////////
////////////////////////////////////////////////////////////////////////////////
app.put('/songs/:id', // TODO: change to suit your URI design.
  function(req, res) {
  
    // Get the item ID from the URI.
    var item_id = req.params.id;

    // Get the item info that was PUT from the input form.
    // See the form in `views/one-candidate.ejs`.
    var item = req.body.item;

    item.type = 'song'; // TODO: change to the type of item you want

    // Save the new item to the database, specifying the ID.
    db.save(item_id, item, function(err) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 
      
      // Otherwise, redirect back to the URI from which the form was submitted.
      else { res.redirect('back' ); }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// Another example of handling GET of a "collection" of artists resource. /////////////////
// This time we support filtering the list by some criteria (i.e. searching). //
////////////////////////////////////////////////////////////////////////////////
app.get('/artists/',          // TODO: change to suit your URI design. 
  function(req, res) {

    var item_type = 'artist'; // TODO: change to the type of item you want.

    // Get items of the specified type that match the query.
    db.getSome(item_type, req.query, function(err, items) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 

      // Otherwise, use the returned data to render an HTML page.
      else {
        res.render(
          'list-artists', // TODO: change to the name of your HTML template.
          { items: items }
        );
      }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// Another example of handling GET of a "collection" of albums resource. /////////////////
// This time we support filtering the list by some criteria (i.e. searching). //
////////////////////////////////////////////////////////////////////////////////
app.get('/albums/',          // TODO: change to suit your URI design. 
  function(req, res) {

    var item_type = 'album'; // TODO: change to the type of item you want.

    // Get items of the specified type that match the query.
    db.getSome(item_type, req.query, function(err, items) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 

      // Otherwise, use the returned data to render an HTML page.
      else {
        res.render(
          'list-albums', // TODO: change to the name of your HTML template.
          { items: items }
        );
      }
    });
  }
);



////////////////////////////////////////////////////////////////////////////////
// An example of handling GET of the root resource, which is a list of artists, with dependent type albums. //////////////////////////
// This handler is also complicated, because we want to show not only the //////
// item requested, but also a list of potential related items, so that users ///
// can select from a list when updating the item. //////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.get('/',       // TODO: change to suit your URI design.
  function(req, res) {

    var item_type = 'artist'; // TODO: change to the type of item you want.

    // Get the item ID from the URI.
    var item_id = req.params.id;
  
    // Get one item of the specified type, identified by the item ID.
    db.getOne(item_type, item_id, function(err, item) {
        
      // If there was a database error, return an error status.
      if (err) {
        if (err.error == 'not_found') { res.send(404); }
        else { res.send(err, 500); }
      } 

      // Otherwise, get the items potentially related to this item.
      else {
        
        var related_type = 'album'; // TODO: change to type of related item.

        // Get all items of the specified related type.
        db.getAll(related_type, function(err, items) {

          // If there was a database error, return an error status.
          if (err) { res.send(err, 500); } 

          // Otherwise, use the returned data to render an HTML page.
          else {
            res.render(
              'index', // TODO: change to name of your HTML template.
              { items: items, related_items: items }
            );
          }
        });
      }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// An example of handling GET of the allsongs resource, which is a list of songs, with dependent type artist. //////////////////////////
// This handler is also complicated, because we want to show not only the //////
// item requested, but also a list of potential related items, so that users ///
// can select from a list when updating the item. //////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.get('/songs/',       // TODO: change to suit your URI design.
  function(req, res) {

    var item_type = 'song'; // TODO: change to the type of item you want.

    // Get the item ID from the URI.
    var item_id = req.params.id;
  
    // Get one item of the specified type, identified by the item ID.
    db.getOne(item_type, item_id, function(err, item) {
        
      // If there was a database error, return an error status.
      if (err) {
        if (err.error == 'not_found') { res.send(404); }
        else { res.send(err, 500); }
      } 

      // Otherwise, get the items potentially related to this item.
      else {
        
        var related_type = 'artist'; // TODO: change to type of related item.

        // Get all items of the specified related type.
        db.getAll(related_type, function(err, items) {

          // If there was a database error, return an error status.
          if (err) { res.send(err, 500); } 

          // Otherwise, use the returned data to render an HTML page.
          else {
            res.render(
              'list-songs', // TODO: change to name of your HTML template.
              { items: items, related_items: items }
            );
          }
        });
      }
    });
  }
);


////////////////////////////////////////////////////////////////////////////////
// An example of handling GET of the artist resource, which is a list of albums. //////////////////////////
// This handler is also complicated, because we want to show not only the //////
// item requested, but also a list of potential related items, so that users ///
// can select from a list when updating the item. //////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.get('/artist/:id',       // TODO: change to suit your URI design.
  function(req, res) {

    var item_type = 'artist'; // TODO: change to the type of item you want.

    // Get the item ID from the URI.
    var item_id = req.params.id;
  
    // Get one item of the specified type, identified by the item ID.
    db.getOne(item_type, item_id, function(err, item) {
        
      // If there was a database error, return an error status.
      if (err) {
        if (err.error == 'not_found') { res.send(404); }
        else { res.send(err, 500); }
      } 

      // Otherwise, get the items potentially related to this item.
      else {
        
        var related_type = 'album'; // TODO: change to type of related item.

        // Get all items of the specified related type.
        db.getAll(related_type, function(err, items) {

          // If there was a database error, return an error status.
          if (err) { res.send(err, 500); } 

          // Otherwise, use the returned data to render an HTML page.
          else {
            res.render(
              'artist', // TODO: change to name of your HTML template.
              { item: item, related_items: items }
            );
          }
        });
      }
    });
  }
);



////////////////////////////////////////////////////////////////////////////////
// An example of handling GET of the album resource, which a list of dependent songs. //////////////////////////
// This handler is also complicated, because we want to show not only the //////
// item requested, but also a list of potential related items, so that users ///
// can select from a list when updating the item. //////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.get('/album/:id',       // TODO: change to suit your URI design.
  function(req, res) {

    var item_type = 'album'; // TODO: change to the type of item you want.

    // Get the item ID from the URI.
    var item_id = req.params.id;
  
    // Get one item of the specified type, identified by the item ID.
    db.getOne(item_type, item_id, function(err, item) {
        
      // If there was a database error, return an error status.
      if (err) {
        if (err.error == 'not_found') { res.send(404); }
        else { res.send(err, 500); }
      } 

      // Otherwise, get the items potentially related to this item.
      else {
        
        var related_type = 'song'; // TODO: change to type of related item.

        // Get all items of the specified related type.
        db.getAll(related_type, function(err, items) {

          // If there was a database error, return an error status.
          if (err) { res.send(err, 500); } 

          // Otherwise, use the returned data to render an HTML page.
          else {
            res.render(
              'album', // TODO: change to name of your HTML template.
              { item: item, related_items: items }
            );
          }
        });
      }
    });
  }
);



////////////////////////////////////////////////////////////////////////////////
// An example of handling GET of the song resource, which a list of containing albums. //////////////////////////
// This handler is also complicated, because we want to show not only the //////
// item requested, but also a list of potential related items, so that users ///
// can select from a list when updating the item. //////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.get('/song/:id',       // TODO: change to suit your URI design.
  function(req, res) {

    var item_type = 'song'; // TODO: change to the type of item you want.

    // Get the item ID from the URI.
    var item_id = req.params.id;
  
    // Get one item of the specified type, identified by the item ID.
    db.getOne(item_type, item_id, function(err, item) {
        
      // If there was a database error, return an error status.
      if (err) {
        if (err.error == 'not_found') { res.send(404); }
        else { res.send(err, 500); }
      } 

      // Otherwise, get the items potentially related to this item.
      else {
        
        var related_type = 'album'; // TODO: change to type of related item.

        // Get all items of the specified related type.
        db.getAll(related_type, function(err, items) {

          // If there was a database error, return an error status.
          if (err) { res.send(err, 500); } 

          // Otherwise, use the returned data to render an HTML page.
          else {
            res.render(
              'song', // TODO: change to name of your HTML template.
              { item: item, related_items: items }
            );
          }
        });
      }
    });
  }
);

// Handle GET of the "index" resource.
//app.get('/', function(req, res) { res.render('index'); });

// Start listening for incoming HTTP connections.
app.listen(process.env.PORT);
