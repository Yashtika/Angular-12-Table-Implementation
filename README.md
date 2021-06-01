# Angular-12-Table-Implementation
This project has the following requirements- Table with View/Edit mode, Sorting, Paging, Filter.
Statement - Implement a table functionality that has two modes (View Mode and Edit Mode). Below are the requirement Details

Fields - Id, Name, Email, and Body (data for the same is available in the API response)

Features - 
Each column should be sortable.
Give a search box through which the user can filter the data (name, email, and body).
Pagination buttons to navigate between records.
Records Count (By selecting a number should update the number of records which are being displayed in the table).
Buttons - 
Edit Table: Place this button on the top right corner of the table and then once the user clicks it, all the fields should be converted to edit mode.
Cancel: This button is visible to the user only when the edit mode is active on the page. On click of this, the table gets converted/switched to normal mode.
API Details:
URL - https://jsonplaceholder.typicode.com/comments
Method - GET

Steps to download and run the application-
1. Download the zip / through git .
2. Open VSCode/Atom (or any other Editor as preferable) with the downloaded code as file location
3. Check if all the environmental variables are set and node & angular cli is installed
4. Run command- npm install
5. Run command- ng serve 
6. Open localhost:4200 and see the application running
