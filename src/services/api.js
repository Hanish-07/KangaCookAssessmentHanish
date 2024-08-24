const API_URL = 'http://localhost:8000/api/notes/';

export async function fetchNotes() {
    const response = await fetch(API_URL);
    console.log("response ", response);
    return response.json();
}

export async function createNote(note) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    });
    return response.json();
}

export async function deleteNote(id) {
    await fetch(`${API_URL}${id}/`, {
        method: 'DELETE',
    });
}
