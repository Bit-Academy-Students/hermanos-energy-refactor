<!DOCTYPE html>
<html>
<body>
    <div class="section">
    <h1>Get in touch</h1>
    <p1>If your interested in the product, or want to learn more feel free to contact us for a demo. If you want to know if the product is for you then we will start by doing a detailed calculation of which hardware solution fits with your energy setup at home.</p1>
    <form method="POST">
        <label>First Name:</label><br>
        <input type="text" name="Fname"><br><br>
        <label>Last Name:</label><br>
        <input type="text" name="Lname"><br><br>
        <label>Company Name:</label><br>
        <input type="text" name="Cname"><br><br>
        <label for="email">E-mail:</label><br>
        <input type="email" id="email" name="mail"><br><br>
        <label>phone number:</label><br>
        <input type="number" name="number"><br><br>
        <label>Notes:</label><br>
        <textarea name="summary"></textarea><br><br>
        <button type="submit" class="edit-button">Send</button>
    </form>
    <?php
    $Fname = (string) $_POST["Fname"];
    $Lname = (string) $_POST["Lname"];
    $Cname = (string) $_POST["Cname"];
    $mail = (string) $_POST["mail"];
    $number = (int) $_POST["number"];
    $summary = (string) $_POST["summary"];

    echo "First name: " . htmlspecialchars($Fname) . "<br>";
    echo "Last name: " . htmlspecialchars($Lname) . "<br>";
    echo "Company: " . htmlspecialchars($Cname) . "<br>";
    echo "Email: " . htmlspecialchars($mail) . "<br>";
    echo "Phone: " . $number . "<br>";
    echo "Notes: " . htmlspecialchars($summary) . "<br>";

?>
</div>


</body>
</html>