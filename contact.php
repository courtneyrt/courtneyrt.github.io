  <?php  
    $to = '1997courtneyrt@gmail.com'; 
    $firstname = $_POST["fname"];
    $email= $_POST["email"];
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email . "\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
    $message ='<table style="width:100%">
        <tbody><tr>
            <td>'.$firstname.'  '.$laststname.'</td>
        </tr>
        <tr><td>Email: '.$email.'</td></tr>
    </tbody></table>';
 
    if (@mail($to, $email, $message, $headers))
    {
        // echo 'Your message has been sent.';
    } else {
    // echo 'failed';
}

function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}
if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

?>