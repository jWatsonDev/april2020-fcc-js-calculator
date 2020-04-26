import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import CodeSlide, { Themes } from './Components/CodeSlide';

import {
	Deck,
	Slide,
	Appear,
	CodePane,
	FlexBox,
	Box,
	Image,
	Heading,
	ListItem,
	OrderedList,
	Quote,
	Text,
	UnorderedList,
	Grid,
	Notes,
	FullScreen,
	Progress,
	Markdown,
	Link,
	createTheme
} from 'spectacle';

import Logo from './assets/images/fcc.svg';
import VSCode from './assets/images/vscode.png';
import GitHub from './assets/images/github.png';

const theme = {

};

const FillBox = styled(Box)`
	flex: 1;
	text-align: ${props => props.textAlign ? props.textAlign : 'left'};
`;

const ListItemLogo = styled.img`
	width: 2.5em;
	height: auto;

	&.github{
		border-radius: 100%;
		background-color: white;
		border: 1px solid white;
	}
`;

const template = () => (
	<FlexBox
		justifyContent="space-between"
		position="absolute"
		bottom={0}
		width={1}
	>
		<FillBox padding="0 1em">
			<FullScreen />
		</FillBox>
		<FillBox>
			<Text fontSize="1em" bold color="#808080" textAlign="center" margin="8px">
				<span style={{ color: '#505050' }}>Author:</span> Jay Watson | Template: <a href="https://www.braedin.com/" target="_blank" style={{ color: '#505050' }}>Braedin.com</a>
			</Text>
		</FillBox>
		<FillBox padding="0 1em" textAlign="right">
			<Progress />
		</FillBox>
	</FlexBox>
);

