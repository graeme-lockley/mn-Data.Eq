//- The class `Eq` defines equality `(==)` and inequality `(!=)` on all non-native data-types.
//-
//- ```haskell
//- class Eq a where
//-     (==) :: a -> a -> Bool
//-     (!=) :: a -> a -> Bool
//-     (!=) x y =
//-         ! ((==) x y)
//- ```
//-
//- As can be seen from the above definition it is not only necessary to define `(==)` for a new datatype.


//- Adds the methods `$EQUAL$EQUAL` and `$NOT$EQUAL` onto the passed concrete class.  The only function that
//- it extracts out of the second parameter is `$EQUAL$EQUAL` - `$NOT$EQUAL` is automatically added.
//= implements :: Class a -> { $EQUAL$EQUAL :: a -> a -> Bool } -> Eq a
const extend = concreteClass => operations => {
    concreteClass.prototype.$EQUAL$EQUAL = function(other) {
        return operations.$EQUAL$EQUAL(this)(other);
    };
    concreteClass.prototype.$NOT$EQUAL = function(other) {
        return !this.$EQUAL$EQUAL(other);
    };
};


module.exports = {
    extend
};