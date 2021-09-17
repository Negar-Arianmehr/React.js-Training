# React.js-Training
I am learning React.JS
# React.js-project
I am learning React with this app.. This is part of a course of https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture

Reacrjs is a JS library for building user interfaces.
If you consider the Netflix You can see it is easy to work with it, with good user interface, the transition happens pretty much instantly, we dont seem to wait for a new page to load. When we work with some website like Netflix, it might almost feel a bit like a mobile app, even though I am using the website. From bobile apps where use that we have smooth transition that is fun to use that app and things happen instantly. Then traditionally in website, when we, for example, clicked a link or a button, our request was sent to a server and new HTML page was sent back to the browser where then could be displayed. So maybe it has the latency where we wait to open a new page.
It is this request and response cycle, which we can break up with JavaScript, because JS is a programing language that allows us as a developer to run logic in the browser and can do things that manupulate what the user sees. 
JavaScript is following an imperative approach. Because you are giving clear instructions, clear step-by-step instructions, what JS in the browser should be doing.having to write all these instructions is very cumbersome.
React uses something which is called a declarative approach for building this component. A component in react is just a JavaScript function. A special kind of function special regarding what it returns that it does return this JSX code, but other than that,
You will not tell React that a certain HTML element should be created and inserted in a specific placeon the user interface as you would be doing it with Vanilla JavaScript, Instead with React and that's really important, you will always define the desired end state, the target state or possibly also different target states and it's then React's job to figure out which elements on the actual webpage might need to be added or removed or updated. And you don't write these concrete DOM updating instructions on your own as you would be doing it with just JavaScript, with React and React component you just define these end states and under which consitions which state should be used and then React will do all of the rest under the hood...and in the end, we just build our own custom HTML Elements and we combined them together for building a user interface.

JS in the browser is able to manipulate to so-called Dom, the HTML elements that are rendered onto the screen. We can manipulate this with JS. That allows us to change what the users see without fetching a new HTML page. So we dont need to request a new HTML page just to present something different to the user. on the other hand When we use just JS we have to write code for every part, is called an imperative approach. React code runs in the Browser.
# Why ReactJS
So Reactjs as a JS library is an extra building block and it is alll about building modern reactive user interfaces for websites. React makes building complex, interactive and reactive user interfaces simple. React embraces a concept called components, Because all user interfaces in the end are made up of components. Components are reusable building blocks in your user interface, and in the end are a combination of HTML code, Css code for styling and possibly JS code for some logic. It uses because of reusable contant and separation of contants an ddont repeat them. You can split your code into multiple small functions
We want to use Reactjs because it makes building modern, rich, complex user interfaces easeir, with a higher level syntax, where we write code in a declarative way, in a declarative component-focused way, we define what we wanna have on the screen. That is why we use the thecnology or framworks like react.
#What we want to learn
-Component-DrivenUser Interfaces
-Building Interactive and Scalable UIs
-A feature called JSX or a special syntax called JSX
-working with Components
-wWrorking with Data
# Creating a new React Project
We have a single html page that we see on the screen constantly changes because of areact. The easiest way of getting started with a React project is to use a tool called Create React App. We can find it in github or creat-React-app.dev. So this is a tool to create a react project, which are basically pre-configured folders with some basic React code files and most importantly a bunch of configuration files which help you build that React App for production use because it turns out that there will be a couple of transformation and optimization steps between developing any React App and running a React App in production but more on that later, And in addition, this project which is created with Create React App, will give you a nice development environment with a development web server which allows you to preview the application locally on your machine.
And it will allow you to preview this applicationin a way where the browser will automatically update the page whenever you make changes in your code and so on.
You need node.js for run this app with some commands.
After install npm, we must run NPM start. We should use it all to keep that development server running as long as we are working on the code, it will automatically update the loaded page in the browser.
# Starting to write codes
W created the required files for writing codes.So we start with index.js, there are import ReactDOM from "react-dom" (That is a library we can see in package.json), css, and App. We can see ReactDOM.render(...)[This is render method] in this file. This is actually the first file which will be executed whenever this page is loaded. The render method get two argument. The first argument is whatever we want to rendder to html page.  The second argument is a default JavaScript DOM API. we use getElementBy Id to select a certain DOM HTML element by its ID from the index.html file from public folder.
The code that we see here, will transform and optimize behind the seence.
Basically we will write to code, in a easy to read developer friendly way with some syntactic sugar, which makes our life as a developer easier, but we'll write code which wouldn't run like this in the browser, and especially not in all supported browsers. Therefore the npm start process, which we started here, which started this development server, which is watching our code, this process will not just watch our code and then take it and deliver it to the browser, but before it delivers it, it will transform it.

