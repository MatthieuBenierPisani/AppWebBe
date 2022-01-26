import React, {useState, useContext} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { userContext } from './userContext';
import '../styles/faq.css'

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
      <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <div>
            <div></div>
            <div id="page-container" style={{paddingBottom: "40px"}}>
                <div id="content-wrap">
                    <h1 className="header_one" style={{textAlign: "center", paddingTop: "4%"}}>Questions fréquemment posées</h1>
                    <p className="text-center" style={{fontWeight: "900", color: "black", fontSize: "18px", textAlign: "center", paddingTop: "20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra pharetra commodo. Donec sed egestas purus. <br/>Vivamus tempor enim urna. In nisi turpis, efficitur quis nunc eu, pharetra placerat sapien. </p>
                    <div className="container">
                        <div class="row" style={{paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%"}}>
                            <div class="col-sm-5">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Vestibulum et ultrices posuere cubilia curae ?</h5>
                                    <p class="card-text">Sed cursus eu erat in dictum. Proin fermentum lacus a elementum interdum. Suspendisse quis tortor ultricies, ullamcorper velit sodales, finibus lorem.</p>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-7">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Vestibulum et ultrices posuere cubilia curae ?</h5>
                                    <p class="card-text">Sed cursus eu erat in dictum. Proin fermentum lacus a elementum interdum. Suspendisse quis tortor ultricies, ullamcorper velit sodales, finibus lorem. Vivamus dictum sagittis lacus, a condimentum purus ullamcorper ut. Aenean libero purus, efficitur et posuere ac, commodo sit amet metus.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" style={{paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%"}}>
                            <div class="col-sm-7">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Vestibulum et ultrices posuere cubilia curae ?</h5>
                                    <p class="card-text">Sed cursus eu erat in dictum. Proin fermentum lacus a elementum interdum. Suspendisse quis tortor ultricies, ullamcorper velit sodales, finibus lorem. Sed cursus eu erat in dictum. Proin fermentum lacus a elementum interdum. Suspendisse quis tortor ultricies, ullamcorper velit sodales, finibus lorem.</p>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-5">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Vestibulum et ultrices posuere cubilia curae ?</h5>
                                    <p class="card-text">Sed cursus eu erat in dictum. Proin fermentum lacus a elementum interdum. Suspendisse quis tortor ultricies, ullamcorper velit sodales, finibus lorem. Vivamus dictum sagittis lacus, a condimentum purus ullamcorper ut. Aenean libero purus, efficitur et posuere ac, commodo sit amet metus.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" style={{paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%"}}>
                            <div class="col-sm-4">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Vestibulum et ultrices posuere cubilia curae ?</h5>
                                    <p class="card-text">Sed cursus eu erat in dictum. Proin fermentum lacus a elementum interdum. Suspendisse quis tortor ultricies, ullamcorper velit sodales, finibus lorem. Sed cursus eu erat in dictum.</p>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Vestibulum et ultrices posuere cubilia curae ?</h5>
                                    <p class="card-text">Sed cursus eu erat in dictum. Proin fermentum lacus a elementum interdum. Suspendisse quis tortor ultricies, ullamcorper velit sodales, finibus lorem. Vivamus dictum sagittis lacus, a condimentum purus ullamcorper ut. Aenean libero purus, efficitur et posuere ac, commodo sit amet metus. Pellentesque odio turpis, volutpat ut lobortis ac, fringilla ac nunc. Suspendisse potenti. Aenean fermentum turpis a dui luctus, a commodo eros sagittis. Quisque ligula sem, dapibus vel consectetur non, ultrices nec tellus. Cras aliquam, nulla id pellentesque commodo, dui nibh bibendum risus, gravida molestie arcu est id libero. Phasellus sodales fringilla justo, nec aliquet arcu sollicitudin nec.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
};

export default FAQ;