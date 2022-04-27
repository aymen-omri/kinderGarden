<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>Title</title>
</head>
<body>
    <div class="text-center mt-3">
        <a href="login.jsp">You have an account ? Sign in here</a>
    </div>
    
    
    <div class="container">
        <form class="was-validated my-5" method="post" action="register">
            <input type="text" class="form-control mt-3" placeholder="votre nom" name="name" required>
            <div class="invalid-feedback">champ obligatoire</div>
            <input type="email" class="form-control mt-3" placeholder="votre email" name="email" required>
            <div class="invalid-feedback">champ obligatoire</div>
            <input type="password" class="form-control mt-3" placeholder="votre mot de passe" name="password" required>
            <div class="invalid-feedback">champ obligatoire</div>
            <div class="row mt-3">
                <div class="col">
                    <input type="date" class="form-control" name="date">
                </div>
                <div class="col">
                    <select class="form-select" name="level">
                        <option>TPS</option>
                        <option>PS</option>
                        <option>MS</option>
    
                    </select>
                </div>
            </div>
            <div class="input-group mt-3">
                <span class="input-group-text">+216</span>
                <input type="number" class="form-control" placeholder="Votre num de tel" name="tel">
            </div>
            <input type="text" class="form-control mt-3" placeholder="votre add " name="addresse">
            <input type="number" class="form-control mt-3" placeholder="code postale" name="code">
            <div class="text-center">
                <button type="submit" class="btn btn-outline-primary mt-3">Register</button>&nbsp;
            </div>
    
    
    
    
        </form>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
</body>
</html>



