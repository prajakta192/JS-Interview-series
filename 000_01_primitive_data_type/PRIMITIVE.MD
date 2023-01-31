## JS Primitive data type

**In js primitive data types are type that are not an object & has no methods or property.**
***Primitive values are immutable. i.e. once assigned they can't be changed.***

^Primtive value don't have their own methods. when property's or method's are accessed on primitive
JS implicitly wrap them inside ***String*** wrapper object & calls on that object.

e.g 'Mozilla'.includes('Moz);  JS implicitly creates ***String*** wrapper object & calls includes method on that object.
String.prototype.includes()
