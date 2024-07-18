const ctx = document.getElementById('moneyFlowChart').getContext('2d');
const moneyFlowChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Internet',
                data: [187, 190, 300, 500, 200, 300, 450, 300, 200, 300, 400, 500],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Food',
                data: [150, 250, 200, 300, 250, 400, 300, 250, 300, 400, 450, 300],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Shopping',
                data: [200, 300, 250, 350, 200, 300, 350, 300, 250, 350, 300, 250],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            },
            {
                label: 'Vacation',
                data: [100, 150, 200, 250, 100, 200, 250, 200, 150, 250, 200, 100],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Health',
                data: [50, 100, 150, 200, 50, 100, 150, 100, 50, 150, 100, 50],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
