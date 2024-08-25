document.getElementById('seats').addEventListener('change', function() {
    const numberOfSeats = parseInt(this.value);
    const attendeesContainer = document.getElementById('attendees-container');
    
    attendeesContainer.innerHTML = '';
    
    for (let i = 2; i <= numberOfSeats; i++) {
        const attendeeField = document.createElement('div');
        attendeeField.classList.add('form-group');
        
        const label = document.createElement('label');
        label.setAttribute('for', `attendee${i}-name`);
        label.textContent = `Name of Attendee ${i}:`;
        
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `attendee${i}-name`;
        input.name = `attendee${i}-name`;
        input.required = true;
        
        attendeeField.appendChild(label);
        attendeeField.appendChild(input);
        attendeesContainer.appendChild(attendeeField);
    }
});

function cancelForm() {
    if (confirm("Are you sure you want to cancel?")) {
        document.querySelector("form").reset();
        document.getElementById('attendees-container').innerHTML = '';
    }
}
