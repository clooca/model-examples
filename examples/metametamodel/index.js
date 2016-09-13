var Ecore = require('ecore');
var _ = require('underscore');

//console.log(Ecore.EPackage);
var rs = Ecore.ResourceSet.create();
var hello = rs.create({ uri: 'ecore' });

hello.get('contents').add(Ecore.EcorePackage);


console.log( JSON.stringify(hello.to(Ecore.JSON), null, 2) );
