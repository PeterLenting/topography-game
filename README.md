# Pro Cycling Trumps Game

## Introduction
This application is a simple, interactive and fun game to test someone's knowledge. The game basically consists of a image and a textfield. When typing in the right answer in the textfield, the image flips and the right answer is shown. There is also a possibility to ask for a hint.

![Responsive game](https://raw.githubusercontent.com/PeterLenting/second-milestone-project/master/images/mock-ups/responsive-game.png)

This specific version of the game uses images from Pro Cycling Trumps (PCT). PCT is a British concept which basically contains of simple but fitting drawings of pro cyclists on playing cards. Naturally other images can be used as well. 
The design of the game is also very suited for learning a language; the player than has to type in the name of the object the image shows in the language he or she is learning.

- [View the game here](https://peterlenting.github.io/pro-cycling-trumps-game/)

- [View the Github Repository here](https://github.com/PeterLenting/second-milestone-project)

## Contents table
1. [UX](https://github.com/PeterLenting/second-milestone-project#ux)
   - [What is it?](https://github.com/PeterLenting/second-milestone-project#what-is-it)
   - [Who is the target audience](https://github.com/PeterLenting/second-milestone-project#who-is-the-target-audience)
   - [Mock-ups](https://github.com/PeterLenting/second-milestone-project#mock-ups)
   - [User stories](https://github.com/PeterLenting/second-milestone-project#user-stories)
2. [Features]()
   - [Existing features](https://github.com/PeterLenting/second-milestone-project#existing-features)
   - [Features left to implement](https://github.com/PeterLenting/second-milestone-project#features-left-to-implement)
3. [Technologies used](https://github.com/PeterLenting/second-milestone-project#technologies-used)
4. [Testing](https://github.com/PeterLenting/second-milestone-project#testing)
   - [Resonsive testing](https://github.com/PeterLenting/second-milestone-project#responsive-testing)
   - [Manual testing](https://github.com/PeterLenting/second-milestone-project#manual-testing)
   - [Improvements after testing](https://github.com/PeterLenting/second-milestone-project#improvements-after-testing)
   - [Browsers](https://github.com/PeterLenting/second-milestone-project#browsers)
   - [Automated testing](https://github.com/PeterLenting/second-milestone-project#automated-testing)
5. [Deployment](https://github.com/PeterLenting/second-milestone-project#deployment)
   - [How to view the deployed version of this project](https://github.com/PeterLenting/second-milestone-project#how-to-view-the-deployed-version-of-this-project)
   - [How to run this project locally](https://github.com/PeterLenting/second-milestone-project#how-to-run-this-project-locally)
6. [Credits](https://github.com/PeterLenting/second-milestone-project#credits)
   - [Content](https://github.com/PeterLenting/second-milestone-project#content)
   - [Media](https://github.com/PeterLenting/second-milestone-project#media)
   - [Code](https://github.com/PeterLenting/second-milestone-project#code)
   - [Acknowledgements](https://github.com/PeterLenting/second-milestone-project#acknowledgements)
7. [Disclaimer](https://github.com/PeterLenting/second-milestone-project#disclaimer)

## UX

### What is it?
A clean, fast and well-arranged application, which gives the visitor a fun experience, an opportunity to upgrade their knowledge and to be interactive with, in this case, PCT. 
A single page application with a mobile first design. The game should be really simple and easy to play, but also fun and interactive.

### Who is the target audience? 
Anybody who likes to test their knowledge on any subject in a fun way is a member of the target audience.
In this specific case the target audience is the international pro cycling fan. People who know a little more about the pro peloton and like to test their knowledge. Maybe they are costumers of Pro Cycling Trumps. It doesn't really matter whether they are familiar with the concept yet, the game will make their involvement grow.

### Mock-ups
[Mock-up of the mobile version of the game](https://raw.githubusercontent.com/PeterLenting/second-milestone-project/master/images/mock-ups/mobile-mock-up-anonymus-rider.jpg).
[Mock-up of the desktop version of the game](https://raw.githubusercontent.com/PeterLenting/second-milestone-project/master/images/mock-ups/desktop-mock-up-name-and-flag.jpg)

As you can see there are some small diferences between the mock-up and actual game. On desktop I moved the aside to the right of the game, because it makes more sence to keep the actual game on the prominent left side. Besides that small changes are made to the lay-out. The yellow colour is chosen because yellow is the most iconic colour in cycling. It is the colour of the leadersjersey in the Tour de France. The darkblue and the orange contrast nicely and give the game a cheerfull look.

### User stories
As a player, I want:
1.	The ability to easily find and understand the controls of the game, so I can operate them easily.
2.	To have the feeling I either got conformation of my great knowledge or have really learned something.
3.	To get a feeling of real interaction while playing the game.
4.	To enjoy myself.
5.	To get recognition for my score, so I feel good or get stimulated to try again.
6.	To get no errors while playing the game, so I can really get into it.

## Features

### Existing features
**Who is this cyclist?** – The question this game is all about. What is the name of the cyclist shown in the image?

**How to play?**  – Allows the user to find out more **About the game** and how to play it. On mobile by clicking a button that will guide the user to the rules of the game. On desktop the information is shown on the right of the screen.

**Let's play** – Allows the user to start playing the game by clicking on the button that says 'Let's Play'. The first of 10 images will be shown.

**Image** –  Every image shows a professional (ex-)cyclist with a recognisable haircut and the shirt in which he was most successful. The lower part of the card contains the score of the cyclist on six important qualities on a scale from 0-100. Next to his head are the big prices he won. The pink jersey for the Giro, the yellow one for the Tour, the red one for La Vuelta and the Roman pillar for the Monuments. The name of the cyclist and his nationality normally stand in the gray area at the top of the card, but are erased for the purpose of the game.

**Textfield** – Allows the user to give an answer by typing in the name of the cyclist.

**Submit** – Allows the user to send in his answer and have it checked. If the answer is correct, the image flips and the name and nationality of the cyclist are shown in the image. Beneath the image the message 'Yes, that's him!' is shown. If the answer is wrong, the image is blurred and the user gets the option to **Give Up** or to **Try Again**. After two wrong answers the message 'Sorry, no score' shows and no points are added to the **Score**.

**Give me a hint** – Allows the user to get a little help in finding the right answer by clicking the button that says 'Give me a Hint'. The image flips and the flag of the nation the cyclist comes from appears. 

**Try again** – Allows the user to try again after giving a first wrong answer. The image *unblurs*.  

**Give up** – Allows the user to give up by clicking the button that says 'Give Up'. The image flips and the right answer is shown, together with the message: 'Sorry, no score'.

**Next challenge** – Allows the user to go to the next image by clicking on the button that says 'Next Challenge'. After 10 rounds the button leads the user to his final score.

**Round** – Allows the user to see in which of the 10 rounds he is at any moment during the game by looking in the input-field beneath 'ROUND'.

**Score** – Allows the user to see his score at any moment during the game by looking in the input-field field beneath 'SCORE'. On every round: if the first answer is right, three points will be added. A hint and a wrong answer cost one of those three points. After two wrong answers no points will be added.

**Your Score** – Allows the user to see his final score by looking in the input-field next to 'Your Score' on the endpage.'

**Score comment** – Allows the user to see a comment on his score. This varies from 'Maybe you should try again?' to 'You're a true champion'.

**Play again** – Allows the user to play the game again by clicking on the button that says 'Play Again.

**Footer** - Contains links to the social pages of Pro Cycling Trumps: Facebook, Instagram, Youtube and Twitter.

### Features left to implement
1.	Difficulty level 
It would be nice to make the game for two or three levels of difficulty. This could be done by entering less well-known cyclists in the game. Allowing only one wrong answer, instead of two is also a possibility. As is a timelimit.

2.	Timelimit
By adding a timelimit, the game might get a bit more exciting. This could be done by giving more points for a fast answer, or only by giving the player just a certain amount of time to answer. 

3.	Different subjects
In the current game the images are of the biggest icons of pro cyclings history. In this line there could also be a version with current cyclists, male and female. Or of former Tour de France or Tour of Flanders winners. The possibilities are endless.
As said the images could be of any subject. From learning a language, to famous movie-posters, to ex-presidents, to car-models. Anything is possible.

4.	Share and invite buttons
By making it possible for players to share their score with their friends through social media and invite them to play the game, the involvement and the fun will grow even more.

5.	Build an app
To make the mobile experience more impressive an app should be built for the game.

6. Sound and movement
To make the game more fun, it would be nice to have some soundeffects and moving features. When a right answer is given the user gets an applaus for example. And when the user gets a new highscore, a cyclist pops a bottle of champagne. I choose not to do that for now, to keep the game really about the game and the testing of knowledge.

## Technologies used
•	HTML, CSS, and JavaScript.

•	IDE: [Cloud9](https://aws.amazon.com/cloud9/?hp=tile&so-exp=below) but was forced to switch to [Visual Code Studio](https://code.visualstudio.com/) since the Cloud9 service of Amazon is impossible to work with.

•	[Bootstrap](https://getbootstrap.com/) for the grid system of the page.

•	[Google Fonts](https://fonts.google.com/) for the fonts.

•	[Font Awesome](https://fontawesome.com/) for the icons in the footer of the website.

•	[JQuery](https://jquery.com/) to simplify the JavaScript.

•	Paint to edit the images used.

•	Google Chrome developer tools.

•	Bash / Ubuntu to commit my project and to push it to Github.

•	[Github](https://github.com/) for version control and for users to view the deployed version of the website.

## Testing

### Responsive testing
The responsiveness of the page was tested at all times during the development of the game. Locally as well as on GITHUB pages using Chrome developer tools. 

### Manual testing

I played the game myself and had other people playing it as well during the development. This is a reliable way of discovering whether everything works as it should. 

**How to play?**

Click the 'How to play?'-button
See whether you're being scrolled down to 'About the Game'

**Back to the game**

Click the 'Back to the game'-button
See whether you're being scrolled up to 'Who is this Cyclist?'.

**Let's play**

Click the 'Let's Play'-button
See whether the game starts: first image is shown without name and flag. 
Beneath the image the input-field, submit-button, hint-button, 'Round' and 'Score' are shown. 

**Right answer**

Give the right answer
Click the 'Submit'-button
See whether the image flips and the name of the cyclist and the flag of his nation is shown. 
The message 'Yes, that's him!' should appear, and under that the 'Next Challenge'-button should be shown. 
'Score' should be raised by three.

**Wrong answer (1. Wrong cyclist)**

Type in the name of another cyclist in the game
Click the 'Submit'-button
See whether image blurs and the 'Nope, that's not him'-message, the 'Try Again'-button and the 'Give Up'-button appear.

**Try Again**

Click the 'Try Again'-button
See whether the image unblurs and the input-field, 'Submit'-button, 'Hint'-button, 'Round' and 'Score' are shown
Type in the name of another cyclist in the game 
Click the 'Submit'-button
See whether the name of the cyclist and the flag of his nation is shown, together with the 'Sorry, no score'-message and the 'Next Challenge'-button 
And see that there is 0 added to 'Score'.

**Give Up**

See whether the image flips and the name of the cyclist and the flag of his nation is shown, together with the 'Sorry, no score'-message and the 'Next Challenge'-button. And see that there is 0 added to 'Score'.

**Wrong answer (2. Random Letters)**

Type in some random letters (not the name of another cyclist in the game).
Click the 'Submit'-button.
See whether image blurs and the 'Nope, that's not him'-message, the 'Try Again'-button and the 'Give Up'-button appear.

**Try Again**

Click the 'Try Again'-button.
See whether the image unblurs and the input-field, 'Submit'-button, 'Hint'-button, 'Round' and 'Score' are shown.
Type in the name of another cyclist in the game. 
Click the 'Submit'-button.
See whether the name of the cyclist and the flag of his nation is shown, together with the 'Sorry, no score'-message and the 'Next Challenge'-button. 
And see that there is 0 added to 'Score'.

**Give Up**

See whether the image flips and the name of the cyclist and the flag of his nation is shown, together with the 'Sorry, no score'-message and the 'Next Challenge'-button. 
And see that there is 0 added to 'Score'.

**Get hint**

Click the 'Give me a Hint'-button
See whether the image flips and the flag of the cyclists home country is shown and the 'Hint'-button is hidden.
Type in the name of another cyclist in the game.
Click the 'Submit'-button.
See whether image blurs and the 'Nope, that's not him'-message, the 'Try Again'-button and the 'Give Up'-button appear. 

**Try Again**

Click the 'Try Again'-button
See whether the image *unblurs* and the input-field, 'Submit'-button, 'Round' and 'Score' are shown.
Type in the name of another cyclist in the game 
Click the 'Submit'-button
See whether the name of the cyclist and the flag of his nation is shown, together with the 'Sorry, no score'-message and the 'Next Challenge'-button. 
And see that there is 0 added to 'Score'.

**Next Challenge**

Check whether the input-field, 'Submit'-button, 'Hint'-button, 'Round' and 'Score' are shown.
Check whether a new image is shown without the name and the nation of the cyclist. 
The cyclist should not have been displayed before. Every cyclist in the game (10 in total) should only be shown once.

**Scorebord**

Give a good answer and see whether three points are added to 'Score'. 
Ask for a hint, then give the right answer and see whether two points are added to 'Score'.
Give a wrong answer, then give the right answer and see whether two points are added to 'Score'.
Ask for a hint, give a wrong answer, then give a right answer and see whether one point is added to 'Score'.
Give a wrong answer, ask for a hint, then give a right answer and see whether one point is added to 'Score'.
Ask for a hint, give a wrong answer, give another wrong answer and see whether zero points are added to 'Score'.
Give a wrong answer, ask for a hint, give another wrong answer and see whether zero points are added to 'Score'.
Give a wrong answer, give another wrong answer and see whether zero points are added to 'Score'.

**Play again**

Game should start again. 
Startscreen should be shown and every image can be shown again if the player clicks the 'Let's Play!'-button.

### Improvements after testing
•   Walking through the game the first time, I noticed it would be really easy to find the answer in Google Chrome developer tools or by rightclicking the image, if I had the name of the cyclist in the name of the image. So I decided to give every image a number instead.

•   A bug that came up in the end after I had made some adjustments to the rungame()-function was that the names of all the cyclists in the game were seen as correct on all images. This of course was not the way the game is intended. I fixed this by making indexOf() a Boolean by adding '> -1'. 

•   It was possible to adjust 'Round' and 'Score' manually. This of course was not the intention and is fixed by making the input 'readonly'.

•   It turned out cyclist-14- empty.png was the same image as cyclist-14.png. This was of course changed, so cyclist-14-empty.png was indeed without the name and the nation of the cyclist.

### Browsers
The game was tested in Chrome, Internet Explorer and Firefox. In Internet Explorer the blur-class doesn't work. As this is not an essential part of the game and IE is only used by [8% of the users](https://www.w3counter.com/globalstats.php), I decided to leave it as it is.

### Automated Testing
The following **validation services** were used to check the validity of the code:

•	W3C Markup Validation Service was used to validate HTML.

•	W3C CSS validation was used to validate CSS.

•	JSHint was used to validate JavaScript.

Eventhough we only had one lesson, I really wanted to test my game using Jasmine. It turned out that one lesson wasn't nearly enough to make that possible and even the tutors of Code Institue weren't able to help me out. For this reasson I decided to ask some more people to play, and that way, test the game manually.

## Deployment
The project was built using Cloud9 and Visual Studio Code. I committed the project and pushed it up to Github using Bash.
During the development of the game, there were some issues with AWS / Cloud9. As one of the consequences it was required to push minor updates to github to make them visible for the Code Institute Tutors. This of course is not realistic for a project in real live, but does mean that some of the commits in the repository are only done for the tutors and would not have been done if this was a 'real' project.

### How to view the deployed version of this project
Log in to Github
1. Select PeterLenting/game from the list of repositories.
2. Select Settings from the navbar near the top of the page.
3. Scroll down to where it says 'Github Pages', go to the subtitle labelled 'Source', click it and  change the source to 'master branch'.
4. The page is then automatically refreshed and ready for deployment. It can take up to 10 minutes for it to be viewable.
5. Scroll back down to the GitHub Pages section to retrieve the link to the deployed website.

### How to run this project locally
To clone this project from GitHub:
1.	Follow this link to the [Game Repository](https://github.com/PeterLenting/second-milestone-project)
2.	Under the repository name, click 'Clone or download'.
3.	In the Clone with HTTPs section, copy the clone URL for the repository.
4.	In your local IDE open Git Bash.
5.	Change the current working directory to the location where you want the cloned directory to be made.
6.	Type git clone, and then paste the URL you copied in Step 3.
git clone https://github.com/USERNAME/REPOSITORY
7.	Press Enter. Your local clone will be created.

## Credits

### Content
All the content on the website was written by me.

### Media
The images I used are made and owned by Pro Cycling Trumps. PCT doesn't know I'm using their cards as an example, but after I finish the game I plan on showing them.

### Code
I wrote all the code myself, with help and inspiration from StackOverflow.com. Questions and answers on that side pointed me in the right direction more than once. The Code Institute tutor-team also helped me understand why sometimes some code wasn't working.

### Acknowledgements
I would like to thank fellow student Rik Duijm for discussing ideas and playing the game, a lot.

## Disclaimer
The content of this website is for educational purposes only.