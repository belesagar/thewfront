document.getElementById("loginregistration").innerHTML =
	'<div class="loginmainbx">'
		+'<div class="closeloginbx">'
			+'<button type="submit" class="btnCloselogin">'
				+ '<div class="w3-spin"> </div> '
			+'</button>'
		+'</div>'
		+'<div class="login-subbx">'
			+'<div class="loginsocialbx">'
				+'<ul>'
					+'<li>'
						+'<a href="javascript:void(0);">'
							+'<div class="social-fb">'
								+'<i class="fa fa-facebook" aria-hidden="true"></i>'
								+'<span>Login with Facebook</span>'
							+'</div>'
						+'</a>'
					+'</li>'
					+'<li>'
						+'<a href="javascript:void(0);">'
							+'<div class="social-google">'
								+'<i class="fa fa-google-plus" aria-hidden="true"></i>'
								+'<span>Login with Google</span>'
							+'</div>'
						+'</a>'
					+'</li>'
				+'</ul>'
			+'</div>'
			+'<div class="orbx">'
				+'<span>OR</span>'
			+'</div>'
			+'<div class="loginbx">'
				+'<div class="loginbx1">'
					+'<div class="logingp">'
						+'<input type="text" class="logintextbx" placeholder="User Name"/>'
					+'</div>'
					+'<div class="logingp">'
						+'<input type="text" class="logintextbx" placeholder="Enter Password"/>'
					+'</div>'
					+'<div class="logingp2">'
						+'<div class="loginwith">login with</div>'
						+'<div class="swichbtnbox">'
							+'<div class="switch switch-blue">'
								+'<input type="radio" name="login_toggle" class="switch-input" name="view2" value="password" id="toggle-password" checked>'
								+'<label for="toggle-password" class="switch-label switch-label-off">Password</label>'
								+'<input type="radio" name="login_toggle" class="switch-input" name="view2" value="otp" id="toggle-otp">'
								+'<label for="toggle-otp" class="switch-label switch-label-on">OTP</label>'
								+'<span class="switch-selection"></span>'
							+'</div>'
						+'</div>'						
					+'</div>'
					+'<div class="logingp">'
						+'<a href="javascript:void(0);" class="forgotpasstxt1">Forgot Password</a>'
					+'</div>'					
				+'</div>'
				+'<div class="logingp">'
					+'<button type="submit" class="signinbtn">Log In</button>'
				+'</div>'
				+'<div class="logingp3">'
					+'<button type="submit" class="registrationbxbtn">Sign Up</button>'
				+'</div>'
			+'</div>'
			+'<div class="registrationbx">'
				+'<div class="registrationbx1">'
					+'<div class="logingp">'
						+'<input type="text" class="logintextbx" placeholder="Email"/>'
					+'</div>'
					+'<div class="logingp">'
						+'<input type="text" class="logintextbx" placeholder="First Name"/>'
					+'</div>'
					+'<div class="logingp">'
						+'<input type="text" class="logintextbx" placeholder="Last Name"/>'
					+'</div>'
					+'<div class="logingp">'
						+'<input type="text" class="logintextbx" placeholder="Enter Password"/>'
					+'</div>'
					+'<div class="logingp">'
						+'<input type="text" class="logintextbx otptexbx" placeholder="Enter Mobile"/>'
						+'<button type="submit" class="sendotpbtn">Send OTP</button>'
					+'</div>'
					+'<div class="logingp">'
						+'<input type="text" class="logintextbx" placeholder="Enter OTP"/>'
					+'</div>'
				+'</div>'
				+'<div class="logingp">'
					+'<button type="submit" class="registrationbtn">Sign Up</button>'
				+'</div>'
				+'<div class="logingp3">'
					+'<button type="submit" class="signinbxbtn">Log In</button>'
				+'</div>'		
			+'</div>'			
		+'</div>'		
	+ '</div>';

