var conn = null;

/** Clicking 'Connect' **/
$('#ws-open').on('click', function(e) {
    e.preventDefault(); // Stops the page scrolling to the top after clicking an a tag with href="#"

    // ---------- YOUR CODE STARTS HERE ----------
    // @todo #1. Create a new Websocket object in the conn variable (protocol: ws, host: localhost, port: 1338)

    // ---------- YOUR CODE ENDS HERE ----------

    conn.onopen = function() {
        toggleDisabled(); // Disable the Disconnect button so it can't be clicked twice
    };

    // ---------- YOUR CODE STARTS HERE ----------
    // @todo #2. if you set conn.onmessage to be a function with one parameter (e), messages received from the server will be passed in to e.data

    // ---------- YOUR CODE ENDS HERE ----------
});

/** Clicking 'Disconnect' **/
$('#ws-close').on('click', function(e) {
    e.preventDefault(); // Stop the page scrolling to the top after clicking an a tag with href="#"
    toggleDisabled(); // Disable the Disconnect button so it can't be clicked twice

    // ---------- YOUR CODE STARTS HERE ----------
    // @todo #3. Call close() on the Websocket object

    // ---------- YOUR CODE ENDS HERE ----------
});

/** Sending some data **/
$('#ws-send').on('click', function(e) {
    var $textInput = $(this).parents('.input-group').find('input');
    var inputText  = $textInput.val();

    // ---------- YOUR CODE STARTS HERE ----------
    // @todo #4 The Websocket object has a method called send - you can send any data with this method

    // ---------- YOUR CODE ENDS HERE ----------

    resetTextInput($textInput);
});

/** Helper functions - don't worry about these **/
function toggleDisabled() {
    $('#ws-open, #ws-close, #ws-send').toggleClass('disabled');
}

function resetTextInput($textInput) {
    $textInput.val('');
}