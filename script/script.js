const allButton = document.getElementById('ALL-btn');
const interviewButton = document.getElementById('interview-button');
const rejectedButton = document.getElementById('rejected-button');
const jobsDiv = document.getElementById('jobs-div');
const hiddenDiv = document.getElementById('hidden-div');
const jobCount = document.getElementById('job-count');

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
        jobsDiv.classList.add('hidden');
        hiddenDiv.classList.remove('hidden');
        jobCount.innerText = '0 jobs';
});



