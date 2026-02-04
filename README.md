<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Vikesh Pandey | Portfolio</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet">

<style>
body{
  margin:0;
  font-family:Poppins,sans-serif;
  background:linear-gradient(120deg,#0f2027,#203a43,#2c5364);
  color:white;
  text-align:center;
}

.hero{
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

h1{
  font-size:3rem;
  animation:fadeIn 2s ease-in;
}

p{
  opacity:0.8;
  max-width:500px;
}

button{
  padding:12px 30px;
  background:#00ffd5;
  border:none;
  border-radius:30px;
  font-size:16px;
  cursor:pointer;
  margin-top:20px;
}

button:hover{
  background:#00c9aa;
}

@keyframes fadeIn{
  from{opacity:0; transform:translateY(30px);}
  to{opacity:1; transform:translateY(0);}
}
</style>
</head>

<body>

<section class="hero">
  <h1>Hi, I'm Vikesh Pandey</h1>
  <p>Web Developer | Tech Enthusiast | Creator</p>
  <button onclick="alert('Contact: vikeshpandey18@gmail.com')">
    Contact Me
  </button>
</section>

</body>
</html>