import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto my-4 text-white row row-cols-1 g-4'>
            <div className='col p-3 border border-3 border-dark rounded bg-danger bg-gradient '>
                <h2 className='fw-bold mb-4'>What is the purpose of React Router?</h2>
                <p className='fs-5 fw-semibold'>ReactJS Router is mainly used to define multiple routes in an application. It plays an important role to display multiple views in a single page application. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views. Without React Router, it is not possible to display multiple views in React applications. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. <br /> <br /> Thanks to this, the website doesn't refresh on every click and provide better user experience by loading data faster.</p>
            </div>
            <div className='col p-3 border border-3 border-dark rounded bg-danger bg-gradient '>
                <h2 className='fw-bold mb-4'>How does Context API work?</h2>
                <p className='fs-5 fw-semibold'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. <br /> <br /> To use context API, we need to call <code className='bg-white px-1 fs-5'>React.createContext()</code> which will return a consumer and a provider. Provider is a component which provides the state to its children. It holds the "store" and becomes the parent of all the components that might need that store. Whereas Consumer is a component which consumes and uses the state. Thus context API has made it a lot easier to pass variables globally.</p>
            </div>
            <div className='col p-3 mb-4 border border-3 border-dark rounded bg-danger bg-gradient '>
                <h2 className='fw-bold mb-4'>What are the use of the hook useRef()?</h2>
                <p className='fs-5 fw-semibold'>The <code className='bg-white px-1 fs-5'>useRef</code> Hook allows us to persist values between renders. It can be used to - store a mutable value that does not cause a re-render when updated, access a DOM element directly, keep track of previous state values since we are able to persist useRef values between renders, etc. <br /><br /><code className='bg-white px-1 fs-5'>useRef()</code> only returns one item. It returns an Object called <code className='bg-white px-1 fs-5'>.current</code> . When we initialize useRef, we set the initial value: <code className='bg-white px-1 fs-5'>useRef(0)</code> . The returned object will persist for the full lifetime of the component. Essentially, <code className='bg-white px-1 fs-5'>useRef</code> is like a “box” that can hold a mutable value in its .current property.
                </p>
            </div>
        </div>
    );
};

export default Blog;