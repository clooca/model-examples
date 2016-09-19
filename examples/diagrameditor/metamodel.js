{
    "eClass": "ecore#//EPackage",
    "name": "DiagramEditor",
    "nsURI": "http://clooca.com/diagrameditor",
    "nsPrefix": "diagrameditor",
    "eClassifiers": [{
        "eClass": "ecore#//EClass",
        "name": "Diagram",
        "abstract": false,
        "interface": false,
        "eStructuralFeatures": [{
            "eClass": "ecore#//EReference",
            "name": "nodes",
            "eType": {
                "$ref": "//Node",
                "eClass": "ecore#//EClass"
            },
            "ordered": true,
            "unique": true,
            "lowerBound": 0,
            "upperBound": "-1",
            "containment": true
        }, {
            "eClass": "ecore#//EReference",
            "name": "connections",
            "eType": {
                "$ref": "//Connection",
                "eClass": "ecore#//EClass"
            },
            "ordered": true,
            "unique": true,
            "lowerBound": 0,
            "upperBound": "-1"
        }]
    }, {
        "eClass": "ecore#//EClass",
        "name": "Node",
        "abstract": false,
        "interface": false,
        "eStructuralFeatures": [{
            "eClass": "ecore#//EReference",
            "name": "children",
            "eType": {
                "$ref": "//Node",
                "eClass": "ecore#//EClass"
            },
            "ordered": true,
            "unique": true,
            "lowerBound": 0,
            "upperBound": "-1"
        }, {
            "eClass": "ecore#//EReference",
            "name": "metaElement",
            "eType": {
                "$ref": "ecore#//EClass",
                "eClass": "ecore#//EClass"
            },
            "ordered": true,
            "unique": true,
            "lowerBound": 0,
            "upperBound": 1
        }, {
            "eClass": "ecore#//EReference",
            "name": "containFeature",
            "eType": {
                "$ref": "ecore#//EReference",
                "eClass": "ecore#//EClass"
            },
            "ordered": true,
            "unique": true,
            "lowerBound": 0,
            "upperBound": 1
        }]
    }, {
        "eClass": "ecore#//EClass",
        "name": "Connection",
        "abstract": false,
        "interface": false,
        "eStructuralFeatures": [{
            "eClass": "ecore#//EReference",
            "name": "metaElement",
            "eType": {
                "$ref": "ecore#//EClass",
                "eClass": "ecore#//EClass"
            },
            "ordered": true,
            "unique": true,
            "lowerBound": 0,
            "upperBound": 1
        }, {
            "eClass": "ecore#//EReference",
            "name": "containFeature",
            "eType": {
                "$ref": "ecore#//EReference",
                "eClass": "ecore#//EClass"
            },
            "ordered": true,
            "unique": true,
            "lowerBound": 0,
            "upperBound": 1
        }, {
            "eClass": "ecore#//EReference",
            "name": "sourceFeature",
            "eType": {
                "$ref": "ecore#//EReference",
                "eClass": "ecore#//EClass"
            },
            "ordered": true,
            "unique": true,
            "lowerBound": 0,
            "upperBound": 1
        }, {
            "eClass": "ecore#//EReference",
            "name": "targetFeature",
            "eType": {
                "$ref": "ecore#//EReference",
                "eClass": "ecore#//EClass"
            },
            "ordered": true,
            "unique": true,
            "lowerBound": 0,
            "upperBound": 1
        }]
    }]
}