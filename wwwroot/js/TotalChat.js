// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//  JavaScript code.
document.addEventListener('DOMContentLoaded', function () {
    const chatContainer = document.querySelector('.chat-container');

    const records = {
        "2024-01-01": { "total": 760 },
        "2024-01-02": { "total": 819 },
        "2024-01-03": { "total": 815 },
        "2024-01-04": { "total": 806 },
        "2024-01-05": { "total": 721 },
        "2024-01-06": { "total": 735 },
        "2024-01-07": { "total": 742 },
        "2024-01-08": { "total": 839 },
        "2024-01-09": { "total": 766 },
        "2024-01-10": { "total": 752 },
        "2024-01-11": { "total": 807 },
        "2024-01-12": { "total": 866 },
        "2024-01-13": { "total": 895 },
        "2024-01-14": { "total": 76 }
    };

    Object.entries(records).forEach(([date, record]) => {
        const recordElement = document.createElement('div');
        recordElement.textContent = `${date}: ${record.total} chats`;
        recordElement.classList.add('chat-record'); // Apply the CSS class
        chatContainer.appendChild(recordElement);
    });
});
