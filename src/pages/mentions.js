import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import '../styles/mentions.css';

const Mentions = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
      <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <div style={{paddingBottom: "20px", paddingLeft: "5%"}}>
                <div>
                    <h1 className="header_one">Mentions légales</h1>
                    <h3>Introduction</h3>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra pharetra commodo. Donec sed egestas purus. Vivamus tempor enim urna.</p>
                    <br/>
                    <h3>Crédits et réalisation</h3>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Maecenas pharetra pharetra commodo. Donec sed egestas purus. <br/>Vivamus tempor enim urna.Vivamus tempor enim urna.</p>
                    <br/>
                    <h3>Conditions générales d'utilisation du site</h3>
                    <br/>
                    <p>Cras iaculis vulputate pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sed arcu augue. <br/>Donec sit amet lectus sodales, fermentum dui eu, ornare felis. Quisque erat elit, varius quis nulla nec, sodales dapibus metus. Sed cursus eu erat in dictum. <br/>Proin fermentum lacus a elementum interdum. Suspendisse quis tortor ultricies, ullamcorper velit sodales, finibus lorem. Vivamus dictum sagittis lacus, a condimentum purus ullamcorper ut. <br/>Aenean libero purus, efficitur et posuere ac, commodo sit amet metus.</p>
                    <br/>
                    <h3>Hébergement</h3>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra pharetra commodo. Donec sed egestas purus. <br/>Vivamus tempor enim urna. Donec sed egestas purus. Vivamus tempor enim urna.</p>
                    <br/>
                    <h3>Droits de propriété intellectuelle</h3>
                    <br/>
                    <p>Donec tincidunt arcu diam, sed dapibus velit malesuada nec. Sed egestas, diam ac vehicula consequat, sem turpis laoreet sapien, ac condimentum felis lectus eget felis. <br/>Pellentesque nisi massa, posuere non quam id, malesuada semper lorem. Donec malesuada vestibulum augue, vel volutpat est. <br/>Donec id vestibulum quam. Cras ac ligula arcu. Integer vestibulum rutrum placerat. Fusce vulputate velit ex, sed interdum eros venenatis at. <br/>Proin lacus tellus, tincidunt eget malesuada eget, efficitur ut diam. Pellentesque ut est ac lacus lacinia semper.</p>
                    <br/>
                    <h3>Crédits photos</h3>
                    <br/>
                    <p>Donec tincidunt arcu diam, sed dapibus velit malesuada nec. Sed egestas, diam ac vehicula consequat, sem turpis laoreet sapien, ac condimentum felis lectus eget felis. <br/>Pellentesque nisi massa, posuere non quam id, malesuada semper lorem. Donec malesuada vestibulum augue, vel volutpat est. <br/>Donec id vestibulum quam. Cras ac ligula arcu. Integer vestibulum rutrum placerat. Fusce vulputate velit ex, sed interdum eros venenatis at. <br/>Proin lacus tellus, tincidunt eget malesuada eget, efficitur ut diam. Pellentesque ut est ac lacus lacinia semper.</p>
                    <br/>
                    <h3>Données personnelles</h3>
                    <br/>
                    <p>Donec tincidunt arcu diam, sed dapibus velit malesuada nec. Sed egestas, diam ac vehicula consequat, sem turpis laoreet sapien, ac condimentum felis lectus eget felis. <br/>Pellentesque nisi massa, posuere non quam id, malesuada semper lorem. Donec malesuada vestibulum augue, vel volutpat est. <br/>Donec id vestibulum quam. Cras ac ligula arcu. Integer vestibulum rutrum placerat. Fusce vulputate velit ex, sed interdum eros venenatis at. <br/>Proin lacus tellus, tincidunt eget malesuada eget, efficitur ut diam. Pellentesque ut est ac lacus lacinia semper.</p>
                    <br/>
                </div>
        </div>
      </>
  )
};

export default Mentions;