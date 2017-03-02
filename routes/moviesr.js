var express = require('express');
fs = require('fs');
var list = require('./movies');
var router = express.Router();

router.get('/list', function(req, res, next) {
    //console.log(list);
    
    var x=[];
    for(var i=0;i<list.length;i++){
        x.push(list[i]);
        //console.log(list[i]);   
    }
    
    res.render('movies/list.twig', {movies:x});
    
});


router.get('/addFovori/:x', function(req, res, next) {
    
/*    for(var i=0;i<list.length;i++){
        if(list[i].titre==req.params.titre){
            
            req.session.favoris.push(list[i]);
        };
    }*/
    
    console.log(req.params.x);
    
    req.session.favoris.push(list[req.params.x]);
    
    res.redirect('/listFavoris');
    //res.render('movies/favoris.twig', {movies:x});
    
});

router.get('/listFavoris', function(req, res, next) {
    //console.log(req.session.favoris);
    res.render('movies/favoris.twig', {favoris:req.session.favoris});
    
});

router.get('/suppFavori/:index', function(req, res, next) {
    
    
    req.session.favoris.splice(req.params.index,1);

    res.redirect('/listFavoris');
    
});





router.get('/search', function(req, res, next) {
    
    res.render('movies/search.twig', {result:null});
    
});



router.post('/searchA', function(req, res, next) {
    
    var x=[];
    
    for(var i=0;i<list.length;i++){
        if(list[i].titre==req.body.search){
            x.push(list[i]);
        }
    }
    
    res.render('movies/searcha.twig', {result:x});
    
});


module.exports = router;
