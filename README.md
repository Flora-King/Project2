# Fancy Trivia

The Fancy Trivia website is a simple and fun website aimed at users who want to test their general knowledge.

This website provides an opportunity for users to test as well as challenge their general knowlege while having fun at the same time.

The live website can be found here [Fancy_Trivia]:https://flora-king.github.io/Portifolio-Project-2/

# Features

![Website_mockup_page1](https://user-images.githubusercontent.com/106548101/215330824-a5d1a28f-c181-447a-9f9b-7314d9017187.png)
![Website_mockup_page2](https://user-images.githubusercontent.com/106548101/215330895-6f650691-201a-4898-9360-a79354089d57.png)

## Navigation

* The Fancy Trivia website has two pages both linked via the 'Start Quiz' button on the home page and the 'Finish' button on the quiz page.

## Home Page

* The Home page has a simple layout with a welcome message to the user.
* The user is directed to start the quiz by clicking on the 'Start Quiz' button.

![Home_Page](https://user-images.githubusercontent.com/106548101/215344102-f7883865-901b-4365-963e-8fe43e15210d.png)

## Quiz Page 

* The quiz page displays the quiz rules and the quiz questions which are loaded progressively after the user selects and submits an answer. 
* At the end of the quiz, the user gets feedback on how their perfomance.
* And the user has an option to play again by reloading the quiz via the 'Reload Quiz' button or finish playing via 'Finish' button.

![Quiz_page](https://user-images.githubusercontent.com/106548101/215344001-7cf7d399-45a3-47fa-946a-66719ecacbe4.png)

## Features left to Implement
* When there is time, I would like to add more questions and a function to randomise the quiz questions loading a new set everytime the user hits the 
  Reload quiz button

# Testing

* Tested website perfomance and usability in different browsers i.e. Chrome, firefox and safari. 
* Tested website responsiveness on different device-sizes i.e. mobile, tablet and desktop.
* Tested the site navigation to ensure all buttons are visible, with consistent design and in working order on all pages.
* Tested all website content to ensure it is legible and without spelling or grammatical errors.
* I used lighthouse analysis report [on google developer tools] to validate that accessibility and performance are good for both pages

![ACCESSIBILITY](https://user-images.githubusercontent.com/106548101/215497827-89622a54-0e54-4847-9090-3345bc52c4f6.png)

## Bugs
### Solved bugs
* After deploying my website to github pages, the background images were not loading leaving the background bare. I discovered this was because my CSS    
  syntax for the background image was wrong. 
   * Instead of "background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(../images/page1.jpg);", 
  i had "background-image: linear-gradient(rgba (0,0,0,0.5), rgba(0,0,0,0.5)), url(Assets/images/page1.jpg);"

* I got several warnings advising that a lot of my javascript code was only available in ES6 (use 'esversion:6) or Mozilla JS extensions (use moz)", when i 
   added the JS code to JSHint for valitation.
   * To eliminate the warnings, i added the following JS hint comment '/*jshint esversion: 6 */' at the top of the javascipt code

### Unsolved bugs
* There are no unsolved bugs

# Validation Services

* HTML
    * I utilised the W3C Validator service to check for errors in the HTML code for both pages. No errors were returned

<img width="1199" alt="W3_HTML_Validator" src="https://user-images.githubusercontent.com/106548101/215342018-4e13e876-73f3-471d-8beb-3ca60a824539.png">
<img width="1199" alt="W3_HTML_Validator" src="https://user-images.githubusercontent.com/106548101/215342148-010378bf-abe6-4db5-a1b7-b0027289dc40.png">

* CSS
    * I utilised the official (Jigsaw) Validator service to check for errors in the CSS code for both pages. No errors were returned

<img width="1559" alt="W3_CSS_Validator" src="https://user-images.githubusercontent.com/106548101/215342252-6778561e-91c4-4655-997d-b12d7af3338b.png">
<img width="1559" alt="W3_CSS_Validator" src="https://user-images.githubusercontent.com/106548101/215342872-26262e55-1c80-4108-90e4-a00d9f90a63e.png">

* JAVASCRIPT
    * The javascript code remains without errors after several adjustments carried out during solution build process. 

![JSHint_Validation](https://user-images.githubusercontent.com/106548101/215343083-c9e3d59c-cf80-4400-b567-a558bbed1559.png)

# Deployment 

The Fancy Trivia website was deployed in GitHub under the repository name Portifolio-Project-2. 

* I created a github repository named Portifolio-Project-2 , and followed provided instructions to apply the Code institute template 
* Once the project finished rendering, i proceeded to write code in gitpod 

To publish/deploy my project, i followed these steps:
* Navigate to github
* Open project you want to publish/deploy
* Navigate to settings
* Open Github pages section
* Selected the [main] branch under source
* All done
* Click on the link to confirm website loads successfully

The live website can be found here [Fancy_Trivia website]: https://flora-king.github.io/Portifolio-Project-2/

# Credits
* Code Institute - mentor support was very helpful.
* Code Institure - Tutor support was very helpful.
* Reviewed and studied examples as well as documentation on W3schools website.
* Reviewed and studied examples on stack overflow website for code examples as well as solution issues/errors encountered similar to ones i was 
  encounterings.
* Watched/Studied various coding tutorials on www.youtube.com channels:- E.g.s Coding with Nick; and used their code as an example to build my own code
* The background images in this website were downloaded free from Pexels website.
* Utilised Google fonts as well as Chrome Developer tools to test and view website responsiveness.
* Used Lighthouse [from google's developer tools] to assess and generate accessibility reports mentioned above.
* Icons were copied and downloaded free from https://icons8.com/icons/set/favicon. 
* Used https://favicon.io/favicon-converter/ to convert the images to favicon icons.