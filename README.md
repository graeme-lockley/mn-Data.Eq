
The class `Eq` defines equality `(==)` and inequality `(!=)` on all non-native data-types.

```haskell
class Eq a where
    (==) :: a -> Bool
    (!=) :: a -> Bool
    (!=) y =
        ! this.(==)(y)
```

As can be seen from the above definition it is not only necessary to define `(==)` for a new datatype.

### implements

```haskell
implements :: Class a -> { $EQUAL$EQUAL :: a -> a -> Bool } -> Eq a
```

Adds the methods `$EQUAL$EQUAL` and `$NOT$EQUAL` onto the passed concrete class.  The only function that
it extracts out of the second parameter is `$EQUAL$EQUAL` - `$NOT$EQUAL` is automatically added.