<App /> : This is like HTML code that write in JS code. It will be work only because this is transformed before it is delivered to the browser. This is ipport App from ./App(App.js). That is not regular JS syntax here. This is a syntax called a JSX. When we go to the App file we can see a trivial file that in inclulded a function named App that is exported for using in the another file.
In this function You can see a html code that is not regular in HS, but it is inverted by React team.
# What is the JSX 
We got a JSX code that is basically HTML code inside of JS. Indeed, JSX stands dor JavaScript XML, because HTML in the end is XML. It works because of behind screen and npm start process.

# Building Components
We build a component file and give it a name and add a function in it with JSX syntax. When we want to add it to main App.js we import it and write it as a element in the JSX. this is a customer component and we have to use the name which we use in import as a name for element. Because that is how conection is established.
Whereas elements starting with an uppercase character are element defines by you or some other developer<ExpenseItem />.
#Passing Data via "Props" :
We can pass data to the custom component by adding a attribute. And inside of that component, we can then get access to all these attributes which might have been set on our custom component. Again, we're basically building our own custom HTML elements. And just as HTML elements can have attributes, it turns out that with React, our own custom components can also have attributes.There, this concept is just called props instead of attributes. And **props simply stands for properties**. We can set properties of our own custom components. Props are really important, because it allows you to make your components reusable, and it allows you to pass data from another component to this component.

# composition
We build all these components to then build a user interface and we are already doing that. In App.js we're using Expenses, in there we are using ExpenseItem, in there we're using ExpenseDate. Generally, this approach of building a user interface from smaller building blocks is called composition. What if we wanted to create a component which actually just serves as a shell around any kind of other content.
When you use custom componenrs as wrapers, you can not see the content. But we want to use a reusable wraper so we put in wraper div a **{props.children}**. Children is a reserved name. and the value of this special children prop will always be the content between the opening and closing tags of your custom component. This property is now a custom component defined by you. now we have this reusable wrapper component.

