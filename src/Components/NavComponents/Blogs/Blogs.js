import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container blogs'>

            <div className="blog-container">
                <p>Q<sub>1. </sub>Difference between Authentication and Authorization? </p>
                <p><b>A:</b> The basic difference between authentication and authorization is, authentication is a process to verify or identify someone’s identity whereas authorization is checked that what are the files, documents or data have the user permitted to access. In other word, Authentication verify the user and authorization verify the what resources can a user permitted to use. One important thing is that, authorization always take place after authentication. </p>


            </div>

            <div className="blog-container">
                <p>Q<sub>2. </sub>Why are you using firebase? What other options do you have to implement authentication? </p>
                <p><b>A: </b>Firebase is a product of google and at present google is one of the large tech company in the world and it is obvious that their security system is more powerful than then other data storage system. In addition, using firebase is super easy for it’s simple installation process.
                    Nowadays, most of the developer depends on the other third party system for implementing authentication because of its security and support. The most common third party authentication providers are Okta, Oauth, firebase etc.
                </p>
            </div>

            <div className="blog-container">
                <p>Q<sub>3. </sub>What other services does firebase provide other than authentication?</p>
                <p><b>A: </b>Firebase provide various services other than authentication. Some of the firebase products are Cloud Firestore, cloud Functions, Hosting, cloud Storage, google Analytics, cloud Messaging, Realtime database etc.</p>
            </div>
        </div>
    );
};

export default Blogs;