const Presentation = () => (
	<Deck loop theme={theme} template={template}>
		<Slide backgroundColor="#0a0a23">
			<Heading size={1}>
				<Image src={Logo} width="100%" />
			</Heading>
			<Heading size={1} fit caps color="white">
				April 2020: JavaScript Calculator
			</Heading>
			<Link target="_blank" href="https://github.com/jWatsonDev/jWatsonDev-feb-fcc-css-basics-and-flexbox">
				<Text fontSize="1.5em" bold caps color="white">
					View on Github
				</Text>
			</Link>
			<Link target="_blank" href="https://codepen.io/">
				<Text fontSize="1.5em" bold caps color="white">
					If you don't have CodePen, signup please 🙏
				</Text>
			</Link>
			<Text fontSize="1em" bold color="#505050">
				Navigate with arrows
			</Text>
			<Notes>Let's get started!</Notes>
		</Slide>
		<Slide backgroundColor="#0a0a23">
			<Heading size={1} caps fit color="primary">The Foundations</Heading>
			<OrderedList>
				<ListItem>
					HTML - Hyper Text Markup Language - Skeleton
				</ListItem>
				<br />
				<ListItem>
					CSS - Cascading Style Sheets - Make Up
				</ListItem>
				<br />
				<ListItem>
					JS - JavaScript - Muscle
				</ListItem>
			</OrderedList>
		</Slide>
		<Slide backgroundColor="#0a0a23">
			<Heading size={1} caps fit color="primary">A JS Calculator</Heading>
			<UnorderedList>
				<ListItem>
					<Text>Clone this <a href="https://codepen.io/jwatson2pt0/pen/RwWpXNM" target="_blank" style={{ color: '#fff' }}>"Starter" JS Calculator CodePen</a>
					</Text>
				</ListItem>
				
				<ListItem>
					<Text>
					<a href="https://codepen.io/jwatson2pt0/pen/KKdWjyr" target="_blank" style={{ color: '#fff' }}>"Completed" JS Calculator CodePen</a> - Don't look at this yet!
					</Text>
				</ListItem>
			</UnorderedList>
		</Slide>

		<CodeSlide
			backgroundColor={"#0d1d2e"}
			theme={Themes.dracula}
			lang="html"
			code={require("raw-loader!./assets/examples/js-calculator/index.example").default}
			ranges={[
				{ loc: [0, 44], title: "HTML - starter stuff" },
				{ loc: [0, 44], backgroundColor: "#223b57", note: "Nothing special..." },
				{ loc: [0, 44], backgroundColor: "#223b57", note: "Just some input buttons. Note the values...we'll be using those!" },
				{ loc: [0, 44], backgroundColor: "#223b57", note: "Moving on..." }
			]} />

		<CodeSlide
			backgroundColor={"#0d1d2e"}
			theme={Themes.dracula}
			lang="css"
			code={require("raw-loader!./assets/examples/js-calculator/styles.example").default}
			ranges={[
				{ loc: [0, 500], title: "CSS - We're going for decent!" },
				{ loc: [0, 5], backgroundColor: "#223b57", note: "With these variables, we can control our theme in one place. I used the colormind generator to get them. As I said, we are going for decent. Feel free to make them whatever you want." },
				{ loc: [7, 11], backgroundColor: "#223b57", note: "The 'ole CSS reset! If I want paddding or margin, I'll add it. Also, I want the margin and padding to be counted in the overall widths that I specify." },
				{ loc: [13, 20], backgroundColor: "#223b57", note: "Oh flexbox, how I love you. Here, we are basically saying that we want items to be centered both vertically and horrizontally." },
				{ loc: [19, 19], backgroundColor: "#223b57", note: "Note that in order for the body to take up the full 'viewport height', we need to specify as such." },
				{ loc: [22, 25], backgroundColor: "#223b57", note: "Adding space at the bottom with margin-bottom and centering text in the container." },
				{ loc: [27, 34], backgroundColor: "#223b57", note: "Just styling the heading level 1 and paragraph tags. You know what's up. Keep moving." },
				{ loc: [36, 42], backgroundColor: "#223b57", note: "Styling our calculator container." },
				{ loc: [38, 38], backgroundColor: "#223b57", note: "I like 'slightly' rounded corners sometimes." },
				{ loc: [40, 40], backgroundColor: "#223b57", note: "Using one of our CSS3 variables." },
				{ loc: [41, 41], backgroundColor: "#223b57", note: "Adding some subtle box shadow." },
				{ loc: [44, 52], backgroundColor: "#223b57", note: "Styling ALL inputs. I should probably put all font-related styles together. Meh." },
				{ loc: [54, 59], backgroundColor: "#223b57", note: "Styling my buttons. There's a small, small amount of math here as these inputs will just break to next line when they run out of room as they are inline elements." },
				{ loc: [58, 58], backgroundColor: "#223b57", note: "I see people forget to this. You shouldn't. This communicates to the user that he/she can click." },
				{ loc: [61, 66], backgroundColor: "#223b57", note: "Our display box styles." }
			]} />


		<CodeSlide
			backgroundColor={"#0d1d2e"}
			theme={Themes.dracula}
			lang="js"
			code={require("raw-loader!./assets/examples/js-calculator/js.example").default}
			ranges={[
				{ loc: [0, 500], title: "JS - Making it work!" },
				{ loc: [0, 16], backgroundColor: "#223b57", note: "It really doesn't take a lot of JavaScript." },
				{ loc: [0, 0], backgroundColor: "#223b57", note: "First, let's create a handle to reach into our html and grab the calculator container whenver we want. Note the querySelector syntaxt. We are getting the calculator by id (#idName)." },
				{ loc: [2, 15], backgroundColor: "#223b57", note: "Now, we need to know when the user clicks on our calculator box, so we're adding a 'click' even listener. Note the arrow function syntaxt." },
				{ loc: [2, 2], backgroundColor: "#223b57", note: "That little 'e' is very important (not the name), but the fact that by passing that in we are getting the user's click event. We need that in order to know what the user clicked on." },
				{ loc: [3, 3], backgroundColor: "#223b57", note: "We aren't interested in all clicks. We only want to know if the user is clicking on one of our buttons, hence the condition." },
				{ loc: [5, 5], backgroundColor: "#223b57", note: "Now, we'll use the query selector to create a handle to reach in and manipulate the answer box. Note that we used const instead of let or var. This variable should not change. Use const when that's the case." },
				{ loc: [6, 6], backgroundColor: "#223b57", note: "e.target.value is the value of the user's click." },
				{ loc: [6, 7], backgroundColor: "#223b57", note: "If the user clicks on the 'c' button, we know he/she wants to clear the answer box, which is why we are setting answer.value (remember answer is holding our DOM reference to #answer) to nothing. Make sense?" },
				{ loc: [8, 8], backgroundColor: "#223b57", note: "If the user clicks on the '=' sign, we know he/she wants to do math." },
				{ loc: [9, 9], backgroundColor: "#223b57", note: "JS has a built-in method that will do the math for us. We are simply passing in everything that is in the answer box to the eval function, which returns the answer." },
				{ loc: [11, 11], backgroundColor: "#223b57", note: "Here, we are appending whatever the user types to whatever is in the answer box." },
				{ loc: [0, 16], backgroundColor: "#223b57", note: "This is my very own hastily-created calculator. It works, but there are bugs, or at least we are not pretecting the user from the user...and users need protection from themselves, as they will find a way to cause mayhem 🌀" },
				{ loc: [0, 16], backgroundColor: "#223b57", note: "But I'll leave that up to you...or add some functionality if you want. 😁" }
			]} />


		<Slide backgroundColor="#0a0a23">
			<Heading size={1}>
				<Image src={Logo} width="100%" />
			</Heading>
			<Text fontSize="1.5em" bold caps color="white">
				Now, add functionality and fix any bugs you find!
			</Text>
		</Slide>
	</Deck>
);

render(<Presentation />, document.getElementById('root'));
