FRONTEND

website : collection of web pages
Example: super set , Amazon

webpages : collection of HTML and its components

Browser | web: where we open websites | collection of websites

Internet : Connection of networks

Browser + Internet = Access web (Ex : Chrome , Brave , Arc)

Frontend: (Client Side)UI part only in browser
API : Application programming Interface : It is a medium acts between 2 services | Bridge btw 2 services

URL is a mediator
URL : Uniform Resource Locator
It will locate the resource over internet
URL will gather request from frontend and backend

Customer -> Request -> URL -> Request -> Server
Customer <- Response <- URL <- Response <- Server

Backend : Brain of the application combination of server and database(Server + Database)

HTTP - Hyper Text Transfer Protocol

https - if it is sercured we use https
http - if it is not secured we use http

https://lpu.in/dashboard?user="shannu"&password="#2345"
protocol://domain:port/path?query#fragment

lpu - >brand
in -> Country based domain(Indian)
/ -> current page(index.html)
? -> Query Starting from here (Query) -> query operator
& -> if we send 2 or data in url

DNS -> Domain Name System : Convert domain into IP address
domain -> IP

Protocol : Set of rules & regulations how to send request to frontend and backend

ping website name

FRONTEND

HTML - HYPER TEST MARKUP LANGUAGE -> version : 5
CSS - CASCADE STYLE SHEET -> version : 3
JS - JAVA SCRIPT -> version : ES25 | ES16

HTML : combination of tags and attribute
it is used to create the structre of the web pages

HYPER TEXT : it is not a normal text
(behavior) (navigate to other properties)

MARKUP LANGUAGE
(pre defined tags | meanings) (medium of communication)
<tag> </tag>

head -> to provide information on browser (meta data to browser)
body -> display on browser(content to be displayed)

SEO - serach Engine Optimization : weather it will fullfill my requirements or not
ranking the webpage while searching

Tag in HTML
Struture meaning
1.paired tag 1.Semantic tag
2.unpaired tag 2.non-semantic tag

1. Paired Tags (Container Tags) : Tags that have both opening and closing tags.

Example:

<p>This is a paragraph</p>
<div>Container</div>
<!-- <h1>Heading</h1> -->

🔹 Use Cases:
Wrapping content
Structuring web pages
Styling with CSS

2. Unpaired Tags (Self-closing / Void Tags) : Tags that don’t need a closing tag

Examples:
<br>

<hr>
<!-- <img src="image.jpg"> -->
<!-- <input type="text"> -->

🔹 Use Cases:
Line breaks → <br>
Images → <img>
Inputs in forms → <input>
Horizontal lines → <hr>

3. Semantic Tags : Tags that clearly describe the meaning of content

Examples:

<header>
<nav>
<section>
<article>
<footer>
<main>

🔹 Use Cases:
Improves SEO
Helps screen readers (accessibility) -> Blind people
Makes code readable and structured

4. Non-Semantic Tags : Tags that don’t describe content meaning, only used for layout or styling

Examples:

<div>
<span>

🔹 Use Cases:
Grouping elements
Styling with CSS
Layout building

Heading : Provide heading in website
h1 -> h6
boldness and size decreases from h1 to h6

<p> paragraph
<strong> for bold (semantic)
<b> non semantic

<i> for italic (non semantic)
<em> for itaic (semantic)

<mark> for colour (yellow)(non semantic)
<span backgroung colour> (semantic)

<section> is a semantic way
<div> <span> non semantic (containers)

<aside> info present in side

<header> The <header> is used to define the top section of a webpage or a section, usually containing introductory content.
<section> contain info about org and many more things.
<footer>The <footer> is used to define the bottom section of a webpage or section, usually containing concluding or additional information.
tags : predefined names

attributes : properties(additional information to the tags) that are provided to the tags

types of attributes :

1. Global attributes : this attributes are applied on each and every tags
   eg : id, class, style, hidden, title, tabindex, contenteditable, draggable, dropzone
   a) id : it is used to give the unique id to the tags, takes only 1 value
   b) class : it is used to put tags in a class and it can same , can take multiple values with space like paragraph
   c)style : to give inline styling
   d)contenteditable : it is used to edit the content
   e)tabindex : it is used to add tab to the tag
   f)draggable : it is used to drag and drop it is used with javascript
   g)hidden: it is used to disapear html tags

   Title Tag Vs Title Attribute
   Title tag : provide title to web page and will reflect title on browser
   Title attribute : additional info of anyhting like para(inside any opening tag) provide title to text and hover over particular content

2. Core attributes: this are important attributes that is used by each and every html tag
   eg : id,class , style

3. tag|element specific attribute : Combination of tag , attribute and content is called element(mentioned inside tag)
   eg : src , href , type , action , placeholder
   1)src : accepted by only image (path of the image)
   2)href : for navigating to other pages(anchor tag)
   3)type : specify input type

4. internalization attribute : all the content should be in english | global role that are specifying total html page
   eg : lang : (to mention language to the html)
   dir : direction of writing code format | content

5. custom attribute : can able to create own attribute .
   with the help of js we acknowledge what should be done in attribute
   eg : data-attributename

Browser changes the html file to doc type -> Document object

List : Collection of Items

(pair tag)Unordered List : It doesn't follow any order
types (To customize your list items): disc(default) , circle , square , none

Ordered List : It follows a certain order
types(numbers,captial alphabets , smaller alphabets , upper roman, lower roman , type start , reversed)

Description List : Describes about the item

reversed : it is used to reverse

nested list : List inside a list

Table : structured representation of data
row - horizontals
column - verticals

<table> to create table
<tr> to create row
<th> column represents  headings
<td> column represents data
<colspan> to merge 2 or more columns in a single row
<rowspan> to merge 2 or more rows

Combining tables rows | parts of table | groups the rows

<thead> : header parts
<tboby> :
<tfoot> :

should be before thead | combining columns
colgroup <colgroup>

<col style = "background-color : ">
span = "1"

caption = to give heading of table
bgcolor = background color
rules = "rows" merges rows
rules = "col" mergers columns
cellspacing : providng some space between cells
cell padding : space inside cells
align : aligns data in center , left , right

Form : collection the data from user and sends to server
C - Create
R - Read
U - Update
D - Delete
Form -> URL -> Server -> Database

<form> : to create form in html
if we not use form tag we cannot send data to server
titles are labels in forms

label tag : it is used to provide the title to input field.
id : to build relation btw label and input (same name as label)
name : grouping all the data

password will be encrypted before going to server

<file> to upload file
<date> will help you provide the date
<time> we can set time

date and time used to login | logout or any other

<datetime-local> combination of both date and time
<email> type will see wheather the email is valid or not by certain conditions

-> In display flex we have 2 major

justify-content

Controls alignment along the main axis (default = horizontal in flex-direction: row)

Common values:

flex-start → items at the start
flex-end → items at the end
center → items centered
space-between → equal space between items
space-around → equal space around items
space-evenly → equal space everywhere

Use when: You want to move items left ↔ right (in row layout)

align-items

Controls alignment along the cross axis (default = vertical in flex-direction: row)

Common values:

flex-start → top
flex-end → bottom
center → vertical center
stretch → stretch to fill container
baseline → align text baselines

Use when: You want to move items up ↕ down
