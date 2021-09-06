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

