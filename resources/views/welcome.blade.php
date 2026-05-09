<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Frontend Viajes</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])

</head>
<body>

<div class="container mt-5">

    <h1 class="text-primary">
        Frontend conectado
    </h1>

    <button class="btn btn-success" onclick="probarAPI()">
        Probar API
    </button>

    <pre id="resultado" class="mt-4"></pre>

</div>

<script>

async function probarAPI() {

    const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: 'rodrigo@gmail.com',
            password: '123456'
        })
    });

    const data = await response.json();

    document.getElementById('resultado').innerText =
        JSON.stringify(data, null, 2);
}

</script>

</body>
</html>