# Listening to Events and Working with Event Handlers in React
In React we add an event listener by going to the JSX element, and there we add special prop. But now it's not a prp which sets some value for this button, but instead it's a prop which starts with **on**. Because React exposes all these default events as props which start with on like onClick.
We wrote the function out of onClick and mention to it there(we dont execute it there,so You don't add parentheses here.)Instead, you just repeat the name of the function.

# State
a special concept called state. it is a key concept in React as well. React doesnt matter that a title or something changes, So we should tell React that it should run it again we need to import something from the React library. And we do it as by adding a so-called named import. we want to import single pieces from the React library. And we want to import a function here, function that is called **useState**. This is a function provided by the React library and this function allows us to define values as state where changes to these values should reflect in the component function being called again. We have to define it inside of React component functions that we want to change some part.
**useState()** doesnt work without value, it wants a value. Because wit useState we created a special kind of variable. So we put a initial value as a argument to it. the useState gives us access to this special variable.it also returns a function which we can then call to assign a new value to that variable. So we will be assigning new values by calling a function. That's just how this state variable thing works. And for that useState actually returns an array where the first value is the variable itself, and second value is updating function. We can use array disstructuring []. The first element, is a point at that managed value. and the second element here  is a function which we can later call to set a new thing. with the second paramert that is a function the JSX part run again and assign a new value in some part.
If you have data, which might change, and where changes to that data should be reflected on the user interface then you need state because a regular variables will not do the trick with state, however you can set and change values. And when they do change, React will re-evaluate the component in which the state was registered. And only that component, by the way not any other components, just this component in which this state was registered.
#Event handler
onclick  onChange onInput
If a button, especially with type submit is pressed instead of a form, this overall form element will emit an event to which we can listen and that's the submit event.
onSubmit 
where I wanna react to on submit and then execute some function whenever this form is being submitted.(We put it in the form tag) a part of this default browser behavior is that if you do click this button, the page reloads because the browser actually automatically sends a request whenever a form is submitted
to the server which is hosting this webpage. So in this case to this development server and that's not what we want here. Instead here, we wanna handle this form submission with Java script and manually collect and combine the data and do something with it. We can change this default behavior . we get the event object and on this object we can call a preventDefault() method. This is JS behaviour. So we stay on loading page. We prevent page to load. So now we can create our object here. We store it after push the submit button.
if we just wanted to persist the values, but by using state, we have an advantage. We can now implement something which is called two-way binding, which simply means that for inputs we don't just listen to changes, but we can also pass a new value back into the input. So that we can reset or change the input programmatically. It happen eith value property and put the set function to empty.
So useState is a jS syntax which is called array de-structuring. we use it because useState always returns an array with exactly two elements. and with this syntax, we are pulling these elements out of that returned array and we store them in the separated constants.
# Child to Parent component communication
When we have onChang in input when we type something in it, the function(That is in {}) is executed.
When we write event, it is the default event object that something the browser gives us. We can consider a input as a component, it is simply a pre-built component that we can set some props on that component. And in this input, as a component, with onChange we add a listener.
We can create our own event props if we wanna call it like, and we can expect functions as values and that would allow us to pass a function from a parent component to a child component and then call that function inside of the child component. we can of course pass data to that function as a parameter and that's how we can communicate up from child to parent. Props can only be passed from parent to child, we can't skip intermediate components.
Here we want to add some info from child to parent that is up communicate. So In the Parent file, in the JSX code where we add child component, we add a listener, like onClick or…The name of this prop is better to start with on because in this way we show that the value for this prop should be a function, that the function will be triggered when something happen in this  component, For instance when a form is submitted, this function will be executed. The function of this prop get a parameter.
IN the child component we have to use the prop, the prop is the onName prop that we made in the parent component and we execute it. We can execute this prop because the value of it is a function. We can execute the function in the another component because we are passing a pointer edit through that prop. This is how you can communicate up, how you can to be sure that the child component.
The argument for the pointer function in child component(the function that is in the parent component) is the parameter in function of parent component.
# Lifting the state up
we learned about a very important concept of moving data from a child to a parent component by utilizing props to receive a function from the parent component which we call in the child component. This is close to a key concept which we also already used without even knowing that is the concept call lifting state Up.
We have to consider that we have no direct connection between two sibling components. Instead we can only communicate from parent to child and from child to parent.
We are passing data up to some parent component during coding because we either need that data directly in the app component or in our demo application. because we then want to pass that data down(from parent to child) to another component via props.
You will hear the term Lifting the State Up quite a bit when you were working with React. Whenever you hear that it is about moving data from a child component to some parent component to either use it there or to then pass it down to some other child component.
# Controlled vs Uncontrolled Components & Stateless vs Stateful Components
Presentational VS Stateful components....or Stateless VS stateful components...or dumb VS smart components. It means that in the React App that you bulid, we will have a couple of components that manage some state and components which dont manage any state.
The components that are a stateless component also called presentational or dumb component, Because they dont have any internal state, they are just there to ouput some data
In most React applications, we will have more presentational and dumb components than smart or stateful components. Most components indeed will only focus on outputting something, on having some JSX code, maybe some transformation logic like this here and maybe some css code
# Rendering List of Data
When we want a **dynamic exprossion** in our JSX code, that is done with curly braces. THen we can execute JS expressions there. For instance, map() takes a function as a argument and that function executes for every elements in the array, and it gets that element for which it,s currently executing as a parameter. So it is so useful for preventing of repeating our similar items with different data.
**Using stateful Lists**
In Reacr we khonw that when we add a new property to an array, nothing would happen because we learned that just because we change a variable, React won't update a component. Instead to achive that, you need to use state. So we use the map() method and a state to create a dynamicy list.
# Understanding Keys
**Warning:Each child in a list should have a unique "key" prop.**
React has a special concept when it comes to rendering lists of data, a concept which exisis to ensure that React is able to update and render such lists efficiently without performance losses, or bugs, which may occur.
When we look at the element tools, go to the elements tab, we can see the list of div that we add or we had.When we add a new element we can see last of the element is flashed as soon as we click in the add item button, it means it added by the browser. When we go to the div we can see h2 tag will be flashed when new one is added So what actually happens here when I add a new item is that React, renders this new item as the last item in this list of div's and updates all items and replace their content, such that it again matches the order of the items in my Array. REact updates the content inside of every item
to match the Array content again.
The final result, therefore is correct here but from a performance perspective this is not great because all items are visited and updated and it can even lead to bugs. If the expense items would be state full items and we would have some state managed inside of that. Then if, for example, our first item, if it has a certain state if we add a new item the old first item would be overwritten with the new first item. Hence any state changes we might've had in there would be lost. So besides potential performance issues we could also run into bugs.
**Why the React has this behaivour?**
It is because it has no other way. We have to tell the Reat that which item is new. We do that with going to items where we have map method or any where that we can and we j=have to add special prop to this item. that is **key** prop. This is a prop that you can add to any component(Custom component or html element). With adding key prop we help React to identify the individual items. We have to set a uniq value per list item. So we have to have key prop when mapping out lists of items.
# Conditional Content
Conditional content is about rendering different output under different conditions. There are some ways that we can see in the code.

# Styling React Components
Building web app with React is not just about composing components together and making sure that the logic works correctly. That arguably is the most important part, where at least it is the biggestt reason for using React. But building React app is also about styling those apps. React is also about:
1.Conditional & Dynamic Styles
2.Styled Components
3.CSS Modules

**Setting dynamic inline styles**:
One of them is trim(), trim method is a built in method that removes excess whitespace at the beggining or end of a string.
We can also add new class in the special setuation with in template literal`` and ${}.
We can use style-components for styling the html element instead of add css file to component.
# Fragments, Portals and Refs
**JSX Limitations & Workarounds** : JSX is that code you return in your Components which in the end will be rendered to the real DOM by react. One of the JSX limitation that we always face in it, if we have adjacent root level JSX element side by side, we will get an error. We can not return more than one "root JSX element (you also cant store more than one "root" JSX element in a variable), because it is not also valid JS. Your JSX code translates into REact creat element, so if we have two JSX element side by side we have two React.createElement() in one return. So it is impossible. But they can be children and these children of that root element would be the third and fifth and so on argument.
we can solve this problem with wrapping the adjacent elements with a div(or other elements). so we have one value for return.
Second way is that we can use a native JS array and we have to seperate them with comma. If we do it, we have to specify a key for every element in the array.
Besides with wrapping element we might have a lot of div in the final HTMl file because of JSX limitation(div Soup).
So we can use the dirty trick for solving this problem. We will use the wrapper which jst return props.children.
We can also use the Fragments for solving this problem. It is a empty wrapper component: it doesnt render any real HTML element to the DOM. But it fulfills React's/JSX' requirement.
**React.Fragment**: We can also use the React.Fragment or we can put the tag empty. The React.Fragment always work, we just be sure that we are importing React or we can import Fragment in the curly braces from React, So with this we just can use the name,<Fragment/>. Fragments allow us write cleaner code, to end up with less unnecessary HTML elements on the final page.
**React Portals**: It is also help us write cleaner code. For using portal we need two things, we need a place that we want to port the component to and then we need let the component know that it should have a portal to that place. To mark that place, we go to the poblic folder and there into the HTML file which is being rendered in the end. It is common that you add a div with an id which you will then use to identify this place later. We can identify some root for different kinds of components thst should be portaled there.For adding it into te component we will use ReactDOM, createPortal with pointer (document.getElementById()).
React is the library that has all the React features, state management, insen, backed-in. React-dom uses React to bring that logic and these features into the web browser. To make them compatible to working with the DOM, put in ohter words, the react library itself doesnt care whether you run it in an environment that has a DOM or if would use it to build a native app. React-dom is kind of the adapter for react to the Browser and therefore since now we are going to portal something into a different place in the real DOM,we need to import from react-dom.
**ref**s : ref is refrences. They allow us to access to other DOM elements and work with them. With refs, we can set up a connection between a HTML element which is being rendered in the end and our JS code. For that, first of all, we need to create a ref which we do with the help of another react hook. we use useRef hook. like other hook it is used inside of function components.
It takes a default value you want to initialize it to and return a value that we will use it. After define the function with ref, we add the prp ref in the JSX which we can add to any HTML element. We can connect any HTML element to one of our references. It is very commen for input, because it wants to fetch input data. When the react render, it will store the value into nameOfRef to the native DOM element. When we use the ref , we will have object that has a current property. The current prop holds the actual value that ref is connected with. In this object with current property, is stored something else, is the actual DOM node which is manipulate and do all kinds of things with, but we dont manipulate it. So we can store nameOfRef.current.value and use it. So we dont need useState to get our value anymore.
Which one better to use? "useState or useRef" : If we want to read a value , refs are probably better. a little bit hacky approach of then still manipulating the input fields and resetting them if you want to do that.
**Uncontrolled vs controlled components** : if we access values with a ref, so therse input components would be uncontrolled components. Because they are internal state, so to value which is reflected in them is not controlled by react. we rely on the default behaior of the input where a user of course is able to enter something and that entered value is reflected, we then jst fetch it with a react feature but we dont feed data back into the input. When we use refs, we have uncontrolled input components. But for useState, where we update that state on every keystorke snd we feed that state back into the input with the value prop, it is controlled approach. those input fields are controlled components because their internal state is controlled by react.

# Effects, Reducers and Context:
What is an Effect (or a side Effect)? When We say effect we mean Side Effect.
The React app and the React library itself has one main job, to render the UI, to react to our user input, to re-render the UI when it is needed.
The main job is to bring something onto the screen and to make sure that the user may interact with that something and that what’s shown on the screen may change based on certain events.
We want to evaluate and render the JSX code and the DOM. We want to manage state and props to make sure that every component has the data it needs and that we reflect the user input correctly. 
We want to React to user events as mentioned and of course React  is there to also re-evaluate our components and their JSX code and manipulate the real DOM as needed.
Therefore side effects are everything else that might be happening in our application.
you might be sending a Http request to then draw something onto the screen once you got the response, but sending the request itself and handling potential errors and so on that's not something you need React for, that's not something React cares about, that's not what React is.
So we have a better tool for handling side effects and that is a special React Hook.
The useEffect()Hook is simply another built in Hook. Another function that we can run inside of your component function that will do something special. The useEffect()Hook is called with two arguments with two parameters. The first argument is a function that should be executed after very component evaluation if the specified dependencies changed. The specified dependencies are the second argument that you pass in. That is an array full of dependencies and we will see how these dependencies look like throughout this module. So an array full of dependencies and whenever such a dependency changes that first function will re-run. Therefore in the first function we can put any side effect code and that code will then only execute when the dependencies specified by you changed, not when the component re-renders.
For example we can use useEffect()Hook when we want to store some user info. The browser has multiple storages we can use. The most common storage for this would be cookies or local storage. We want to use localStorage that is a global object which is available in the browser >>localStorage.
**Using the useEffect() cleanup function:
Sometimes we also have an effect that needs to do some cleanup work. For exemple imagine we execute a function essentially on every keystroke. Sometimes it is important, For instasnce when we send an HTTP request to some backend. If we do something when user stop typing called debouncing. we can use setTimeout() and in it we put the function that we want to execute after a specific time. ANd also we return a function that is anonymous arrow function that is called cleanup function. This willl run as a cleanup process before useEffect executes this function the next time. The cleanup function will run whenever the component you are specifying the effect in unmounts from the DOM. This is no run before the ferst side effect function execution.
clearTimeout is built into the browser, it is clean the timer that we set. If we put the useEffect with just log withouth dependencies, it will be executed after every component render cycle. NOw if we put a empty arry, the function executes for the first time this component was mounted and rendered, but not thereafter, not for any subsequent render cycle, It realy only run once. Now if we add a dependency like entered email or entered password, now this function rerun whenever the component was re-evaluated, and the state that we use,changes. and we see effect cleanup being triggered and it triggers before the effect function run.

**useReducer()** the next React Hook:
The usereducer is another built in Hook and it is a bit like useState, but actually with more capabilities and especially useful for more complex state, for example if it got multiple states, multiple ways of changing it or dependencies to other states. So useState often becomes hard or error-prone to use and manage. it is easy to write bad, inefficient or buggy code in such scenarios. the useReducer() can be used as a replacement for useState() if we need more powerful state management.
const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn); useReducer just like useState always returns an array with exacyly two values. the state snapshot used in the component re-render/ re-evaluation cycle. because it is a state management mechanism like useState. We also get the function that can be used to dispatch a new action (i.e trigger an update of the state), that allows you to update that state snapshot. Instead of setting a new value, you will dispatch an action. and that action will be consumed by the first argument that you pass to useReducer a so-called reducer function. This is a function which gets the latest state snapshot automatically because this function will be called by React and it gets the action that was dispatched. Because React will call this reducer function whenever a new action is dispatched. Then the reducer function also should do one important thing. It should return a new updated state. It is a bit like the fuction from of the useStaet hook, but an extended version of that. We can also add the initial state and initial function that set the initial state programmatically.
Adding Nested Properties As Dependencies To useEffect
We used object destructuring to add object properties as dependencies to useEffect().

