document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');

    function displayNumber(number, callback) {
        countdownElement.innerHTML = number;
        setTimeout(callback, 1000);
    }

    displayNumber(10, function() {
        displayNumber(9, function() {
            displayNumber(8, function() {
                displayNumber(7, function() {
                    displayNumber(6, function() {
                        displayNumber(5, function() {
                            displayNumber(4, function() {
                                displayNumber(3, function() {
                                    displayNumber(2, function() {
                                        displayNumber(1, function() {
                                            setTimeout(function() {
                                                countdownElement.innerHTML = 'Happy Independence Day!';
                                            }, 1000);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});