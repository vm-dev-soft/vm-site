# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

jQuery(document).ready ->

	validateEmail = (email) ->
	  re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	  re.test email
	$('a#send-mail').click (e) ->

		name = $('#name').val()
		email = $('#email').val()
		phone = $('#phone').val()
		company = $('#company').val()
		messages = $('#messages').val()

		if name == "" && messages == "" && email == ""
			alert "Please make sure name, email and messages was not blank"
		else if validateEmail(email)
			$.ajax(
	      type: "POST"
	      url: "/sendmails/contact_us"
	      data:
	        name: name
	        email: email
	        phone: phone
	        company: company
	        messages: messages
	    ).done((msg) ->
			  alert "Email sent!"
			)
		else
			alert 'Please make sure email was not wrong type'