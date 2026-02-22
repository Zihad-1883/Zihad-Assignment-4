const allButton = document.getElementById('ALL-btn');
const interviewButton = document.getElementById('interview-button');
const rejectedButton = document.getElementById('rejected-button');
const jobsDiv = document.getElementById('jobs-div');
const hiddenDiv = document.getElementById('hidden-div');
const jobCount = document.getElementById('job-count');
const main = document.getElementById('main-section');

// remove the active state from all buttons and add it to the clicked button
function normal(button) {
    [allButton, interviewButton, rejectedButton].forEach(b => {
        b.classList.remove('bg-blue-500', 'text-white');
        b.classList.add('text-[#64748bFF]', 'bg-white', 'border-none', 'shadow-sm');
    });
    button.classList.remove('text-[#64748bFF]', 'bg-white', 'border-none', 'shadow-sm');
    button.classList.add('bg-blue-500', 'text-white');
}

    allButton.addEventListener('click', function () {
        normal(allButton);
        jobsDiv.classList.remove('hidden');
        hiddenDiv.classList.add('hidden');
        jobCount.innerText = '8 jobs';
    });

    interviewButton.addEventListener('click', function () {
        normal(interviewButton);
        jobsDiv.classList.add('hidden');
        hiddenDiv.classList.remove('hidden');
        jobCount.innerText = '0 jobs';
    });

    rejectedButton.addEventListener('click', function () {
        normal(rejectedButton);
        hiddenDiv.classList.remove('hidden');
        jobsDiv.classList.add('hidden');
        jobCount.innerText = '0 jobs';
});

document.querySelectorAll('.interview').forEach(button => {
    button.addEventListener('click',function(event){
        const jobCard = event.target.closest('.job-card');
        const appliedStatus = jobCard.querySelector('.applied-status');

        appliedStatus.innerText = 'INTERVIEW';
        appliedStatus.classList.add('shadow-green-500', 'border', 'border-green-500', 'text-green-500', 'px-4', 'py-2');
        appliedStatus.classList.remove('shadow-sm', 'border-none', 'text-[#64748bFF]');
        jobCard.classList.add('border','border-green-500');

        const jobsQuantity = document.getElementById('interview-jobs-quantity');
        jobsQuantity.innerText = parseInt(jobsQuantity.innerText) + 1;

        document.getElementById('interview-button').addEventListener('click',function(){
            document.getElementById('main-section').appendChild(jobCard).classList.add('mt-4');
            hiddenDiv.remove();
        })

        allButton.addEventListener('click',function(){
           clickedJob.classList.add('mt-4');
        })

         if(jobsDiv.childElementCount === 0){
                hiddenDiv.classList.remove('hidden');
            }

        button.disabled = true;
        button.innerText = 'Moved';
    })
})

// // add event listeners to the buttons 
// document.querySelectorAll('.interview').forEach(button => {
//     button.addEventListener('click', function(event) {
//         // 1. Find the card and the status element
//         const jobCard = event.target.closest('.job-card');
//         const appliedStatus = jobCard.querySelector('.applied-status');

//         // 2. Update UI Styles
//         appliedStatus.innerText = 'INTERVIEW';
//         appliedStatus.classList.add('shadow-green-500', 'border', 'border-green-500', 'text-green-500', 'px-4', 'py-2');
//         appliedStatus.classList.remove('shadow-sm', 'border-none', 'text-[#64748bFF]');

//         // 3. Update Counters
//         const quantityElem = document.getElementById('interview-jobs-quantity');
//         quantityElem.innerText = parseInt(quantityElem.innerText) + 1;

//         // 4. Move the card to the new section
//         // We use the existing 'jobCard' variable instead of creating a new element
//         document.getElementById('main-section').appendChild(jobCard);
        
//         // 5. Disable the button so it can't be clicked twice
//         button.disabled = true;
//         button.innerText = "Moved";
//     });
// });


document.querySelectorAll('.rejected').forEach(button => {
    button.addEventListener('click', function(event) {
        const jobCard = event.target.closest('.job-card');
        const appliedStatus = jobCard.querySelector('.applied-status');

        appliedStatus.innerText = 'REJECTED';
        appliedStatus.classList.add('shadow-red-500', 'border', 'border-red-500', 'text-red-500', 'px-4', 'py-2');
        appliedStatus.classList.remove('shadow-sm', 'border-none', 'text-[#64748bFF]');

    }); 
});

z
