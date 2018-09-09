<!DOCTYPE html>
<html>
    <head>
        <title>Minon | Login</title>
        <meta charset="utf-8"></meta>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <header>
           	<canvas id="smile" width="79" height="72">
		        please update!
	        </canvas>
            <div class="container">
                <ul class="menu">
                    <li>
                        <a href="homepage.html">Home</a>
                    </li>
                    <li class="sep"></li>
                    <li>
                        <a href="history.html">History</a>
                    </li>
                    <li class="sep"></li>
                    <li>
                        <a href="cakes.html">Cakes</a>
                    </li>
                    <li class="sep"></li>
                    <li>
                        <a href="basket.html">My basket</a>
                    </li>
                    <li class="sep"></li>
                    <li>
                        <a href="bake.html">Bake your cakes</a>
                    </li>
                    <li class="sep"></li>
                    <li>
                        <a href="login.php">Login</a>
                    </li>
                </ul>
                <ul id="rightmenu">
                    <li>
                        <a href="login.php">
                            <canvas id="canvas1" width="51" height="49"></canvas>
                        </a>
                    </li>
                    <li>
                        <a href="basket.html">
                            <canvas id="canvas2" width="57" height="49"></canvas>
                        </a>
                    </li>
                </ul>
                <a id="minon" href="homepage.html">
                    <img src="images/minon.png">
                </a>
            </div>
        </header>
        <section>
            <div class="container">
                <h1 class="title">
                    <span>LOGIN FORM</span>
                </h1>
            </div>
        </section>
        <div id="home">
            <div class="container">
			    <form id="login" action="index.php" method="post">
			        <label for="username">Username</label>
			        <br>
			        <input type="text" id="username" name="username">
			        <br>
			        <label for="password">Password</label>
			        <br>
			        <input type="password" id="password" name="password">
			        <br>
			        <input type="submit" id="submit" value="submit" name="submit">
			    </form>
			    <div id="display">
                    <?php if(isset($status)): ?>
                        <p><?= $status ?></p>
                    <?php endif ?>
		        </div>
		    </div>
        </div>
        <footer id="loginhtml">
            <div class="container">
		        <p>Welcome to Minon.</p>
	        </div>
        </footer>
        <script src="js/canvas.js"></script>
    </body>
</html>