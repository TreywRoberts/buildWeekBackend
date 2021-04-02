Hey this a functional backend for a food truck application to find and favorite food trucks in you area
The backend sight is located at https://git.heroku.com/unit4-buildweek.git and can be called useing the following html

    REGISTER & LOGIN INFO
    [POST]/auth/register - to register a new user you must include a user_username, user_password, user_email in the body.
    [POST]/auth/login -login with a pre exsiting user using user_username and user_password

    USERS INFO 
    [GET]/user/- gets an array of all users.
    [GET]/user/:user_id returns an user object that includes favorite trucks or trucks owned if they are an operator.

    TRUCK INFO
    [GET]/trucks -returns all trucks in the database
    [GET]/trucks/:truck_id - returns a single truck object based on ID
    [POST]/trucks - in order to create a truck you must include truck_name, cuisine_type, and user_id in the body
    [PUT]/trucks/:truck_id - in order to update a truck you must include truck_name, cuisine_type, and user_id in the body
    [DELETE]/trucks/:truck_id - will delete truck with the current id from database

    FAVORITE INFO
    [POST]/trucks/:truck_id/favorites - in order to create a favorite truck you must include truck_name and user_id in the body
    [DELETE]/trucks/:truck_id/favorites/favorites:id - will delete favorite truck with the current id from database
    
    MENU INFO
    [POST]/menu - in order to create a menu item you must include menu_name, menu_description, menu_price, and truck_id in the body
    [PUT]/menu/:menu_id - in order to update a menu item you must include menu_name, menu_description, menu_price, and truck_id in the body
    [DELETE]/menu/:menu_id - will delete menu item with the current id from database


    
    