const { someProperty } = someObject;
useEffect(() => {
  // code that only uses someProperty ...
}, [someProperty]);
This is a very common pattern and approach, which is why I typically use it and why I show it here (I will keep on using it throughout the course).

I just want to point out, that they key thing is NOT that we use destructuring but that we pass specific properties instead of the entire object as a dependency.

We could also write this code and it would work in the same way.

useEffect(() => {
  // code that only uses someProperty ...
}, [someObject.someProperty]);
This works just fine as well!

But you should avoid this code:

useEffect(() => {
  // code that only uses someProperty ...
}, [someObject]);
Why?

Because now the effect function would re-run whenever ANY property of someObject changes - not just the one property (someProperty in the above example) our effect might depend on.
**useState() vs useReducer():**
Generally, we will know when we need useReducer() (=> when using useState() becomes cumbersome or you’re getting a lot of bugs/ unintended behaviors).
The useState() is the main state management “tool”. It is great for independent pieces of state and data. It is great if state updates are easy and limited to a few kinds of updates.
The useReducer() is great if you need more power and with more power we simply mean that we can write such a reducer function that can contain more complex state updating logic where we always are guaranteed to work with the last state snapshot. And where we can move that potentially more complex logic out of your component function body into a separate reducer function. It should be considered if we have related pieces of state/data. It can be helpful if we have more complex state updates.
**Introduce React Context (Context API)** :
We have a concept called React Context, and this then allows us to, for example, trigger a action in that component-wide State Storage, and then directly pass that to component that is interesting without building such a long prop chain. That allows us to solve our problem in more elegant way.  We have this React context concept which allows us to manage state kind of behind the scenes in React. We actually are able to directly change it from any component in our App and directly pass it to any component in our App without building such a prop chain.
When we import React from "react" >>> React.creatContext() takes a default Context, and the contax here really is just your app or component white state. It could be something simple like just a string, if your app white or a component white state is just some texts. Often though it will be an object. To use Context in our app we need to do two things. We need to provide it which basicaly tells React where is it, all component that are wrapped by it should have access to it and besides providing, you then need to consume it, we need to hook into it, we need to listen to it. Providing means that we wrap in JSX code all components that should be able to tap into that context or listen to that context. For accessing to property on this AUTH-cONTEXT OBJECT THAT CONTAIN A COMPONENT we use provider. AuthContext.Provider is hte component we can use in our JSX code and we wrap it around other components and all their descendant components.and all their descendant components (all those children). After that we have second part that is listening part. To get access to our value we need listen and we can listen in two ways. We can listen by using Auto-Context consumer or by using a React Hook.
We have .Provider, now we have consumer that takes a child which actually should be a function beteen curly braces and as argument we will get our Context data. In this function we should return JSX code which should have access to that data.
 we do have a default value here, but this default value will actually only be used if we would consume here without having a provider. So technically the provider is not even needed, however, you should memorize this pattern I explained earlier, where you need the provider. Technically, you don't need it if you have a default value, but in reality, you will use Context to have a value which can change and that will only be possible with a provider. We will use Context to have a value which can change and that will only be possible with a provider. ThereFor to make sure that this soes not crash, in the provider we cab add a value prop and this has to be named value. because this is not a component by we nd to do that we can also pass our object(into the value).
 There is other way to use context:
 **Tapping into Context with the useContext Hook**: Another Hook that is built into React. and it allows us to use the Context, it allows us to tap into a Context and listen to it. For using it, we call useContext in our React Component Function, and we pass the context appointer at the Context you want to use to it. What we get back is the context value, so we store it into the constant. It sounds a little bit elegent.

