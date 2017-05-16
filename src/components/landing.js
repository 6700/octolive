import React, { Component } from 'react';
import AuthenticationManager from '../managers/authentication_manager'
import './landing.css';

import 'font-awesome/css/font-awesome.min.css';
class Landing extends Component {
    logIn = () => {
        AuthenticationManager.logIn()
    }

  render () {
    return (
    <div>
    	<div className="hero">
    		<div className="logo">
    			<img src="/images/logo-octolive-beta.png" alt="logo"/>
    		</div>
    		<div className="title">
    			<h1>Octolive</h1>
    		</div>
    		<div className="subtitle">
    			<h2>Make Github notifications great again! </h2>
    		</div>
    		<button onClick={this.logIn} className="btn btn-default"><i className="fa fa-github" aria-hidden="true"></i>Sign in</button>
    	</div>
    	<div className="description">

    		<div className="container marketing">
    			<div className="row">
    				<div className="block col-lg-4 col-sm-4">

    					<p><i className="fa fa-bolt fa-5x" aria-hidden="true"></i></p>
    					<h2>Realtime</h2>
    					<p className="descript-text">
                            Enjoy your notifications as never before. 
                            <br/>No waiting & no worries. 
                            <br/>For free! 
                        </p>
    					<p><a className="btn btn-default" href="#" role="button">View details &raquo; 	</a></p>
    				</div>
    				<div className="block col-lg-4 col-sm-4">
    					<p><i className="fa fa-cog" aria-hidden="true"></i></p>
    					<h2>Personalizable</h2>
    					<p className="descript-text">
                            We are 8x more flexible than your old-school notifications. 
                            <br/>100% personalized for you (yes, you!)
                            <br/>You can twist our tentacles as you wish

                        </p>
    					<p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
    				</div>
    				<div className="block col-lg-4 col-sm-4">
    					<p><i className="fa fa-newspaper-o" aria-hidden="true"></i></p>
    					<h2>Notifications</h2>
    					<p className="descript-text">
                            We keep you up-to-date with great notifications
                            <br/>Issues, comments, Pull Request, Tests and builds altogether in one octo-body
                            <br/>Let your F5 rest & relax, we got your back.
                           
                        </p>
    					<p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
    				</div>

    			</div>
    		</div>
    	</div>
        <div className="credits container-fluid display-block-xs">
            <div className="col-xs-12 col-sm-6 text-center-xs">
                Octolive is an opensource project, you can find our code at 
                 <a href="https://github.com/6700/octolive"> our repo page <i className="fa fa-github" aria-hidden="true"></i></a>
            </div>
            <div className="col-xs-12 col-sm-6 text-center-xs">
                <p className="text-center-xs col-xs-12">Created by: <a href="http://guadalupelazzo.me">Guadalupe Lazzo</a> & <a href="https://hugofarji.me">Hugo Farji</a>
                <br/>Octolive logo by: <a href="#">Yasmin Pachano</a></p>
            </div>
        </div>
    </div>
    )
    
  }
}

export default Landing;
