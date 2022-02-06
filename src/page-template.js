const generatePage = (name, github) => {
    return  ` 
        <!DOCTYPE html>
        <html land="en">
        <head>
            <meta charset="UTF-8">
            <mate name="viewport" contant="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Portfolio Demo</title>
    </head>

    <body>
        <h1>${name}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

module.exports = generatePage;