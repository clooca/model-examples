{
  "eClass": "ecore#//EPackage",
  "name": "ecore",
  "nsURI": "http://www.eclipse.org/emf/2002/Ecore",
  "nsPrefix": "ecore",
  "eClassifiers": [
    {
      "eClass": "ecore#//EClass",
      "abstract": false,
      "interface": false,
      "name": "EObject"
    },
    {
      "eClass": "ecore#//EClass",
      "abstract": true,
      "interface": false,
      "eSuperTypes": [
        {
          "$ref": "//EObject",
          "eClass": "ecore#//EClass"
        }
      ],
      "eStructuralFeatures": [
        {
          "eClass": "ecore#//EReference",
          "name": "eAnnotations",
          "eType": {
            "$ref": "//EAnnotation",
            "eClass": "ecore#//EClass"
          },
          "lowerBound": 0,
          "upperBound": -1,
          "containment": true
        }
      ],
      "name": "EModelElement"
    },
    {
      "eClass": "ecore#//EClass",
      "abstract": false,
      "interface": false,
      "eSuperTypes": [
        {
          "$ref": "//EModelElement",
          "eClass": "ecore#//EClass"
        }
      ],
      "eStructuralFeatures": [
        {
          "eClass": "ecore#//EAttribute",
          "name": "source",
          "eType": {
            "$ref": "//EString",
            "eClass": "ecore#//EDataType"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1
        },
        {
          "eClass": "ecore#//EReference",
          "name": "details",
          "eType": {
            "$ref": "//EStringToStringMapEntry",
            "eClass": "ecore#//EClass"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": -1,
          "containment": true
        }
      ],
      "name": "EAnnotation"
    },
    {
      "eClass": "ecore#//EClass",
      "abstract": true,
      "interface": false,
      "eSuperTypes": [
        {
          "$ref": "//EModelElement",
          "eClass": "ecore#//EClass"
        }
      ],
      "eStructuralFeatures": [
        {
          "eClass": "ecore#//EAttribute",
          "name": "name",
          "lowerBound": 0,
          "upperBound": 1,
          "eType": {
            "$ref": "//EString",
            "eClass": "ecore#//EDataType"
          }
        }
      ],
      "name": "ENamedElement"
    },
    {
      "eClass": "ecore#//EClass",
      "abstract": false,
      "interface": false,
      "eSuperTypes": [
        {
          "$ref": "//ENamedElement",
          "eClass": "ecore#//EClass"
        }
      ],
      "eStructuralFeatures": [
        {
          "eClass": "ecore#//EAttribute",
          "name": "nsURI",
          "eType": {
            "$ref": "//EString",
            "eClass": "ecore#//EDataType"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1
        },
        {
          "eClass": "ecore#//EAttribute",
          "name": "nsPrefix",
          "eType": {
            "$ref": "//EString",
            "eClass": "ecore#//EDataType"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1
        },
        {
          "eClass": "ecore#//EReference",
          "name": "eClassifiers",
          "eType": {
            "$ref": "//EClassifier",
            "eClass": "ecore#//EClass"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": -1,
          "containment": true
        },
        {
          "eClass": "ecore#//EReference",
          "name": "eSubPackages",
          "eType": {
            "$ref": "//EPackage",
            "eClass": "ecore#//EClass"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": -1,
          "containment": true
        }
      ],
      "name": "EPackage"
    },
    {
      "eClass": "ecore#//EClass",
      "abstract": true,
      "interface": false,
      "eSuperTypes": [
        {
          "$ref": "//ENamedElement",
          "eClass": "ecore#//EClass"
        }
      ],
      "name": "EClassifier"
    },
    {
      "eClass": "ecore#//EClass",
      "name": "EClass",
      "abstract": false,
      "interface": false,
      "eStructuralFeatures": [
        {
          "eClass": "ecore#//EAttribute",
          "name": "abstract",
          "lowerBound": 0,
          "upperBound": 1,
          "defaultValueLiteral": "false",
          "eType": {
            "$ref": "//EBoolean",
            "eClass": "ecore#//EDataType"
          }
        },
        {
          "eClass": "ecore#//EAttribute",
          "name": "interface",
          "lowerBound": 0,
          "upperBound": 1,
          "defaultValueLiteral": "false",
          "eType": {
            "$ref": "//EBoolean",
            "eClass": "ecore#//EDataType"
          }
        },
        {
          "eClass": "ecore#//EReference",
          "name": "eSuperTypes",
          "lowerBound": 0,
          "upperBound": -1,
          "containment": false,
          "eType": {
            "$ref": "//EClass",
            "eClass": "ecore#//EClass"
          }
        },
        {
          "eClass": "ecore#//EReference",
          "name": "eStructuralFeatures",
          "lowerBound": 0,
          "upperBound": -1,
          "containment": true,
          "eType": {
            "$ref": "//EStructuralFeature",
            "eClass": "ecore#//EClass"
          }
        },
        {
          "eClass": "ecore#//EReference",
          "name": "eOperations",
          "lowerBound": 0,
          "upperBound": -1,
          "containment": true,
          "eType": {
            "$ref": "//EOperation",
            "eClass": "ecore#//EClass"
          }
        },
        {
          "eClass": "ecore#//EReference",
          "name": "eAllStructuralFeatures",
          "lowerBound": 0,
          "upperBound": -1,
          "derived": true,
          "containment": false,
          "eType": {
            "$ref": "//EStructuralFeature",
            "eClass": "ecore#//EClass"
          }
        },
        {
          "eClass": "ecore#//EReference",
          "name": "eAllSuperTypes",
          "lowerBound": 0,
          "upperBound": -1,
          "derived": true,
          "containment": false,
          "eType": {
            "$ref": "//EClass",
            "eClass": "ecore#//EClass"
          }
        },
        {
          "eClass": "ecore#//EReference",
          "name": "eAllSubTypes",
          "lowerBound": 0,
          "upperBound": -1,
          "derived": true,
          "containment": false,
          "eType": {
            "$ref": "//EClass",
            "eClass": "ecore#//EClass"
          }
        },
        {
          "eClass": "ecore#//EReference",
          "name": "eAllAttributes",
          "lowerBound": 0,
          "upperBound": -1,
          "derived": true,
          "containment": false,
          "eType": {
            "$ref": "//EAttribute",
            "eClass": "ecore#//EClass"
          }
        },
        {
          "eClass": "ecore#//EReference",
          "name": "eAllReferences",
          "lowerBound": 0,
          "upperBound": -1,
          "derived": true,
          "containment": false,
          "eType": {
            "$ref": "//EReference",
            "eClass": "ecore#//EClass"
          }
        },
        {
          "eClass": "ecore#//EReference",
          "name": "eAllContainments",
          "lowerBound": 0,
          "upperBound": -1,
          "derived": true,
          "containment": false,
          "eType": {
            "$ref": "//EReference",
            "eClass": "ecore#//EClass"
          }
        },
        {
          "eClass": "ecore#//EReference",
          "name": "eAttributes",
          "lowerBound": 0,
          "upperBound": -1,
          "derived": true,
          "containment": false,
          "eType": {
            "$ref": "//EAttribute",
            "eClass": "ecore#//EClass"
          }
        },
        {
          "eClass": "ecore#//EReference",
          "name": "eReferences",
          "lowerBound": 0,
          "upperBound": -1,
          "derived": true,
          "containment": false,
          "eType": {
            "$ref": "//EReference",
            "eClass": "ecore#//EClass"
          }
        },
        {
          "eClass": "ecore#//EReference",
          "name": "eIDAttribute",
          "lowerBound": 0,
          "upperBound": 1,
          "derived": true,
          "containment": false,
          "eType": {
            "$ref": "//EAttribute",
            "eClass": "ecore#//EClass"
          }
        }
      ],
      "eOperations": [
        {
          "eClass": "ecore#//EOperation",
          "name": "getEStructuralFeature",
          "lowerBound": 0,
          "upperBound": 1,
          "eType": {
            "$ref": "//EStructuralFeature",
            "eClass": "ecore#//EClass"
          }
        }
      ],
      "eSuperTypes": [
        {
          "$ref": "//EClassifier",
          "eClass": "ecore#//EClass"
        }
      ]
    },
    {
      "eClass": "ecore#//EClass",
      "abstract": false,
      "interface": false,
      "eSuperTypes": [
        {
          "$ref": "//EClassifier",
          "eClass": "ecore#//EClass"
        }
      ],
      "name": "EDataType"
    },
    {
      "eClass": "ecore#//EClass",
      "abstract": true,
      "interface": false,
      "eSuperTypes": [
        {
          "$ref": "//ENamedElement",
          "eClass": "ecore#//EClass"
        }
      ],
      "eStructuralFeatures": [
        {
          "eClass": "ecore#//EReference",
          "name": "eType",
          "lowerBound": 0,
          "upperBound": 1,
          "containment": false,
          "eType": {
            "$ref": "//EClassifier",
            "eClass": "ecore#//EClass"
          }
        },
        {
          "eClass": "ecore#//EAttribute",
          "name": "ordered",
          "lowerBound": 0,
          "upperBound": 1,
          "defaultValueLiteral": "true",
          "eType": {
            "$ref": "//EBoolean",
            "eClass": "ecore#//EDataType"
          }
        },
        {
          "eClass": "ecore#//EAttribute",
          "name": "unique",
          "lowerBound": 0,
          "upperBound": 1,
          "defaultValueLiteral": "true",
          "eType": {
            "$ref": "//EBoolean",
            "eClass": "ecore#//EDataType"
          }
        },
        {
          "eClass": "ecore#//EAttribute",
          "name": "lowerBound",
          "lowerBound": 0,
          "upperBound": 1,
          "defaultValueLiteral": "0",
          "eType": {
            "$ref": "//EInt",
            "eClass": "ecore#//EDataType"
          }
        },
        {
          "eClass": "ecore#//EAttribute",
          "name": "upperBound",
          "lowerBound": 0,
          "upperBound": 1,
          "defaultValueLiteral": "1",
          "eType": {
            "$ref": "//EInt",
            "eClass": "ecore#//EDataType"
          }
        },
        {
          "eClass": "ecore#//EAttribute",
          "name": "many",
          "lowerBound": 0,
          "upperBound": 1,
          "eType": {
            "$ref": "//EBoolean",
            "eClass": "ecore#//EDataType"
          },
          "derived": true
        },
        {
          "eClass": "ecore#//EAttribute",
          "name": "required",
          "lowerBound": 0,
          "upperBound": 1,
          "eType": {
            "$ref": "//EBoolean",
            "eClass": "ecore#//EDataType"
          },
          "derived": true
        }
      ],
      "name": "ETypedElement"
    },
    {
      "eClass": "ecore#//EClass",
      "abstract": true,
      "interface": false,
      "eSuperTypes": [
        {
          "$ref": "//ETypedElement",
          "eClass": "ecore#//EClass"
        }
      ],
      "eStructuralFeatures": [
        {
          "eClass": "ecore#//EAttribute",
          "name": "changeable",
          "eType": {
            "$ref": "//EBoolean",
            "eClass": "ecore#//EDataType"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1
        },
        {
          "eClass": "ecore#//EAttribute",
          "name": "volatile",
          "eType": {
            "$ref": "//EBoolean",
            "eClass": "ecore#//EDataType"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1
        },
        {
          "eClass": "ecore#//EAttribute",
          "name": "transient",
          "eType": {
            "$ref": "//EBoolean",
            "eClass": "ecore#//EDataType"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1
        },
        {
          "eClass": "ecore#//EAttribute",
          "name": "defaultValueLiteral",
          "eType": {
            "$ref": "//EString",
            "eClass": "ecore#//EDataType"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1
        },
        {
          "eClass": "ecore#//EAttribute",
          "name": "defaultValue",
          "eType": {
            "$ref": "//JSObject",
            "eClass": "ecore#//EDataType"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1,
          "derived": true
        },
        {
          "eClass": "ecore#//EAttribute",
          "name": "unsettable",
          "eType": {
            "$ref": "//EBoolean",
            "eClass": "ecore#//EDataType"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1
        },
        {
          "eClass": "ecore#//EAttribute",
          "name": "derived",
          "eType": {
            "$ref": "//EBoolean",
            "eClass": "ecore#//EDataType"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1
        }
      ],
      "name": "EStructuralFeature"
    },
    {
      "eClass": "ecore#//EClass",
      "abstract": false,
      "interface": false,
      "eSuperTypes": [
        {
          "$ref": "//EStructuralFeature",
          "eClass": "ecore#//EClass"
        }
      ],
      "eStructuralFeatures": [
        {
          "eClass": "ecore#//EAttribute",
          "name": "iD",
          "eType": {
            "$ref": "//EBoolean",
            "eClass": "ecore#//EDataType"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1
        }
      ],
      "name": "EAttribute"
    },
    {
      "eClass": "ecore#//EClass",
      "abstract": false,
      "interface": false,
      "eSuperTypes": [
        {
          "$ref": "//EStructuralFeature",
          "eClass": "ecore#//EClass"
        }
      ],
      "eStructuralFeatures": [
        {
          "eClass": "ecore#//EAttribute",
          "name": "containment",
          "eType": {
            "$ref": "//EBoolean",
            "eClass": "ecore#//EDataType"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1
        },
        {
          "eClass": "ecore#//EAttribute",
          "name": "container",
          "eType": {
            "$ref": "//EBoolean",
            "eClass": "ecore#//EDataType"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1
        },
        {
          "eClass": "ecore#//EAttribute",
          "name": "resolveProxies",
          "eType": {
            "$ref": "//EBoolean",
            "eClass": "ecore#//EDataType"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1
        },
        {
          "eClass": "ecore#//EReference",
          "name": "eOpposite",
          "eType": {
            "$ref": "//EReference",
            "eClass": "ecore#//EClass"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1
        }
      ],
      "name": "EReference"
    },
    {
      "eClass": "ecore#//EClass",
      "abstract": false,
      "interface": false,
      "eSuperTypes": [
        {
          "$ref": "//ETypedElement",
          "eClass": "ecore#//EClass"
        }
      ],
      "eStructuralFeatures": [
        {
          "eClass": "ecore#//EReference",
          "name": "eParameters",
          "eType": {
            "$ref": "//EParameter",
            "eClass": "ecore#//EClass"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": -1,
          "containment": true
        }
      ],
      "name": "EOperation"
    },
    {
      "eClass": "ecore#//EClass",
      "abstract": false,
      "interface": false,
      "eSuperTypes": [
        {
          "$ref": "//ETypedElement",
          "eClass": "ecore#//EClass"
        }
      ],
      "name": "EParameter"
    },
    {
      "eClass": "ecore#//EClass",
      "abstract": false,
      "interface": false,
      "eSuperTypes": [
        {
          "$ref": "//EDataType",
          "eClass": "ecore#//EClass"
        }
      ],
      "eStructuralFeatures": [
        {
          "eClass": "ecore#//EReference",
          "name": "eLiterals",
          "eType": {
            "$ref": "//EEnumLiteral",
            "eClass": "ecore#//EClass"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": -1,
          "containment": true
        }
      ],
      "name": "EEnum"
    },
    {
      "eClass": "ecore#//EClass",
      "abstract": false,
      "interface": false,
      "eSuperTypes": [
        {
          "$ref": "//ENamedElement",
          "eClass": "ecore#//EClass"
        }
      ],
      "eStructuralFeatures": [
        {
          "eClass": "ecore#//EAttribute",
          "name": "literal",
          "eType": {
            "$ref": "//EString",
            "eClass": "ecore#//EDataType"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1
        },
        {
          "eClass": "ecore#//EAttribute",
          "name": "value",
          "eType": {
            "$ref": "//EInt",
            "eClass": "ecore#//EDataType"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1
        }
      ],
      "name": "EEnumLiteral"
    },
    {
      "eClass": "ecore#//EClass",
      "name": "EStringToStringMapEntry",
      "abstract": false,
      "interface": false,
      "eStructuralFeatures": [
        {
          "eClass": "ecore#//EAttribute",
          "name": "key",
          "eType": {
            "$ref": "//EString",
            "eClass": "ecore#//EDataType"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1
        },
        {
          "eClass": "ecore#//EAttribute",
          "name": "value",
          "eType": {
            "$ref": "//EString",
            "eClass": "ecore#//EDataType"
          },
          "ordered": true,
          "unique": true,
          "lowerBound": 0,
          "upperBound": 1
        }
      ]
    },
    {
      "eClass": "ecore#//EDataType",
      "name": "EString"
    },
    {
      "eClass": "ecore#//EDataType",
      "name": "EBoolean"
    },
    {
      "eClass": "ecore#//EDataType",
      "name": "EInt"
    },
    {
      "eClass": "ecore#//EDataType",
      "name": "EDouble"
    },
    {
      "eClass": "ecore#//EDataType",
      "name": "EDate"
    },
    {
      "eClass": "ecore#//EDataType",
      "name": "EShort"
    },
    {
      "eClass": "ecore#//EDataType",
      "name": "EFloat"
    },
    {
      "eClass": "ecore#//EDataType",
      "name": "ELong"
    },
    {
      "eClass": "ecore#//EDataType",
      "name": "JSObject"
    }
  ]
}