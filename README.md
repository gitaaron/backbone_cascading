The point of this project is to illustrate how to implement a postRender hook in a Backbone application.

A typical Backbone application will have many cascading views with parents and children.

ie/
    Root
        -> ChildOfRoot
            -> ChildOfChildOfRoot
                -> ChildOfChildOfChildOfRoot


A common problem is that after calling render on the leaf child view it will have no way of knowing when it has been added to the DOM.  This is necessary for certain independent third party libraries such as a wysiwyg because the third party library will only take an 'ID' attribute as a parameter and do the DOM selection by itself. 

The solution is to notify each child view once it has been added via a centralized mechanism (common base backbone view).
