
function loadFile(filename, elementId) {
    // Fetch the HTML file content
    fetch(filename)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load file: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            // Insert the navbar content into the specified element
            const navbarElement = document.getElementById(elementId);
            if (navbarElement) {
                navbarElement.innerHTML = data;
            } else {
                console.error(`Element with ID "${elementId}" not found.`);
            }
        })
        .catch(error => console.error(error));
    }