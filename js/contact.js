$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Your name must consist of at least 2 characters",
                    minlength: "Your name must consist of at least 2 characters"
                },
                subject: {
                    required: "Your subject must consist of at least 4 characters",
                    minlength: "Your subject must consist of at least 4 characters"
                },
                number: {
                    required: "Your Number must consist of at least 5 characters",
                    minlength: "Your Number must consist of at least 5 characters"
                },
                email: {
                    required: "No email, no message!"
                },
                // message: {
                //     required: "um...yea, you have to write something to send this form.",
                //     minlength: "thats all? really?"
                // }
            },
            submitHandler: function(form) {
                $(form).ajax({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"./contact.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})