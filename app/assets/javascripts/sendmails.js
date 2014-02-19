jQuery(document).ready(function() {

  var validateEmail,
      validateName,
      validatePhone,
      filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      letter = /^\s*(\w+\s)*\w+\s*$/,
      numberPhone = /^([0-9\(\)\/\+ \-]*)$/;

  // $('#send-success').modal('hide');

  validateEmail = function(email) {
    return filter.test(email);
  };

  validateText = function(text) {
    return letter.test(text);
  }

  validatePhone = function(phone) {
    return numberPhone.test(phone);
  }
  var company,
      email,
      messages,
      name,
      phone,
      valName,
      valMessage,
      $inputName = $('#name'),
      $inputCompany = $('#company'),
      $inputEmail = $('#email'),
      $inputMessage = $('#messages'),
      $inputPhone = $('#phone');

  
  // focus out for email 
  $inputEmail.on('focusout', function(e) {
    e.preventDefault();

    email = $inputEmail.val();
    valEmail = $.trim(email);
    // console.log('email +' + email);

    if ((!validateEmail(email)) && email !== ""){
      // console.log('email error');
      $inputEmail.addClass('error');   
    }
    else {
      // console.log('email good')
      $inputEmail.removeClass('error');
    }
  });

  // focus out for phone
  $inputPhone.on('focusout', function(e) {
    e.preventDefault();

    phone = $inputPhone.val();
    // console.log('phone +' + phone);
    if (!validatePhone(phone))  {
      // console.log('phone error');
      $inputPhone.addClass('error');
    }
    else {
      // console.log('phone good');
      $inputPhone.removeClass('error');
    }
  });

  // focus out for text: name  
  $inputName.on('focusout', function(e) {
    e.preventDefault();

    name = $inputName.val();
    // console.log('name +' + name);
    if ( (!validateText(name)) && name !== "") {
      // console.log('name error');
      $inputName.addClass('error');
    }
    else {
      // console.log('name good');
      $inputName.removeClass('error');
    }
  });

  // focus out for text: company 
  $inputCompany.on('focusout', function(e) {
    e.preventDefault();

    company = $inputCompany.val();
    // console.log('company +' + company);

    if ( (!validateText(company)) && company !== "" ) {
      // console.log('company error');
      $inputCompany.addClass('error');
    }
    else {
      // console.log('company good');
      $inputCompany.removeClass('error');
    }
  });

  $inputMessage.on('focusout', function(e) {
    e.preventDefault();

    message = $inputMessage.val();
    valMessage = $.trim(message);

    // console.log('message : ' + valMessage);
    if(valMessage !== '') {
      // console.log('click send and difference none');
      $inputMessage.removeClass('error');
    }
  });

  $('#send-mail').on('click', function(e) {
    // console.log('click button send');
    $input = $('form input');
    name = $('#name').val();
    email = $('#email').val();
    phone = $('#phone').val();
    company = $('#company').val();
    message = $inputMessage.val();
    valName = $.trim(name);
    valMessage = $.trim(message);
    // console.log('message '+ valMessage);

    if ( valName === "" || valMessage === "" || email === "" ) {
      $inputName.addClass('error');
      $inputMessage.addClass('error');
      $inputEmail.addClass('error');

      if (valName !== "") {
        $inputName.removeClass('error');
      }
      if (valMessage !== "") {
        $inputMessage.removeClass('error');
      }
      if (email !== "") {
        $inputEmail.removeClass('error');
      }
    }

    // 

    else if ((validateEmail(email)) && (valMessage !== "") && (valName !== "") || (validatePhone(phone)) && (validateText(name)) || (validateText(company)) ) {
      $.ajax({
        type: "POST",
        url: "/sendmails/contact_us",
        data: {
          name: name,
          email: email,
          phone: phone,
          company: company,
          messages: valMessage
        }
      }).done(function(msg) {
        $('#send-success').modal('show');
        $('.contact-us input').removeClass('error');
        console.log('done');
        //alert("Email sent!");
      });
    }
  });
});
