var Ecore = require('ecore');
var _ = require('underscore');

function classdiagram() {

    //
    // The Class Diagram model
    //

    var cdPackage = Ecore.EPackage.create({ name: 'Class Diagram', nsPrefix: 'classdiagram' , nsURI: 'http://clooca.com/classdiagram'});

    var cdClass = Ecore.EClass.create({ name: 'Class Diagram' });
    var classClass = Ecore.EClass.create({ name: 'Class' });
    var associationClass = Ecore.EClass.create({ name: 'Association' });

    var nameAttribte = Ecore.EAttribute.create({ name: 'name', eType: Ecore.EString, unique: true });

    // Add the attribute and the class to their container
    cdClass.get('eStructuralFeatures').add(nameAttribte);
    classClass.get('eStructuralFeatures').add(nameAttribte);
    associationClass.get('eStructuralFeatures').add(nameAttribte);

    cdPackage.get('eClassifiers').add(cdClass);
    cdPackage.get('eClassifiers').add(classClass);
    cdPackage.get('eClassifiers').add(associationClass);

    var classesReference = Ecore.EReference.create({
    	name: 'classes',
    	eType: classClass,
    	upperBound: -1,
    	containment: true
    });
    var associationsReference = Ecore.EReference.create({
    	name: 'associations',
    	eType: associationClass,
    	upperBound: -1,
    	containment: true
    });
    var targetReference = Ecore.EReference.create({
    	name: 'target',
    	eType: classClass,
    	lowerBound: 1,
    	upperBound: 1,
    	containment: false
    });


    cdClass.get('eStructuralFeatures').add(classesReference);
    classClass.get('eStructuralFeatures').add(associationsReference);
    associationClass.get('eStructuralFeatures').add(targetReference);

    var rs = Ecore.ResourceSet.create();
    // A Resource is used to load/save a model and also
    // handles de/serialization operations on a model

    var hello = rs.create({ uri: 'classdiagram' });

    // Add the EPackage to the Resource
    hello.get('contents').add(cdPackage);

    // Serialize the model in JSON
    console.log( JSON.stringify(hello.to(Ecore.JSON), null, 2) );

    //
    // Create instances
    //

    // We create three instances of the EClass Hello
    // Each instance is created by calling the method create.
    //
    // The method create is available on each EClass you created,
    // as well as on Ecore.
    // This method can be call in three different ways as shown below. Either
    // by calling it on the EClass with for parameter an object containing the
    // EAttribute you want to initialize or on Ecore itself with the EClass as first
    // parameter or part of the object parameter.
    var bookStore = cdClass.create({ id: 'book', name: "Book" });
    var authorClass = classClass.create({ name: "Author" });
    var bookClass = classClass.create({ name: "Book" });
    var orderClass = classClass.create({ name: "Order" });
    var hasBook = associationClass.create({ name: "hasBook" });
    var hasOrder = associationClass.create({ name: "hasOrder" });

    //h3.set('world', 'world 4');
    //console.log(h3.get('world'));


    // Set a reference between h1 and h2, h3.

    bookStore.get('classes')
        .add(authorClass)
        .add(bookClass)
        .add(orderClass);


    authorClass.get('associations').add(hasBook);
    bookClass.get('associations').add(hasOrder);
    hasBook.set('target', bookClass);
    hasOrder.set('target', orderClass);

    //console.log('h1 is closeTo', h1.get('closeTo').map(function(h) { return h.get('world'); }).join(', '));

    // Create a Resource for each instances.

    var r1 = rs.create({ uri: 'h1' });
    r1.get('contents').add(bookStore);


    // Serialize r1 to JSON

    var result = r1.to(Ecore.JSON);
    console.log( JSON.stringify(result, null, 2) );

    // The references to h2 and h3 are stored under the key $ref in JSON,
    // that could be resolved later during the parsing of that JSON data.

    //console.log(result.closeTo[0].$ref, result.closeTo[1].$ref);

};

classdiagram();